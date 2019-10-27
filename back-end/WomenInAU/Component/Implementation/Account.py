from flask import request, json, jsonify, session

from flask_mail import Message


# Login
from Component import Models
from Component import Implementation
from Component.Implementation import SendEmail
from Component.mySQLOperations import userInfoDB
from Component.mySQLOperations.userInfoDB import get_chat_list_db


def signin_function():
    result = dict()
    if request.method == 'POST':
        data = request.get_data()
       # print(request)
        json_data = json.loads(data)
        email = json_data['email']
      # password = json_data['password']
        user = userInfoDB.search_user_signin(email)
        if user is None:
            return jsonify('-1')
        else:
            if user.role == '0':
                return jsonify('-2') # this account hasn't been verified.
            else:
                session['uId'] = user.uId
                print(session['uId'])
               # session.pop('uId', None)
               # print('log out ' + session['uId'])
                result['uId'] = user.uId
                result['role'] = user.role
                result['password'] = user.passphrase
                result['name'] = user.uName
                return jsonify(result)


def signup_function():
    result = dict()
    if request.method == 'POST':
        data = request.get_data()
        print(request)
        json_data = json.loads(data)
        email = json_data['email']
        userName = json_data['userName']
        session['email'] = userName # session login record
        print(session['email'])
        isExist = userInfoDB.search_user_signin(email)
        if isExist is not None:
            return jsonify('-1')
        else:
            isDupUserName = userInfoDB.check_dupUsername_DB(userName)
            if isDupUserName is not None:
                return jsonify('-2')
        print(json_data)
        n = userInfoDB.search_user_number() + 1
        uId = 'USERINFO_' + str(n)
        # json_data['name'] = ''
        newUinfo = Models.Model.UserInfo(uId, json_data['userName'], json_data['email'], str(json_data['psw']), 0,
                                   json_data['address'],
                                   json_data['phone'], json_data['motivation'], json_data['experience'],
                                   json_data['name'], 0)
        user = userInfoDB.add_user(newUinfo)
        #managers = userInfoDB.search_managers()
        SendEmail.signUpEmailToManager()
        SendEmail.signUpEmailtoUser(newUinfo)

        if user is None:
            return jsonify('false')
        else:
            return jsonify('true')



def logout_function():
    print(session['uId'])
    session.pop('uId',None)
    print('log out '+session['uId'])
    return 'true'


def get_chat_list_function():
    uId = request.values.get("uId")
    print(uId)
    alluser = get_chat_list_db()
    customers = []
    if alluser is None:
        return jsonify('No users.')
    for u in alluser:
        if uId != u.uId:
            user = Models.Objects.allUsers(u.uId, u.uName, u.email, u.role)
            u = user.__dict__
            result = json.dumps(u)
            customers.append(result)
    # print(result)
    result1 = str(customers).replace('\'', '')
    # print(result1)
    r = json.loads(result1)
    return jsonify(r)


def view_account_application_function():
    alluser = userInfoDB.search_all_users()
    customers = []
    for u in alluser:
        user = Models.Objects.allUsers(u.uId, u.uName, u.email, u.role)
        u = user.__dict__
        result = json.dumps(u)
        customers.append(result)
    # print(result)
    result1 = str(customers).replace('\'', '')
    # print(result1)
    r = json.loads(result1)
    return jsonify(r)

# View Account Detials
def check_application_function():
    uId = request.values.get("uId")
    print(uId)
    user = userInfoDB.search_user(uId)
    if user is None:
        return jsonify('uId Error.')
#    print(user.uName)
    result = dict()
    result['uId'] = user.uId
    result['email'] = user.email
    result['userName'] = user.uName
    result['name'] = user.name
    result['address'] = user.addr
    result['phone'] = user.phone
    result['motivation'] = user.mot
    result['experience'] = user.exp
    print(result)
    return jsonify(result)


# Modify account Info
def modify_accInfo_function():
    data = request.get_data()
    print(request)
    json_data = json.loads(data)
    user = userInfoDB.search_user(json_data['uId'])
    if user is None:
        return jsonify('uId Error.')
    user.addr = json_data['address']
    user.email = json_data['email']
    user.phone = json_data['phone']
    user.exp = json_data['experience']
    user.mot = json_data['motivation']
    user.uName = json_data['userName']
    switch= json_data['switch']  # Email switch 0:open; 1: close.
    if switch == 'true':
        user.uvs = 1 # Receive email.
    else:
        user.uvs = 0 # Reject sending email.
    user.name = json_data['name']
    userInfoDB.modify_userInfo(user)
    c = userInfoDB.search_user(json_data['uId'])
    if c is not None:
        return jsonify('true')
    else:
        return jsonify('false')


# approve account application
def approve_application_function():
    uId = request.values.get("uId")
    role = request.values.get("role")
    user = userInfoDB.search_user(uId)
    if user is None:
        return jsonify('uId Error.')
    user.role = role
    c = userInfoDB.modify_userInfo(user)
    SendEmail.approveAccEmail(user)
    nu = userInfoDB.search_user(uId)
    if nu is not None:
        return jsonify('true')
    else:
        return jsonify('false')


# reject account application
def reject_application_function():
    uId = request.values.get("uId")
    user = userInfoDB.search_user(uId)
    if user is None:
        return jsonify('uId Error.')
    SendEmail.rejectAccEmail(user)
    userInfoDB.delete_user(uId)
    return jsonify('true')


# change psw
def change_passphrase_function():
    data = request.get_data()
    print(request)
    json_data = json.loads(data)
    uId = json_data['uId']
    user = userInfoDB.search_user(uId)
    if user is None:
        return jsonify('uId Error.')
    user.passphrase = json_data['password']
    userInfoDB.modify_userInfo(user)
    return jsonify('true')


def retrieve_passphrase_function():
    data = request.get_data()
    print(request)
    json_data = json.loads(data)
    uId = json_data['uId']
    user = userInfoDB.search_user(uId)
    if user is None:
        return jsonify('uId Error.')
    url = json_data['url']
    userInfoDB.modify_userInfo(user)
    SendEmail.changePassword(user,url)
    return jsonify('true')
