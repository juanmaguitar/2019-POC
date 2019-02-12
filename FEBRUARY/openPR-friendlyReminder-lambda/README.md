# Open PR Friendly Reminder

This project will launch a process that will get the open PR's from a repo (`SUI-Components/sui-components`) and will trigger a notification to Slack w/ a report of the pending PR's to approve

## Config

This projects works s/ these enviroment variables

```
REPOSITORY=<%REPOSITORY%>
WEBHOOK_URL=<%SLACK_WEBHOOK_URL%>
```

- **REPOSITORY** → A value indicating the repository from which we will get its open PR's 
- **WEBHOOK_URL** → A WebHook URL that can be got from `https://<%SLACK-CHANNEL%>.slack.com/apps/manage/custom-integrations`

## Lambda Function

The code is prepared to be deployed as a lambda function. The cool thing about this is that it will take everything from this folder (including `.env`, `node_modules`, etc...) and will prepare a `.zip` that will be deployed in AWS

👉To use `serverless` properly you have to [install the module globally and set up your aws credentials](../../docs/cron-serverless-lambda-function-aws.md)

### Deploy

To deploy the project we do `serverless deploy`

### Invoke

Once is deployed we can invoke the lambda function with `serverless invoke -f launch -l`


## Schedule

As you can see in `serverless.yml` the function is set to be executed every morning at 9:30 → `rate: cron(30 9 * * ? *)`

https://www.youtube.com/watch?v=KngM5bfpttA