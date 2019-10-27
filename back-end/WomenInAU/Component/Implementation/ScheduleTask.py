import time
import datetime

from apscheduler.schedulers.blocking import BlockingScheduler

from Component import Implementation
from Component.Implementation import SendEmail, dbBackup
from Component.Implementation.SendEmail import mail
from Component.mySQLOperations import entityInfoDB, commonFunctions, userInfoDB, feedbackDB
from Component.mySQLOperations import messageDB


# backup datebase every week.
def databaseBackup():
    now = datetime.datetime.now()
    ts = now.strftime('%Y-%m-%d %H:%M:%S')
    print('do func  time :',ts)
    dbBackup.dbBackup()



# sending email to users who haven't made any changes for entities for 2 weeks.
def sendEmailforContinue():
    now = datetime.datetime.now()
    ts = now.strftime('%Y-%m-%d')
    feedbacks = feedbackDB.search_feedback()
    for fb in feedbacks:
        sendflag = commonFunctions.scheduleDay(fb.fDate, 2)
        if sendflag == 1:
            uId = entityInfoDB.search_uId_entity(fb.eId)
            user = userInfoDB.search_user(uId)
            emailContent = "Dear " + user.name +"，\n\nThere is an entity which hasn't finished verification for two weeks. check details. \n\n Regards\n Women In Australia"
            name = user.role
            emailAddr = user.addr  # testing
            subject = "Entity Status Checking"
            mail(emailContent, name, emailAddr, subject)
    entities = entityInfoDB.search_entitiesDB()
    for en in entities:
        sendflag = commonFunctions.scheduleDay(en.eSubDate, 2)
        if sendflag == 1:
            user = userInfoDB.search_user(en.euId)
            emailContent = "Dear " + user.name + "，\n\nThere is an entity which hasn't finished verification for two weeks. check details. \n\n Regards\n Women In Australia"
            name = user.role
            emailAddr = user.addr  # testing
            subject = "Entity Status Checking"
            mail(emailContent, name, emailAddr, subject)
    print('do func2 time：',ts)
    time.sleep(5)




# Deleting messages which have been read for 1 week.
def deleteMessage():
    now = datetime.datetime.now()
    ts = now.strftime('%w')
    print('do func3:  ', ts)
    ms = messageDB.search_messages()
    for m in ms:
        sendflag = commonFunctions.scheduleDay(m.eSubDate, 3)
        if sendflag == 1:
            messageDB.dele_messageFdb(m)
            print('delete message : ',m.isRead)


def dojob():
    #创建调度器：BlockingScheduler
    scheduler = BlockingScheduler()
    #添加任务,时间间隔2S
    scheduler.add_job(databaseBackup, 'interval', seconds = 604800, id='test_job1')
    #添加任务,时间间隔5S
    scheduler.add_job(sendEmailforContinue, 'interval', seconds = 86400, id='test_job2')

    scheduler.add_job(deleteMessage, 'interval', seconds = 86400, id='test_job3')
    scheduler.start()

dojob()