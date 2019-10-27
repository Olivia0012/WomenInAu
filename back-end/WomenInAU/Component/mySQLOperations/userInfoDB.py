from sqlalchemy import and_

from Component import Models
from Component import mySQLOperations


def search_uvusers():
    uvUsers = Models.Model.UserInfo.query.filter_by(uvs=0).count()
    # print(uvUsers.count())
    return uvUsers


def search_managers():
    managers = Models.Model.UserInfo.query.filter_by(role='Manager').all()
    return managers


# Check the number of users
def search_user_number():
    users = Models.Model.UserInfo.query.all()
    un = mySQLOperations.commonFunctions.largestId(users, 5)
        #Models.UserInfo.query.count()
    # print(un)
    return un


# search all users in the userInfo
def search_all_users():
    users = Models.Model.UserInfo.query.all()
    return users


# search user by uId
def search_user(uId):
    user = Models.Model.UserInfo.query.filter_by(uId=uId).first()
    print(user)
    return user



# Signin verification by email
def search_user_signin(email):
    u = Models.Model.UserInfo.query.filter_by(email=email).first()
    return u


def check_dupUsername_DB(username):
    u = Models.Model.UserInfo.query.filter_by(uName=username).first()
    return u


# Signup with user info
def add_user(user):
    nuser = Models.Model.UserInfo(user.uId, user.uName, user.email, user.passphrase, user.role, user.addr, user.phone,
                            user.mot,
                            user.exp, user.name, user.uvs)
    Models.Model.db.session.add(nuser)
    Models.Model.db.session.commit()
    c_user = search_user(user.uId)
    if c_user is None:
        return None
    else:
        return 1


# modify user information(modify profiles && verify account && modify password)
def modify_userInfo(muser):
    Models.Model.db.session.add(muser)
    Models.Model.db.session.commit()


# Delete user
def delete_user(uId):
    user = search_user(uId)
    Models.Model.db.session.delete(user)
    Models.Model.db.session.commit()

def get_chat_list_db(role,uId):
    user = Models.Model.UserInfo.query.filter_by(and_(Models.Model.UserInfo.role != role)).all()
