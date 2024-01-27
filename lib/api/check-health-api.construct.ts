import { CfnOutput, Duration } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { join } from "path";
import { projectPrefix } from "../../utils";
import { config } from "../../config";

export class CheckHealthApiConstruct {
  constructor({ stack, api }: { stack: Construct; api: RestApi }) {
    const checkHealth = new Function(stack, projectPrefix("check-health"), {
      code: Code.fromAsset(
        // path of lambda zip file
        join(__dirname, "../../services/lambda/check-health/build/index.zip")
      ),
      functionName: projectPrefix("check-health"),
      handler: "index.handler",

      memorySize: 512,
      environment: {
        //   define environment variables for your lambda here
      },
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(15),
    });

    const checkHealthLambdaIntegration = new LambdaIntegration(checkHealth);
    const checkHealthResource = api.root.addResource("check-health");
    checkHealthResource.addMethod("POST", checkHealthLambdaIntegration);

    new CfnOutput(stack, `${config.app.env}-CheckHealthApiPath`, {
      value: checkHealthResource.path,
    });
  }
}
