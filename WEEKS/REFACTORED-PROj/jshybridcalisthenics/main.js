/* jshint esversion: 8 */

require("dotenv").config();
const Discord = require("discord.js");
const { Menu } = require("discord.js-menu");
const nconf = require("nconf");
const ytsr = require("ytsr");
const ig = require("scraper-instagram");
// Load Token / Prefix from .env file
token = process.env.token;
prefix = process.env.prefix;
igToken = process.env.ig_token;
// Load Config.json file
nconf.use("file", { file: "./config.json" });
nconf.load();

const igClient = new ig();
let latestIGPost;
let hybridVideoIndex;

const client = new Discord.Client();

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Get Latest instagram post from Profile
  let lastIGPost = await igClient
    .getProfile("hybrid.calisthenics")
    .then((result) => {
      return result.lastPosts[0];
    });

  // Compare to latest instagram post from Profile
  setInterval(async () => {
    let newPost = await igClient
      .getProfile("hybrid.calisthenics")
      .then((result) => {
        return result.lastPosts[0];
      });
    // If new post, update lastIGPost, and send new image to be posted in announcements channel.
    if (newPost.shortcode != lastIGPost.shortcode) {
      lastIGPost = newPost;
      IGnewPost(newPost);
    }
  }, 1800000);
});

client.on("message", async (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // check ping
  if (command === "ping") {
    let pingEmbed = new Discord.MessageEmbed({
      title: "Ping Stats",
      fields: [{ name: "API Ping", value: `${Math.round(client.ws.ping)}ms` }],
    });
    msg.channel.send(pingEmbed);
  }

  // search videos command
  if (command === "search") {
    const query = args.join(" ");
    searchEmbed.setDescription = "Searching";
    var embedMessage = await msg.channel.send(searchEmbed);

    ytSearch(query).then((result) => {
      if (result == null) {
        resultEmbed = new Discord.MessageEmbed()
          .setColor("#FF0000")
          .setTitle("Failed")
          .setTimestamp()
          .setFooter("Bot created by AdrianH#5605");
      } else {
        arrofEmbeds = [];
        for (let x in result) {
          let msgEmbed = {
            name: x,
            content: new Discord.MessageEmbed({
              color: "#00FF00",
              title: result[x].title,
              description: result[x].description,
              author: result[x].author.name,
              url: result[x].url,
              footer: { text: "Bot created by AdrianH#5665" },
              fields: { name: "Uploaded", value: result[x].uploadedAt },
            }).setImage(result[x].thumbnails[0].url),

            reactions: {
              "⬅": "previous",
              "➡": "next",
              "⛔": "stop",
              "1️⃣": "first",
            },
          };
          arrofEmbeds.push(msgEmbed);
        }
        let resultMenu = new Menu(msg.channel, msg.author.id, arrofEmbeds);
        embedMessage.delete();
        resultMenu.start();
      }
    });
  }
  // set announcement channel
  if (
    command === "setann" &&
    msg.member.guild.me.hasPermission("ADMINISTRATOR")
  ) {
    nconf.set("announcementChannel", msg.channel.id);
  }

  if (command === "instagram") {
    igClient
      .getProfile("hybrid.calisthenics")
      .then((profile) => {
        let arrofEmbeds = [];
        for (let post in profile.lastPosts) {
          let msgEmbed = {
            name: post,
            content: new Discord.MessageEmbed({
              color: "#00FF00",
              title: "Hybrid.Calisthenics",
              description: `${profile.lastPosts[post].caption.substring(
                0,
                300
              )}...`,
              url: `http://instagram.com/p/${profile.lastPosts[post].shortcode}`,
              footer: { text: "Bot created by AdrianH#5665" },
            }).setImage(profile.lastPosts[post].thumbnail),

            reactions: {
              "⬅": "previous",
              "➡": "next",
              "⛔": "stop",
              "1️⃣": "first",
            },
          };
          arrofEmbeds.push(msgEmbed);
        }
        let resultMenu = new Menu(msg.channel, msg.author.id, arrofEmbeds);
        resultMenu.start();
      })
      .catch((err) => console.log(err));
  }

  if (command === "socials") {
    msg.channel.send(socialsEmbed);
  }

  if (command === "help") {
    msg.channel.send(helpEmbed);
  }

  if (command === "routine") {
    msg.channel.send(routineEmbed);
  }

  if (command === "sephiroth") {
    msg.channel.send("https://youtu.be/-5sLN2h2_9E");
  }
});

