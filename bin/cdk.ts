#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ApiGatewayStack } from "../lib";
import { projectPrefix } from "../utils";

const app = new cdk.App();
new ApiGatewayStack(app, projectPrefix("api-gateway-stack"));
