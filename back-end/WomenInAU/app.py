import os
import time

#import cv2
from flask import Flask, url_for, request, jsonify, render_template
from flask_cors import *
from flask_uploads import patch_request_class, configure_uploads, UploadSet, IMAGES
from werkzeug.middleware.shared_data import SharedDataMiddleware
from werkzeug.utils import secure_filename

from Component.Implementation import Account, SendMessage
from Component.Implementation import Entity
from Component.Models.Model import app, EntityInfo
from Component.mySQLOperations import entityInfoDB, userInfoDB

CORS(app, supports_credentials=True)


@app.route('/', methods=['GET'])
def show_home():
   return render_template('entities.html')


@app.route('/entities', methods=['GET'])
def show_all():
   return render_template('entities.html', EntityInfo=entityInfoDB.search_entitiesDB())


@app.route('/account', methods=['GET'])
def show_all_account():
   return render_template('accounts.html', UserInfo=userInfoDB.search_all_users())


@app.route('/myentity/<uId>', methods=['GET'])
def show_myentity(uId):
   return render_template('entities.html', EntityInfo=entityInfoDB.search_entity_uId(uId))


# Login
@app.route('/signin', methods=['POST'], endpoint='in1')
def signin():
    return Account.signin_function()


# register
@app.route('/signup', methods=['POST'])
def signup():
    return Account.signup_function()


# register
@app.route('/logout', methods=['GET'])
def logout():
    return Account.logout_function()


# View all accounts
@app.route('/view_account_application', methods=['GET'])
def view_account_application():
    return Account.view_account_application_function()


# View Profile
@app.route('/view_profile', methods=['GET'])
def view_profile():
    return Account.check_application_function()


# View all accounts
@app.route('/modify_accInfo', methods=['POST'])
def modify_accInfo():
    return Account.modify_accInfo_function()


# chat list accounts
@app.route('/get_chat_list', methods=['GET'])
def get_chatlists():
    return Account.get_chat_list_function()



# view account details
@app.route('/check_application', methods=['GET'])
def check_application():
    return Account.check_application_function()


# approve account application
@app.route('/approve_application', methods=['GET'])
def approve_application():
    return Account.approve_application_function()


# reject account application
@app.route('/reject_application', methods=['GET'])
def reject_application():
    return Account.reject_application_function()


# Passphrase change
@app.route('/change_passphrase', methods=['POST','GET'])
def change_passphrase():
    return Account.change_passphrase_function()


# Passphrase  retrieve
@app.route('/retrieve_passphrase', methods=['GET'])
def retrieve_passphrase():
    return Account.retrieve_passphrase_function()


# submit entity
@app.route('/submit_entity', methods=['POST'])
def submit_entity():
    return Entity.submit_entity_function()


# save entity
@app.route('/save_entity', methods=['POST'])
def save_entity():
    return Entity.save_entity_function()


@app.route('/upload', methods=['post'])
def up_photo():
    return Entity.upload_function()


# view all my entities
@app.route('/view_my_entity', methods=['GET'])
def view_my_entity():
    return Entity.view_my_entity_function()



# view all my entities
@app.route('/get_all_rel', methods=['GET'])
def get_all_rel():
    return Entity.get_all_rel_function()



# Delete entity
@app.route('/delete_entity', methods=['GET'])
def delete_entity():
    return Entity.delete_entity_function()


# Delete entity
@app.route('/view_all_submissions', methods=['GET'])
def view_all_submissions():
    return Entity.view_all_submissions_function()


# Delete entity
@app.route('/check_entity', methods=['GET'])
def check_entity():
    return Entity.check_entity_function()


@app.route('/check_basic_eInfo', methods=['POST'])
def check_basic_eInfo():
    return Entity.check_basic_eInfo_function()


@app.route('/show_entity', methods=['GET', 'POST'])
def show_entity():
    return Entity.show_entity_function()


@app.route('/add_entity', methods=['GET', 'POST'])
def add_entity():
    return Entity.add_entity_function()


@app.route('/check_status', methods=['GET'])
def check_status():
    return Entity.check_status_function()

# approve entity
@app.route('/approve_entity', methods=['POST'])
def approve_entity():
    return Entity.approve_entity_function()


# reject  entity
@app.route('/reject_entity', methods=['POST'])
def reject_entity():
    return Entity.reject_entity_function()


# release entity
@app.route('/release_entity', methods=['GET'])
def release_entity():
    return Entity.release_entity_function()


# Check entity
@app.route('/check_feedback', methods=['GET'])
def check_feedback():
    return Entity.check_feedback_function()


# Send message
@app.route('/send_message', methods=['POST'])
def send_message():
    return SendMessage.send_message_function()


# Fetch message
@app.route('/view_message', methods=['GET'])
def read_message():
    return SendMessage.fetch_message_function()

# mark a readed message
@app.route('/update_message', methods=['GET'])
def update_message():
    return SendMessage.read_message_function()

# Read message
@app.route('/read_message', methods=['GET'])
def read_messagedetail():
    return SendMessage.read_messagedetail_function()

# Read message
@app.route('/message_detail', methods=['GET'])
def message_detail():
    return SendMessage.message_detail_function()



@app.route('/upload', methods=['POST', 'GET'])  # 添加路由
def upload():
    return Entity.upload_function()


@app.route('/show_feedback')
def show_feedback():
    eId = '2'
#   return render_template('show_feedback.html', feedback=search_feedback(eId))


@app.route('/verify_account')
def verify_account(uId):
    eId = '2'
 #   return render_template('show_feedback.html', feedback=search_feedback(eId))

#@socketio.on('my event')
def connect(message):
    print('received message: ' + message)

if __name__ == '__main__':
    #  db.create_all()
  #  socketio.run(app)
    app.run(host='0.0.0.0', port=5000, debug=True)
