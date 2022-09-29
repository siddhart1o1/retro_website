import json
import pymysql
from datetime import datetime

from build_functions import *
from general_functions import *


def lambda_handler(event, context):
    connection = pymysql.connect(
        host="rds-mysql-tutorial.cw5il3f2mv55.ap-south-1.rds.amazonaws.com",
        user="admin",
        password="9908rajesh",
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor)

    USER_ID = event['USER_ID']

    with connection.cursor() as cursor:
        sql = "SELECT github_token,sonar_cloud_token,github_id,sonar_user_key FROM github_users.github_user_auth where user_id=%s "
        cursor.execute(sql, (USER_ID))
        result = cursor.fetchone()

    GITHUB_TOKEN = result['github_token']
    SONAR_TOKEN = result['sonar_cloud_token']
    REPO_OWNER = result['github_id']
    SONAR_ORGANISATION = result['sonar_user_key']

    # theses will get from front end
    APPLICANT_ID = event['APPLICANT_ID']
    TASK = event.get('TASK', None)
    TASK_LANG = event.get('TASK_LANG', None)
    TASK_CLOSE_DATE = event.get('TASK_CLOSE_DATE', None)
    TASK_TITLE = event.get('TASK_TITLE', None)
    APPLICANT_GITHUB = event.get('APPLICANT_GITHUB', None)
    AREA = event.get('AREA', None)
    LEVEL = event.get('LEVEL', None)
    JOB_ID = event.get('JOB_ID', None)

    #repo_name
    curr_dt = datetime.now()
    REPO_NAME = f"{(APPLICANT_GITHUB).lower()}_{str(int(round(curr_dt.timestamp())))}"

    try:
        # creating github repo
        print("starting")
        create_repo_response = create_repo(GITHUB_TOKEN, REPO_NAME)
        if(create_repo_response['statusCode'] != 200):
            print("Repo already exists or is not able to be created")
            return {
                'statusCode': 400,
                'message': 'Repo already exists or is not able to be created',
                'body': json.dumps(create_repo_response)
            }

           # creating project on sonar cloud
        create_sonar_project_respsone = create_sonar_project(
            SONAR_TOKEN, REPO_NAME, SONAR_ORGANISATION)
        try:
            if(create_sonar_project_respsone['project']['key'] != REPO_NAME):
                pass
        except:
            print("Unable to create sonar project")
            return {
                'statusCode': 400,
                'message': 'Unable to create sonar project',
                'body': json.dumps(create_sonar_project_respsone)
            }


        if(TASK_LANG == "MAVEN"):
            add_xml_file_response = add_xml_file_maven(
                GITHUB_TOKEN, REPO_NAME, REPO_OWNER)
        else:
            add_xml_file_response = add_xml_file_others(
                GITHUB_TOKEN, REPO_NAME, REPO_OWNER
            )
        if(add_xml_file_response['statusCode'] != 200):
            print("Unable to add xml file")
            return {
                'statusCode': 400,
                'message': 'Unable to add xml file',
                'body': json.dumps(add_xml_file_response)
            }
        # changing the name of default branch from main to master
        change_branch_name_to_master_response = change_branch_name_to_master(
            REPO_OWNER, REPO_NAME, GITHUB_TOKEN)
        print(change_branch_name_to_master_response)

        # adding sonar properties in file for "others"

        # adding sonar token in repo secret
        add_secret_response = add_secret(
            GITHUB_TOKEN, REPO_NAME, REPO_OWNER, SONAR_TOKEN)
        if(add_secret_response['statusCode'] != 200):
            print("Unable to add secret")
            return {
                'statusCode': 400,
                'message': 'Unable to add secret',
                'body': json.dumps(add_secret)
            }


        if(TASK_LANG == "MAVEN"):
            add_properties_file_response = add_properties_file_maven(
            GITHUB_TOKEN, REPO_NAME, REPO_OWNER, SONAR_ORGANISATION)
        else:
            add_properties_file_response = add_properties_file_others(
            GITHUB_TOKEN, REPO_NAME, REPO_OWNER, SONAR_ORGANISATION)
            
        if(add_properties_file_response['statusCode'] != 200):
            print("Unable to add properties file")
            return {
                'statusCode': 400,
                'message': 'Unable to add properties file',
                'body': json.dumps(add_properties_file_response)
            }

        # uploading yml file to github  for  "others"

        assign_task_response = assign_task(
            GITHUB_TOKEN, REPO_NAME, REPO_OWNER, APPLICANT_GITHUB)
        if(assign_task_response['statusCode'] != 200):
            print("Unable to assign task")
            return {
                'statusCode': 400,
                'message': 'Unable to assign task',
                'body': json.dumps(assign_task_response)
            }

        with connection.cursor() as cursor:
            sql = """
                        INSERT INTO `github_data`.`applicant_tasks`
                        (
                        `user_id`,
                        `applicant_id`,
                        `create_date`,
                        `task`,
                        `task_lang`,
                        `repo_name`,
                        `sonarcloud_project`,
                        `github_token`,
                        `sonarcloud_token`,
                        `task_close_date`,
                        `checkin_status`,
                        github_owner,
                        task_title,
                        area,
                        level,
                        applicant_github_id,
                        sonar_organisation,
                        job_id
                        )
                        VALUES
                        (
                        %s,%s,NOW(),%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s
                        )
                    """
            cursor.execute(sql,
                           (
                               USER_ID,
                               APPLICANT_ID,
                               TASK,
                               TASK_LANG,
                               REPO_NAME,
                               REPO_NAME,
                               GITHUB_TOKEN,
                               SONAR_TOKEN,
                               TASK_CLOSE_DATE,
                               'CREATED',
                               REPO_OWNER,
                               TASK_TITLE,
                               AREA,
                               LEVEL,
                               APPLICANT_GITHUB,
                               SONAR_ORGANISATION,
                               JOB_ID
                           ))
            connection.commit()

        response = requests.post(f'https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/hooks',
                                 headers={
                                     'Authorization': f'token {GITHUB_TOKEN}'},
                                 json={"name": "web", "active": True, "events": ["push"], "config": {"url": "https://mr67jl4chavl6gu23ad52y2hty0txpea.lambda-url.ap-south-1.on.aws/", "content_type": "json", "insecure_ssl": "0"}}).json()
        print(response)
        return {
            'statusCode': 200,
            'body': json.dumps('Project created successfully')
        }
    except Exception as e:
        print(e)
        return {
            'statusCode': 500,
            'body': json.dumps('Internal Error'),
            'message': json.dumps(str(e), default=str)
        }

# ------------------------------------------------------------


lambda_handler(
    {
        "REPO_NAME": "fianl_sonar_cloud",
        "REPO_OWNER": "siddhart1o1",
        "USER_ID": "11",
        "APPLICANT_ID": "1",
        "TASK": "This is a Test",
        "TASK_LANG": "MAVEN",
        "TASK_CLOSE_DATE": "2022-10-31",
        "TASK_TITLE": "TEST", "AREA": "TEST", "LEVEL": "TEST", "APPLICANT_GITHUB": "rajdeep1o1"
    }, None)


# -----------------------------------------------------------
