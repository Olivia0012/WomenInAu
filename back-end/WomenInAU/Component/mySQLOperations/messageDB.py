from sqlalchemy import and_, or_

from Component import Models
from Component.Models import Model
from Component.mySQLOperations import commonFunctions


#################------Message Operations------##################

def search_message_num():
    als = Model.Message.query.all()
    mnum = commonFunctions.largestId(als, 8)
    return mnum


def add_message2db(msg):
    Model.db.session.add(msg)
    Model.db.session.commit()


# message: search by  users'ID and eId
def search_message_uId_eId(uId, eId):
    msg = Model.Message.query.filter_by(and_(Model.Message.uId == uId, Model.Message.eId == eId)).all()
    return msg


# message: search by  user'ID
def search_message_uId(uId):
    msg = Model.Message.query.filter(or_(Model.Message.uId == uId, Model.Message.tuId == uId)).all()
    for m in msg:
        print(m.uId)
        print(m.tuId)
        print(m.message)
    return msg


search_message_uId('USERINFO_6')


# message: search by  user'ID
def search_message_mId(mId):
    msg = Model.Message.query.filter_by(mId=mId).first()
    return msg


def search_message_eId(eId):
    msg = Model.Message.query.filter_by(eId=eId).first()
    return msg


# message: search
def search_messages():
    msgs = Model.Message.query.all()
    return msgs


# delete message by eId
def dele_messageFdb(msg):
    Models.Model.db.session.delete(msg)
    Models.Model.db.session.commit()
