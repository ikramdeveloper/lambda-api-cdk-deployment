import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Cors, MethodLoggingLevel, RestApi } from "aws-cdk-lib/aws-apigateway";
import { projectPrefix } from "../utils";
import { CheckHealthApiConstruct } from "./api/check-health-api.construct";

export class ApiGatewayStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new RestApi(this, projectPrefix("api"), {
      restApiName: projectPrefix("api"),
      deployOptions: {
        metricsEnabled: false,
        loggingLevel: MethodLoggingLevel.INFO,
        dataTraceEnabled: true,
      },
      cloudWatchRole: true,
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
        allowHeaders: [
          "Content-Type",
          "X-Amz-Date",
          "Authorization",
          "X-Api-Key",
          "X-Amz-Security-Token",
          "X-API-Type",
        ],
      },
    });

    // add api construct
    new CheckHealthApiConstruct({
      stack: this,
      api,
    });
  }
}
