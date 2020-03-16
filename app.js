"use strict";

// Imports dependencies and set up http server
const express = require("express"),
request = require("request"),
  { urlencoded, json } = require("body-parser"),
  path = require("path"),
  Receive = require("./services/receive"),
  GraphAPi = require("./services/graph-api"),
  User = require("./services/user"),
  config = require("./services/config"),
  i18n = require("./i18n.config"),
  app = express();
var users = {};

// Parse application/x-www-form-urlencoded
app.use(
  urlencoded({
    extended: true
  })
);

// Parse application/json
app.use(json());

// Serving static files in Express
app.use(express.static(path.join(path.resolve(), "public")));
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
// Set template emgine in Express
app.set("view engine", "ejs");

// Respond with index file when a GET request is made to the homepage
app.get("/", function(_req, res) {
  res.render("index");
});

// Adds support for GET requests to our webhook
app.get("/webhook", (req, res) => {
  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    // Checks the mode and token sent is correct
    if (mode === "subscribe" && token === config.verifyToken) {
      // Responds with the challenge token from the request
    // console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});
// Creates the endpoint for your webhook
app.post("/webhook", (req, res) => {
  let body = req.body;

  // Checks if this is an event from a page subscription
  if (body.object === "page") {
    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {
      // Gets the body of the webhook event
      let webhookEvent = entry.messaging[0];
     //  console.log(webhookEvent);

      // Discard uninteresting events
      if ("read" in webhookEvent) {
        // console.log("Got a read event");
        return;
      }

      if ("delivery" in webhookEvent) {
        // console.log("Got a delivery event");
        return;
      }

      // Get the sender PSID
    let sender_Psid = webhookEvent.sender.id;
      if (!(sender_Psid in users)) {
        let user = new User(sender_Psid);
         if (webhookEvent.message) {
                console.log(webhookEvent.message) 
            } else if (webhookEvent.postback) {
                console.log(webhookEvent.postback)
            }

        GraphAPi.getUserProfile(sender_Psid)
          .then(userProfile => {
            user.setProfile(userProfile);
          })
          .catch(error => {
            // The profile is unavailable
            console.log("Profile is unavailable:", error);
          })
          .finally(() => {
            users[sender_Psid] = user;
            i18n.setLocale(user.locale);
            console.log(
              "New Profile PSID:",
              sender_Psid,
              "with locale:",
              i18n.getLocale()
            );
            let receiveMessage = new Receive(users[sender_Psid], webhookEvent);
            return receiveMessage.handleMessage();
          });
      } else {
        i18n.setLocale(users[sender_Psid].locale);
        console.log(
          "Profile already exists PSID:",
          sender_Psid,
          "with locale:",
          i18n.getLocale()
        );
        let receiveMessage = new Receive(users[sender_Psid], webhookEvent);
        return receiveMessage.handleMessage();
      }
    });
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});
// Set up your App's Messenger Profile
app.get("/profile", (req, res) => {
  let token = req.query["verify_token"];
  let mode = req.query["mode"];

  if (!config.webhookUrl.startsWith("https://")) {
    res.status(200).send("ERROR - Need a proper API_URL in the .env file");
  }
  var Profile = require("./services/profile.js");
  Profile = new Profile();

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    if (token === config.verifyToken) {
      if (mode == "webhook" || mode == "all") {
        Profile.setWebhook();
        res.write(
          `<p>Set app ${config.appId} call to ${config.webhookUrl}</p>`
        );
      }
      if (mode == "profile" || mode == "all") {
        Profile.setThread();
        res.write(`<p>Set Messenger Profile of Page ${config.pageId}</p>`);
      }
      if (mode == "personas" || mode == "all") {
        Profile.setPersonas();
        res.write(`<p>Set Personas for ${config.appId}</p>`);
        res.write(
          "<p>To persist the personas, add the following variables \
          to your environment variables:</p>"
        );
        res.write("<ul>");
        res.write(`<li>PERSONA_BILLING = ${config.personaBilling.id}</li>`);
        res.write(`<li>PERSONA_CARE = ${config.personaCare.id}</li>`);
        res.write(`<li>PERSONA_ORDER = ${config.personaOrder.id}</li>`);
        res.write(`<li>PERSONA_SALES = ${config.personaSales.id}</li>`);
        res.write("</ul>");
      }
      res.status(200).end();
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  } else {
    // Returns a '404 Not Found' if mode or token are missing
    res.sendStatus(404);
  }
});

// listen for requests :)
var listener = app.listen(config.port, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


// Serve the options path and set required headers
app.get('/options', (req, res, next) => {
    let referer = req.get('Referer');
    if (referer) {
        if (referer.indexOf('www.messenger.com') >= 0) {
            res.setHeader('X-Frame-Options', 'ALLOW-FROM https://www.messenger.com/');
        } else if (referer.indexOf('www.facebook.com') >= 0) {
            res.setHeader('X-Frame-Options', 'ALLOW-FROM https://www.facebook.com/');
        }
        res.sendFile('public/options.html', {root: __dirname});
    }
});
// Handle postback from webview
app.get('/optionspostback', (req, res) => {
    let body = req.query;
    let response = {
        "text": `Great, Please click the "https://www.epichost.in/add_cart_domain/33" to purchase. ${body.ssl}`};

    res.status(200).send('Please close this window to return to the conversation thread.');
    callSendAPI(body.psid, response);
});
function callSendAPI(sender_Psid, response) {
  // Construct the message body
  let request_body = {
      "recipient": {
          "id": sender_Psid
      },
      "message": response
  };
  console.log(request_body);
  // Send the HTTP request to the Messenger Platform
  request({
      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": {"access_token": PAGE_ACCESS_TOKEN},
      "method": "POST",
      "json": request_body
  }, (err, res, body) => {
      if (!err) {
          console.log('message sent!')
      } else {
          console.error("Unable to send message:" + err);
      }
  });
}