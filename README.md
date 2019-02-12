# Monorepo Multipackage 2019

https://medium.com/inato/how-to-setup-heroku-with-yarn-workspaces-d8eac0db0256

## Add Project to Heroku Deploy

```
⬢  2019-POC  master ⦿ heroku create bot2019-pr-friendly-reminder --remote heroku-git-bot2019-pr-friendly-reminder
 ▸    heroku-cli: update available from 6.16.3 to 6.99.0-ec9edad
Creating ⬢ bot2019-pr-friendly-reminder... done
https://bot2019-pr-friendly-reminder.herokuapp.com/ | https://git.heroku.com/bot2019-pr-friendly-reminder.git

```

```
⬢  2019-POC  master ⦿ heroku buildpacks:add -a bot2019-pr-friendly-reminder https://github.com/heroku/heroku-buildpack-multi-procfile
 ▸    heroku-cli: update available from 6.16.3 to 6.99.0-ec9edad
Buildpack added. Next release on bot2019-pr-friendly-reminder will use:
  1. heroku/nodejs
  2. https://github.com/heroku/heroku-buildpack-multi-procfile
Run git push heroku master to create a new release using these buildpacks.
```

## Deploy

```
APP=<%name-app-heroku%> npm run deploy
```

for example
```
APP=bot2019-pr-friendly-reminder npm run deploy
```

