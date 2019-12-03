import json
import os
import traceback
import uuid

import boto3
from botocore.exceptions import ClientError
from botocore.vendored import requests

def generate_name(event, context):
    status="SUCCESS"
    responseData = {}

    print(event)
    responseData = {"Message": "test-name"}
    response=respond(event,context,status,responseData,None)

    return {
        "Response": response
    }

def respond(event, context, responseStatus, responseData, physicalResourceId):
    #Build response payload required by CloudFormation
    responseBody = {}
    responseBody['Status'] = responseStatus
    responseBody['Reason'] = 'Details in: ' + context.log_stream_name
    responseBody['PhysicalResourceId'] = context.log_stream_name
    responseBody['StackId'] = event['StackId']
    responseBody['RequestId'] = event['RequestId']
    responseBody['LogicalResourceId'] = event['LogicalResourceId']
    responseBody['Data'] = responseData

    #Convert json object to string and log it
    json_responseBody = json.dumps(responseBody)
    print("Response body: " + str(json_responseBody))

    #Set response URL
    responseUrl = event['ResponseURL']

    #Set headers for preparation for a PUT
    headers = {
        'content-type' : '',
        'content-length' : str(len(json_responseBody))
    }

    #Return the response to the signed S3 URL
    try:
        response = requests.put(responseUrl,
        data=json_responseBody,
        headers=headers)
        print("Status code: " + str(response.reason))
        status="SUCCESS"
        return status
    #Defind what happens if the PUT operation fails
    except Exception as e:
        print("send(..) failed executing requests.put(..): " + str(e))
        status="FAILED"
        return status