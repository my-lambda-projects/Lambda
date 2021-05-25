"use strict";

const axios = require("axios");
const oneLinerJoke = require("one-liner-joke");

module.exports.webhook = (event, context, callback) => {
  if (event.method === "GET") {
    // facebook app verification
    if (
      event.query["hub.verify_token"] === process.env.VERIFY_TOKEN &&
      event.query["hub.challenge"]
    ) {
      return callback(null, parseInt(event.query["hub.challenge"]));
    } else {
      return callback(new Error("Invalid token"));
    }
  }

  if (event.method === "POST") {
    const entry = event.body.entry[0];
    const messagingItem = entry.messaging[0];
    if (!(messagingItem.message && messagingItem.message.text)) {
      return callback(new Error("No message."));
    }

    const joke = oneLinerJoke.getRandomJoke();
    const url = `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.ACCESS_TOKEN}`;

    const payload = {
      recipient: {
        id: messagingItem.sender.id,
      },
      message: {
        text: joke.body,
      },
    };

    axios
      .post(url, payload)
      .then((response) => callback(null, response))
      .catch((err) => callback(err));
  }
};
