/**
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Original Coast Clothing
 * https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 */

"use strict";

const i18n = require("../i18n.config");

module.exports = class Response {
  static genQuickReply(text, quickReplies) {
    let response = {
      text: text,
      quick_replies: []
    };

    for (let quickReply of quickReplies) {
      response["quick_replies"].push({
        content_type: "text",
        title: quickReply["title"],
        payload: quickReply["payload"]
      });
    }

    return response;
  }

  static genGenericTemplate(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: title,
              subtitle: subtitle,
              image_url: image_url,
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }
  static genGenericTemplatessl(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Comodo PositiveSSL",
              subtitle: "₹539.10/ year, Warranty: 2500$",
              image_url: "https://mca-cdn.com/sites/default/files/ssl-features.png",
              buttons: [{
                type: "web_url",
                url: "https://pacific-gorge-51629.herokuapp.com/options.html",
                title: "View Details",
                webview_height_ratio: "compact",
                messenger_extensions: true
            }]
            },
            {
              title: "RapidSSL Standard",
              subtitle: "₹1,399.00/ year, Warranty: 10,000$, ",
              image_url: "https://mca-cdn.com/sites/default/files/ssl-features.png",
              buttons: [{
                type: "web_url",
                url: "https://pacific-gorge-51629.herokuapp.com/rapidssl.html",
                title: "View Details",
                webview_height_ratio: "compact",
                messenger_extensions: true
            }]
            },
            {
              title: "RapidSSL Wildcard Certificate",
              subtitle: "₹14,999.00/ year, Warranty: 5,000$",
              image_url: "https://mca-cdn.com/sites/default/files/ssl-features.png",
              buttons: [{
                type: "web_url",
                url: "https://pacific-gorge-51629.herokuapp.com/options.html",
                title: "View Details",
                webview_height_ratio: "compact",
                messenger_extensions: true
            }]
            }
          ]
        }
      }
    };

    return response;
  }
  static genGenericTemplatesdl(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Basic Linux Single Domain",
              subtitle: "₹46.00/ month,Free SSL for lifetime, 5 GB SSD Space, Up to 10 GB Bandwidth",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            },
            {
              title: "Standard Linux Single Domain",
              subtitle: "₹62.68/ month, 25 GB Disk Space, 10 GB - 200 GB Bandwidth, Unlimited Emails, 5 My Sql 5 Sub-domains, Control Panel (c-Panel).",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            },
            {
              title: "Economy Linux Single Domain",
              subtitle: "₹79.93/ month,75 GB Disk Space, 200-1000GB Bandwidth, Unlimited Emails, 5 My Sql 5 Sub-domains, Control Panel (c-Panel).",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            },
            {
              title: "Business Linux Single Domain",
              subtitle: "₹108.68/ month, Unlimited Disk Space, Unlimited Bandwidth, Unlimited Emails, 5 My Sql 5 Sub-domains, Control Panel (c-Panel).",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }

  static genGenericTemplatesdw(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Basic Windows Single Domain",
              subtitle: "₹48.40/ month, 2 GB Space, Up to 10 GB Bandwidth, 2 MS Sql (200MB), 2 My Sql (200MB)",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            },
            {
              title: "Standard Windows Single Domain",
              subtitle: "₹65.95/ month ,25 GB Disk Space, 10 GB - 200 GB Bandwidth, Unlimited Emails, 2 My Sql, 2 MS Sql, 5 Sub-domains",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            },
            {
              title: "Economy Windows Single Domain",
              subtitle: "₹84.10/ month,75 GB Disk Space, 200-1000GB Bandwidth, Unlimited Emails, 2 My Sql, 2 MS Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            },
            {
              title: "Business Windows Single Domain",
              subtitle: "₹114.35/ month, Unlimited Disk Space, Unlimited Bandwidth, Unlimited Emails,  2 My Sql, 2 MS Sql.",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }

  static genGenericTemplateswmd(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Basic Windows Multi Domain",
              subtitle: "₹180.90/month, 5 Domains, Unlimited Space, Unlimited Bandwidth, 10 MS Sql, 10 My Sql",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            },
            {
              title: "Standard Windows Multi Domain",
              subtitle: "₹211.75/month, 25 Domains, 50GB Space, Unlimited Bandwidth, 50 MS Sql, 50 My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            },
            {
              title: "Pro Windows Multi Domain",
              subtitle: "₹242.00/month, 10 Domains, Unlimited Space, Unlimited Bandwidth, 20 MS Sql, 20 My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }
  static genGenericTemplateslmd(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Basic Linux Multi Domain",
              subtitle: "₹154.68/month, 10 Domains, Unlimited Space, Unlimited Bandwidth, Unlimited my Sql.",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            },
            {
              title: "Standard Linux Multi Domain",
              subtitle: "₹206.43/month, Unlimited Domains, Unlimited Space, Unlimited Bandwidth, Unlimited My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }

  static genGenericTemplatesrlh(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Basic Linux Reseller Hosting",
              subtitle: "₹49.39/month, 20 Domains, 20GB Space, 200GB Bandwidth, Unlimited my Sql.",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            },
            {
              title: "Standard Linux Reseller Hosting",
              subtitle: "₹77.99/month, Unlimited Domains, 80 Space, 800GB Bandwidth, Unlimited My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            },
            {
              title: "Economy Linux Reseller Hosting",
              subtitle: "₹439.45/month, Unlimited Domains, 50GB Space, 1000GB Bandwidth, Unlimited My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            },
            {
              title: "Business Linux Reseller Hosting",
              subtitle: "₹576.95/month, Unlimited Domains, 100Gb Space, 2000GB Bandwidth, Unlimited My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/sdlh1.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }



  static genGenericTemplatesrw(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Basic Windows Reseller Hosting",
              subtitle: "₹109.65/month, Unlimited Domains, 10GB Space, 200GB Bandwidth, Unlimited my Sql.",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            },
            {
              title: "Standard Windows Reseller Hosting",
              subtitle: "₹134.29/month, Unlimited Domains, 25 Space, 500GB Bandwidth, Unlimited My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            },
            {
              title: "Economy Windows Reseller Hosting",
              subtitle: "₹850.64/month, Unlimited Domains, 50GB Space, 1000GB Bandwidth, Unlimited My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            },
            {
              title: "Business Windows Reseller Hosting",
              subtitle: "₹1,371.44/month, Unlimited Domains, 100Gb Space, 2000GB Bandwidth, Unlimited My Sql ",
              image_url: "https://mca-cdn.com/sites/default/files/multi-domain-windows-hosting.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }
  static genGenericTemplateswordpress(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Wordpress Hosting",
              subtitle: "₹164.50/month, 5GB Space, Up to 10GB Bandwidth, 5 Email Accounts, 5 My Sql.",
              image_url: "https://mca-cdn.com/sites/default/files/users/user1/wordpress-banner1.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }

  static genGenericTemplateswebbuilder(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Website Builder - Website",
              subtitle: "₹25/month, Unlimited Pages, Unlimited Bandwidth, 500MB Space, Free SSL (httpS), Ready to go 300+ Profession Website themes.",
              image_url: "https://mca-cdn.com/sites/default/files/users/user1/website-builder01_0.png",
              buttons: buttons
            },
            {
              title: "Website Builder - E-commerce",
              subtitle: "₹350/month, Unlimited Pages, Unlimited Bandwidth, 2GB Space, Ad free, Ready to go themes, Expert themes.",
              image_url: "https://mca-cdn.com/sites/default/files/users/user1/website-builder01_0.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }
  static genGenericTemplatesssd(image_url, title, subtitle, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "5GB SSD Hosting Linux",
              subtitle: "₹301.90/month, 100GB Bandwidth, 5GB Space,10 Email Accounts, 2 My Sql.",
              image_url: "https://hostsailor.com/wp-content/uploads/2017/11/3-3-300x198.png",
              buttons: buttons
            },
            {
              title: "5GB SSD Hosting Windows",
              subtitle: "₹301.90/month, 100GB Bandwidth, 5GB Space,10 Email Accounts, 2 My Sql.",
              image_url: "https://hostsailor.com/wp-content/uploads/2017/11/3-3-300x198.png",
              buttons: buttons
            }
          ]
        }
      }
    };

    return response;
  }
  static genImageTemplate(image_url, title, subtitle = "") {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: title,
              subtitle: subtitle,
              image_url: image_url
            },
            {
              title: title,
              subtitle: subtitle,
              image_url: image_url
            }
          ]
        }
      }
    };

    return response;
  }

  static genButtonTemplate(title, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: title,
          buttons: buttons
        }
      }
    };

    return response;
  }

  static genText(text) {
    let response = {
      text: text
    };

    return response;
  }

  static genTextWithPersona(text, persona_id) {
    let response = {
      text: text,
      persona_id: persona_id
    };

    return response;
  }

  static genPostbackButton(title, payload) {
    let response = {
      type: "postback",
      title: title,
      payload: payload
    };

    return response;
  }

  static genWebUrlButton(title, url) {
    let response = {
      type: "web_url",
      title: title,
      url: url,
      messenger_extensions: true,
       webview_height_ratio: "tall",
    };

    return response;
  }

  static genNuxMessage(user) {
    let welcome = this.genText(
      i18n.__("get_started.welcome", {
        userFirstName: user.firstName
      })
    );

    let guide = this.genText(i18n.__("get_started.guidance"));

    let curation = this.genQuickReply(i18n.__("get_started.help"), [
      {
        title: i18n.__("menu.suggestion"),
        payload: "CURATION"
      },
      {
        title: i18n.__("menu.help"),
        payload: "CARE_HELP"
      }
    ]);

    return [welcome, guide, curation];
  }
};
