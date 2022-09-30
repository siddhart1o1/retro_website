import json
import pymysql


def lambda_handler(event, context):
    connection = pymysql.connect(
        host="rds-mysql-tutorial.cw5il3f2mv55.ap-south-1.rds.amazonaws.com",
        user="admin",
        password="9908rajesh",
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor)

    github_id = event['params']['querystring'].get('GIHTUB_ID')
    try:
        sql = """SELECT EXISTS(SELECT * FROM github_data.initialdetails where github_id=%s) """
        with connection.cursor() as cursor:
            cursor.execute(sql, (github_id))
            result = cursor.fetchall()
            print(result)
        return {
                'statusCode': 200,
                'body': json.dumps(result)
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps('Internal Error'),
            'message': json.dumps(str(e), default=str)
        }

