# How to deploy a cron job on AWS Lambda

- [Running cron jobs on AWS Lambda with Scheduled Events](https://medium.com/blogfoster-engineering/running-cron-jobs-on-aws-lambda-with-scheduled-events-e8fe38686e20)
- [Serverless | Quick Start](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)

We need to have:

- Node.js v6.5.0 or later.
- Serverless CLI v1.9.0 or later installed globally → `npm install -g serverless`
- An AWS account
- Set-up your [Provider Credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials) -> [Watch the video on setting up credentials](https://www.youtube.com/watch?v=KngM5bfpttA)

Once we set our credentials properly w/ something like (watch [**this video**]([Watch the video on setting up credentials](https://www.youtube.com/watch?v=KngM5bfpttA)) to get the `key` and he `secret`)...

```
serverless config credentials --provider aws --key XX8X68X6X87X6X876X87X687X --secret D8D79D879D8798D7D+9D8D98D79D87
```

A file at `~/.aws/credentials` will be created and we're ready to deploy and launch our code through serverless