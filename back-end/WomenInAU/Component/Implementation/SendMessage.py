import time

from flask import request, json, jsonify

from Component import Models
from Component.Models import Model
from Component.mySQLOperations import messageDB, feedbackDB, userInfoDB


def send_message_function():
    data = request.get_data()
    print(request)
    json_data = json.loads(data)
    uId = json_data['uId']
    #tuId = json_data['tuId']
    eId = json_data['eId']
    msg = json_data['message']
    fb = feedbackDB.search_feedback_eId(eId)
    if fb is None:
        return jsonify('No feedback.')
    print(fb)
    date = time.strftime('%Y-%m-%d: %H:%M:%S', time.localtime(time.time()))
    mnum = messageDB.search_message_num() + 1
    mId = 'MSG_' + str(mnum)
    message = Model.Message(mId,uId,fb.uId,eId,msg,date,None)
    messageDB.add_message2db(message)
    return jsonify('true')


def fetch_message_function():
 #   data = request.get_data()
  #  json_data = json.loads(data)
 #   uId = json_data['uId']
    uId = request.values.get("uId")
    msgs = messageDB.search_message_uId(uId)
    if msgs is None:
        return jsonify('No message.')
    resultMsg = dict()
    resultMsg['message'] = []

    if msgs is not None:
        for al in msgs:
            result = dict()
            result['mId']= al.mId
            result['eId']= al.eId
            sender = userInfoDB.search_user(al.uId)
            result['sender'] = sender.uName
            receiver = userInfoDB.search_user(al.tuId)
            result['receiver'] = receiver.uName
            result['senderEmail'] = sender.email
            result['receiverEmail'] = receiver.email
            result['time']= al.time
            result['message']= al.message
            print(al.message)
            result['isRead']= al.isRead
            resultMsg['message'].append(result)
    print(resultMsg)
    return jsonify(resultMsg)


def read_message_function():
   # tuId = request.values.get("tuId")
    mId = request.values.get("mId")
    msg = messageDB.search_message_mId(mId)
    if msg is None:
        return jsonify('No mId')
    date = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    msg.isRead = date
    messageDB.add_message2db(msg)
    return jsonify('true')


def read_messagedetail_function():
    eId = request.values.get("eId")
    msgs = messageDB.search_message_eId(eId)
    if msgs is None:
        return jsonify('eId error.')
    resultMsg = dict()
    resultMsg['message'] = []
    if msgs is not None:
        for al in msgs:
            result = dict()
            result['mId'] = al.mId
            result['uId'] = al.uId
            sender = userInfoDB.search_user(al.uId)
            result['sender'] = sender.uName
            result['senderEmail'] = sender.email
            receiver = userInfoDB.search_user(al.tuId)
            result['receiver'] = receiver.uName
            result['receiverEmail'] = receiver.email
            result['time'] = al.time
            result['message'] = al.message
            result['isRead'] = al.isRead
            resultMsg['message'].append(result)
    print(resultMsg)
    return jsonify(resultMsg)

def message_detail_function():
    mId = request.values.get("mId")
    al = messageDB.search_message_mId(mId)
    if al is None:
        return jsonify('mId error.')
    resultMsg = dict()
    resultMsg['message'] = []
   # if msgs is not None:
  #      for al in msgs:
    result = dict()
    result['mId'] = al.mId
    result['uId'] = al.uId
    sender = userInfoDB.search_user(al.uId)
    result['sender'] = sender.uName
    receiver = userInfoDB.search_user(al.tuId)
    result['receiver'] = receiver.uName
    result['time'] = al.time
    result['message'] = al.message
    result['isRead'] = al.isRead
    result['senderEmail'] = sender.email
    resultMsg['message'].append(result)
    print(resultMsg)
    return jsonify(resultMsg)

