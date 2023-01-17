# Twitter -> Discord Webhook
Simple (enough) to configure Twitter -> Discord webhook. Runs on Node.js

## Setup

### Clone This Project & Cd Into It
> You will need `git` installed to do this!

```sh
git clone https://github.com/Stovven/discord-twitter-webhook
cd discord-twitter-webhook
```

### Configure
Edit the `config.json` with the given information below:

* `webhook_url`: The Discord webhook url, for more information check out [this](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) page.
* `webhook_name`: The username of your Discord webhook.
* `webhook_avatar`: The avatar of your Discord webhook.
* `webhook_message`: The message before your Twitter link. Formatted as `{message} {tweet_link}`, no newline added.
* `api_key`: The Twitter API key, if you do not have a Twitter developer account then check out [this](https://developer.twitter.com/en) page.
* `api_secret`: The Twitter API secret, requires a Twitter developer account.
* `access_token`: The Twitter account access token, requires a Twitter developer account.
* `access_secret`: The Twitter account acesss secret, requires a Twitter developer account.
* `user_id`: The user ID for the Twitter account you want notifications from, to find a Twitter id use [this](https://tweeterid.com/) tool.

### Install Dependencies
> You will need Node.js installed to do this and the next section! If you don't have it installed, you can install it from [here](https://nodejs.org/en/).

```sh
npm install
```

### Run

```sh
node main.js
```

## License

```
twitter-discord-webhook
Copyright (C) 2022-present  Stovven & RGBCube

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```
