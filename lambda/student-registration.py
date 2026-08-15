import json
import boto3

dynamodb = boto3.resource("dynamodb")

table = dynamodb.Table("Students")


def lambda_handler(event, context):

    response = table.put_item(
        Item={
            "studentId": "002",
            "name": "Test Student",
            "email": "test@example.com",
            "college": "Rathinam Technical Campus",
            "course": "B.Tech IT"
        }
    )

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Student saved successfully"
        })
    }