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
// Imports dependencies
const Response = require("./response"),
  config = require("./config"),
  i18n = require("../i18n.config");

module.exports = class Curation {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response;
    let outfit;

    switch (payload) {
      case "F8-2019":
        response = [
          Response.genText(
            i18n.__("get_started.f8-welcome", {
              userFirstName: this.user.firstName
            })
          ),
          Response.genText(i18n.__("get_started.f8-guidance")),
          Response.genQuickReply(i18n.__("get_started.f8-help"), [
            {
              title: i18n.__("menu.suggestion"),
              payload: "CURATION"
            },
            {
              title: i18n.__("menu.help"),
              payload: "CARE_HELP"
            }
          ])
        ];
        break;

      case "CURATION":
        response = Response.genQuickReply(i18n.__("curation.prompt"), [
          {
            title: i18n.__("curation.domainhosting"),
            payload: "CURATION_DOMAINH"
          },
          {
            title: i18n.__("curation.domain"),
            payload: "CURATION_DOMAIN"
          },
          {
            title: i18n.__("curation.ssl"),
            payload: "CURATION_SSL"
          }
        ]);
        break;

      case "CURATION_DOMAINH":

        response = Response.genQuickReply(i18n.__("curation.occasion"), [
          {
              title: i18n.__("curation.singled"),
              messenger_extensions: true,
              payload: "CURATION_OCASION_SINGLED"
            },
            {
              title: i18n.__("curation.multid"),
              payload: "CURATION_OCASION_MULTID"
            },
            {
              title: i18n.__("curation.reseller"),
              payload: "CURATION_OCASION_RESELLER"
            },
            {
              title: i18n.__("curation.ssd"),
              payload: "CURATION_OCASION_SSD"
            },
            {
              title: i18n.__("curation.wordpress"),
              payload: "CURATION_OCASION_WORDPRESS"
            },
            {
              title: i18n.__("curation.websitebuilder"),
              payload: "CURATION_OCASION_WEBSITEBUILDER"
            },
            {
              title: i18n.__("curation.sales"),
              payload: "CARE_SALES"
            }
          ]);
          break;
  case "CURATION_DOMAIN":
  response = Response.genText(i18n.__("curation.register"));
  break;


  case "CURATION_OCASION_SINGLED":

            response = Response.genQuickReply(i18n.__("curation.occasion"), [
              {
                title: i18n.__("curation.linuxsd"),
                payload: "CURATION_OCASION_LINUXSD"
              },
                         {
                title: i18n.__("curation.windowssd"),
                payload: "CURATION_OCASION_WINDOWSSD"
              },
              {
                title: i18n.__("curation.sales"),
                payload: "CARE_SALES"
              }
            ]);
            break;
   case "CURATION_OCASION_MULTID":

            response = Response.genQuickReply(i18n.__("curation.occasion"), [
              {
                title: i18n.__("curation.linuxmd"),
                payload: "CURATION_OCASION_LINUXMD"
              },
                         {
                title: i18n.__("curation.windowsmd"),
                payload: "CURATION_OCASION_WINDOWSMD"
              },
              {
                title: i18n.__("curation.sales"),
                payload: "CARE_SALES"
              }
            ]);
            break;

  case "CURATION_OCASION_RESELLER":

            response = Response.genQuickReply(i18n.__("curation.occasion"), [
              {
                title: i18n.__("curation.linuxrh"),
                payload: "CURATION_OCASION_LINUXRH"
              },
                         {
                title: i18n.__("curation.windowsr"),
                payload: "CURATION_OCASION_WINDOWSR"
              },
              {
                title: i18n.__("curation.sales"),
                payload: "CARE_SALES"
              }
            ]);
            break;



  case "CURATION_OCASION_WORDPRESS":

      response = Response.genGenericTemplateswordpress(
        `${config.appUrl}/order.png`,
        i18n.__("curation.ssl"),
        i18n.__("curation.infossl"),

      [
        Response.genWebUrlButton(
          i18n.__("curation.shop"),
          `${config.shopUrl}/wordpress-hosting/`
        )
      ]
      );
       break;

  case "CURATION_OCASION_WEBSITEBUILDER":

      response = Response.genGenericTemplateswebbuilder(
        `${config.appUrl}/order.png`,
        i18n.__("curation.ssl"),
        i18n.__("curation.infossl"),

      [
        Response.genWebUrlButton(
          i18n.__("curation.shop"),
          `${config.shopUrl}/website-builder/`
        )
      ]
      );
       break;

          /* ssl packages */
        case "CURATION_SSL":

                    response = Response.genGenericTemplatessl(
                      `${config.appUrl}/order.png`,
                      i18n.__("curation.ssl"),
                      i18n.__("curation.infossl"),

                   [Response.genPostbackButton(
                    i18n.__("curation.show"),
                    "CURATION_SSL"
                  )
                ]
                    );
                    break;
/* single domain hosting packagaes **/
                    case "CURATION_OCASION_LINUXSD":
                        response = Response.genGenericTemplatesdl(
                          `${config.appUrl}/order.png`,
                          i18n.__("curation.ssl"),
                          i18n.__("curation.infossl"),

                        [
                          Response.genWebUrlButton(
                            i18n.__("curation.shop"),
                            `${config.shopUrl}/linux-single-domain-hosting/`
                          )
                        ]
                        );
                        break;
                        case "CURATION_OCASION_WINDOWSSD":
                            response = Response.genGenericTemplatesdw(
                              `${config.appUrl}/order.png`,
                              i18n.__("curation.ssl"),
                              i18n.__("curation.infossl"),

                            [
                              Response.genWebUrlButton(
                                i18n.__("curation.shop"),
                                `${config.shopUrl}/windows-single-domain-hosting/`
                              )
                            ]
                            );
                            break;
                            /* multidomain packagaes **/
                            case "CURATION_OCASION_WINDOWSMD":
                                response = Response.genGenericTemplateswmd(
                                  `${config.appUrl}/order.png`,
                                  i18n.__("curation.ssl"),
                                  i18n.__("curation.infossl"),

                                [
                                  Response.genWebUrlButton(
                                    i18n.__("curation.shop"),
                                    `${config.shopUrl}/multi-domain-windows-hosting/`
                                  )
                                ]
                                );
                                break;
                                case "CURATION_OCASION_LINUXMD":
                                    response = Response.genGenericTemplateslmd(
                                      `${config.appUrl}/order.png`,
                                      i18n.__("curation.ssl"),
                                      i18n.__("curation.infossl"),

                                    [
                                      Response.genWebUrlButton(
                                        i18n.__("curation.shop"),
                                        `${config.shopUrl}/multi-domain-linux-hosting/`
                                      )
                                    ]
                                    );
                                    break;
                                    case "CURATION_OCASION_LINUXRH":
                                    response = Response.genGenericTemplatesrlh(
                                      `${config.appUrl}/order.png`,
                                      i18n.__("curation.ssl"),
                                      i18n.__("curation.infossl"),

                                    [
                                      Response.genWebUrlButton(
                                        i18n.__("curation.shop"),
                                        `${config.shopUrl}/linux-reseller-hosting/`
                                      )
                                    ]
                                    );
                                    break;
                                    case "CURATION_OCASION_WINDOWSR":
                                        response = Response.genGenericTemplatesrw(
                                          `${config.appUrl}/order.png`,
                                          i18n.__("curation.ssl"),
                                          i18n.__("curation.infossl"),

                                        [
                                          Response.genWebUrlButton(
                                            i18n.__("curation.shop"),
                                            `${config.shopUrl}/windows-reseller-hosting/`
                                          )
                                        ]
                                        );
                                        break;

                                        case "CURATION_OCASION_SSD":

                                            response = Response.genGenericTemplatesssd(
                                              `${config.appUrl}/order.png`,
                                              i18n.__("curation.ssl"),
                                              i18n.__("curation.infossl"),

                                            [
                                              Response.genWebUrlButton(
                                                i18n.__("curation.shop"),
                                                `${config.shopUrl}/ssd-hosting/`
                                              )
                                            ]
                                            );
                                             break;
    }
    return response;
  }
};