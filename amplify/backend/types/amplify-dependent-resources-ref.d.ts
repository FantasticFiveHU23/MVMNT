export type AmplifyDependentResourcesAttributes = {
  "api": {
    "mvmnt": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "MVMNT": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "storage": {
    "s3mvmntdatastore": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}