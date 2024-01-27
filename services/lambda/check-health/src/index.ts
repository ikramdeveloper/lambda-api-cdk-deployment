import { APIGatewayProxyEvent } from 'aws-lambda';
import { catchAsync, formatResponse } from './utils';

export const handler = catchAsync(
  async (_: unknown, event: APIGatewayProxyEvent) => {
    console.log('event', event);

    return formatResponse(200, event);
  },
);
