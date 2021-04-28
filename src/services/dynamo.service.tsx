import { DYNAMO_IDENTITY_POOL_ID } from "../constants/aws.variables";

const AWS = require('aws-sdk')

AWS.config.update({ 
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: DYNAMO_IDENTITY_POOL_ID
  }),
  region: 'us-east-1'
})

console.log(AWS.config.credentials);
console.log(process.env);
const dynamodb = new AWS.DynamoDB.DocumentClient()

export const putItem = async (table:string, item:any) => {
  const params = {
    TableName: table,
    Item: item
  }

  return dynamodb.put(params).promise()
}
