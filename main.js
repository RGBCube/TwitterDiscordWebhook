import fs from "fs";
import Twitter from "twit";
import { Webhook } from "discord-webhook-node";

const config = JSON.parse(fs.readFileSync("./config.json"));

const dClient = new Webhook(config.discord.webhookUrl);
dClient.setUsername(config.discord.webhookName);
dClient.setAvatar(config.discord.webhookAvatar);

const tClient = new Twitter({
    consumer_key: config.twitter.apiKey,
    consumer_secret: config.twitter.apiSecret,
    access_token: config.twitter.accessToken,
    access_token_secret: config.twitter.acessSecret,
});

tClient.get("account/verify_credentials", { skip_status: true })
    .catch(err => console.error(`Unable to login due to the following error:\n${err}`))

    .then(res => console.info(`Logged in as '${res.data.name}'!`));

console.info(`Fetching tweets from ID '${config.followingUserId}'.`);

tClient.stream("statuses/filter", { follow: config.followingUserId })
    .on("tweet", twt => {
        if (twt.retweeted_status || twt.in_reply_to_status_id || twt.is_quote_status) return;

        let twitterLink = `https://twitter.com/${twt.user.screen_name}/status/${twt.id_str}`;
        dClient.send(`${config.discord.webhookMessage} ${twitterLink}`);
    })

    .on("connected", () => console.info("Connected to Twitter!"))

    .on("disconnect", () => console.warn("Disconnected from Twitter!"))

    .on("reconnect", () => console.info("Reconnected to Twitter!"));

process.on("uncaughtException", err =>
    console.error(`Something (bad) happened:\n${err}`)
);
