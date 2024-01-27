import { config } from "dotenv";

const ENV = process.env.NODE_ENV;
config({
  path: `./.env.${ENV}`,
});

import { handler } from "./index";

handler(
  {
    resource: "/check-health",
    path: "/check-health",
    httpMethod: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    multiValueHeaders: {
      "X-Forwarded-Proto": ["https"],
    },
    queryStringParameters: {},
    multiValueQueryStringParameters: {},
    pathParameters: {},
    stageVariables: null,
    requestContext: {
      resourceId: "test",
      resourcePath: "/check-health",
      httpMethod: "POST",
      extendedRequestId: "N0QxAHxrBAcEteQ=",
      requestTime: "25/Jan/2024:10:14:30 +0000",
      path: "/prod/check-health",
      accountId: "test",
      protocol: "HTTP/1.1",
      stage: "prod",
      domainPrefix: "test",
      requestTimeEpoch: 1699006470197,
      requestId: "test-uuid",
      authorizer: {
        userId: 5,
      },
      identity: {
        cognitoIdentityPoolId: null,
        accountId: null,
        cognitoIdentityId: null,
        caller: null,
        sourceIp: "ip-address",
        principalOrgId: null,
        accessKey: null,
        cognitoAuthenticationType: null,
        cognitoAuthenticationProvider: null,
        userArn: null,
        userAgent:
          "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
        user: null,
        apiKey: null,
        apiKeyId: null,
        clientCert: null,
      },
      domainName: "test.execute-api.us-east-1.amazonaws.com",
      apiId: "test",
    },
    body: null,
    isBase64Encoded: false,
  },

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  {},
).then((result: any) => {
  console.log("result", result);
});
