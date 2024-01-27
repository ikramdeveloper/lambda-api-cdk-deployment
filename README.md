# Lambda and API Gateway Deployment with AWS CDK

A boilerplate for the deployment of lambda with api gateway on AWS with CDK and TypeScript.

You can read the complete article [on medium](https://medium.com/@ikramdeveloper/aws-lambda-and-api-gateway-deployment-with-cdk-and-typescript-b71ecdc7ddd2)

## Setup:

- Clone repo: `git clone https://github.com/ikramdeveloper/lambda-api-cdk-deployment.git`

- Go to directory: `cd lambda-api-cdk-deployment`

- Install dependencies: `npm i`

You can find the code of lambda inside services/lambda directory

## Info:

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