const IGnewPost = (post) => {
  announcementChannel = client.channels.cache.get(
    nconf.get("announcementChannel")
  );
  const newPostEmbed = new Discord.MessageEmbed({
    title: "View post on Instagram",
    description: post.caption,
    url: `http://instagram.com/p/${post.shortcode}`,
    footer: { text: "Bot created by AdrianH#5655" },
  }).setImage(post.thumbnail);

  announcementChannel.send(newPostEmbed);
};

const ytSearch = async (query) => {
  let x = await ytsr(`"Hybrid Calisthenics" ${query}`).then((result) => {
    let results = [];
    for (let item of result.items) {
      if (
        item.type == "video" &&
        item.author.url ==
          "https://www.youtube.com/channel/UCeJFgNahi--FKs0oJyeRDEw"
      ) {
        results.push(item);
      }
    }
    return results;
  });
  return x;
};

const routineEmbed = new Discord.MessageEmbed({
  color: "#7851A9",
  title: "Hybrid Calisthenics Routine",
  url: "https://www.hybridcalisthenics.com/routine",
  description:
    "If you have questions about fitness, make sure to check out this routine first.\n There's a lot of answers to your questions right here. ",
  footer: { text: "Bot created by AdrianH#5665" },
}).setImage(
  "https://images.squarespace-cdn.com/content/5deaeb267bc46246f5378ee8/1594320600428-CLI457D26L5F0ZP36SBO/hycal+black+logo+transparent+No+slogan.png?content-type=image%2Fpng"
);

const socialsEmbed = new Discord.MessageEmbed({
  color: "#7851A9",
  title: "Hybrid Calisthenics Social Media",
  footer: { text: "Bot created by AdrianH#5665" },
  fields: [
    {
      name: "Twitter",
      value: "[hcalisthenics](https://twitter.com/hcalisthenics)",
      inline: true,
    },
    {
      name: "Tiktok",
      value: "[hybridcalisthenics](https://www.tiktok.com/@hybridcalisthenics)",
      inline: true,
    },
    {
      name: "YouTube",
      value:
        "[Hybrid Calisthenics](https://www.youtube.com/channel/UCeJFgNahi--FKs0oJyeRDEw)",
      inline: true,
    },
    {
      name: "Facebook",
      value: "[HCalisthenics](https://www.facebook.com/HCalisthenics)",
      inline: true,
    },
    {
      name: "Twitch",
      value: "[Twitch](https://www.hybridcalisthenics.com/twitch)",
      inline: true,
    },
    {
      name: "Tumblr",
      value: "[hybridcalisthenics](https://www.hybridcalisthenics.com/tumblr)",
      inline: true,
    },
    {
      name: "Patreon",
      value: "[hybridcalisthenics](https://www.patreon.com/hybridcalisthenics)",
      inline: true,
    },
    {
      name: "OnlyFans (Family Friendly)",
      value: "[hybridcalisthenics](https://hybridcalisthenics.com/onlyfans)",
      inline: true,
    },
    {
      name: "R̵͍̠͑̽͛E̵̝͊́̇ͅD̸͖͑̕Ă̷̫͂C̵̙̗̅͊͒T̴̠̀͐E̴͈͝Ḑ̴̞̞̳̉",
      value:
        "[HybridCalisthenics](https://www.hybridcalisthenics.com/redacted)",
      inline: true,
    },
    {
      name: "Subreddit",
      value: "[Reddit](https://www.hybridcalisthenics.com/subreddit)",
      inline: true,
    },
  ],
}).setImage(
  "https://images.squarespace-cdn.com/content/5deaeb267bc46246f5378ee8/1594320600428-CLI457D26L5F0ZP36SBO/hycal+black+logo+transparent+No+slogan.png?content-type=image%2Fpng"
);

const helpEmbed = new Discord.MessageEmbed({
  title: "Bot Commands",
  footer: { text: "Bot created by AdrianH#5665" },
  fields: [
    {
      name: `${prefix}search <query>`,
      value: "Search Hampton's Youtube Channel",
    },
    {
      name: `${prefix}socials`,
      value: "Display list of all of Hampton's Social Media",
    },
    {
      name: `${prefix}instagram`,
      value: "Get the latest post from Hampton's instagram.",
    },
    { name: `${prefix}routine`, value: "Get Hampton's routine!" },
  ],
});

const searchEmbed = new Discord.MessageEmbed({
  color: "#7851A9",
  title: "Searching...",
  footer: "Bot created by AdrianH#5665",
});

(async () => {
  console.log("Starting Bot...");
  igClient
    .authBySessionId(igToken)
    .then((account) => console.log(account))
    .catch((err) => console.log(err));
  client.login(token).catch((err) => {
    console.error(err);
  });
})();

setInterval(async () => {
  console.log("Bot still running.");
  nconf.save(function (err) {
    if (err) {
      console.error(err.message);
      return;
    }
  });
}, 1000);
