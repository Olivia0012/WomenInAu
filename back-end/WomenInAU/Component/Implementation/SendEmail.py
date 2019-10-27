#!/usr/bin/python3
# sending Email first working function.
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formataddr

my_sender = 'womeninaustralia@gmail.com'  # Sender's email address for testing
my_pass = 'Womeninau2019'  # Sender's email passphrase
my_user = '15319788165@163.com'  # Receiver's email address


def mail(emailContent, name, emailAddr, subject):
    ret = True
    try:
        msg = MIMEText(emailContent, 'plain', 'utf-8')
        msg['From'] = formataddr(["Women In Australia", my_sender])  # Username of sender, email address
        msg['To'] = formataddr([name, emailAddr])  # Username of receicer,email address
        msg['Subject'] = subject  # Subject of this email

        server = smtplib.SMTP_SSL("smtp.googlemail.com", 465)  # SMTP server of sender，port = 465
        server.login(my_sender, my_pass)  # Email address and passphrase of sender
        server.sendmail(my_sender, [emailAddr], msg.as_string())  # addr of sender, receiver, and message
        server.quit()  # close the server
    except Exception:  # if try doesn't run,then ret=False
        ret = False
    return ret

    #------------------------------------------------------------------------

    # # Replace sender@example.com with your "From" address.
    # # This address must be verified.
    # SENDER = 'lulumanlo1314@gmail.com'
    # SENDERNAME = 'LULU'
    #
    # # Replace recipient@example.com with a "To" address. If your account
    # # is still in the sandbox, this address must be verified.
    # RECIPIENT = emailAddr
    #
    # # Replace smtp_username with your Amazon SES SMTP user name.
    # USERNAME_SMTP = "smtp_username"
    #
    # # Replace smtp_password with your Amazon SES SMTP password.
    # PASSWORD_SMTP = "smtp_password"
    #
    # # (Optional) the name of a configuration set to use for this message.
    # # If you comment out this line, you also need to remove or comment out
    # # the "X-SES-CONFIGURATION-SET:" header below.
    # CONFIGURATION_SET = "ConfigSet"
    #
    # # If you're using Amazon SES in an AWS Region other than 美国西部（俄勒冈）,
    # # replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
    # # endpoint in the appropriate region.
    # HOST = "email-smtp.us-west-2.amazonaws.com"
    # PORT = 587
    #
    # # The subject line of the email.
    # SUBJECT = 'Amazon SES Test (Python smtplib)'
    #
    # # The email body for recipients with non-HTML email clients.
    # BODY_TEXT = ("Amazon SES Test\r\n"
    #              "This email was sent through the Amazon SES SMTP "
    #              "Interface using the Python smtplib package."
    #              )
    #
    # # The HTML body of the email.
    # BODY_HTML = """<html>
    # <head></head>
    # <body>
    #   <h1>Amazon SES SMTP Email Test</h1>
    #   <p>This email was sent with Amazon SES using the
    #     <a href='https://www.python.org/'>Python</a>
    #     <a href='https://docs.python.org/3/library/smtplib.html'>
    #     smtplib</a> library.</p>
    # </body>
    # </html>
    #             """
    #
    # # Create message container - the correct MIME type is multipart/alternative.
    # msg = MIMEMultipart('alternative')
    # msg['Subject'] = SUBJECT
    # msg['From'] = email.utils.formataddr((SENDERNAME, SENDER))
    # msg['To'] = RECIPIENT
    # # Comment or delete the next line if you are not using a configuration set
    # msg.add_header('X-SES-CONFIGURATION-SET', CONFIGURATION_SET)
    #
    # # Record the MIME types of both parts - text/plain and text/html.
    # part1 = MIMEText(BODY_TEXT, 'plain')
    # part2 = MIMEText(BODY_HTML, 'html')
    #
    # # Attach parts into message container.
    # # According to RFC 2046, the last part of a multipart message, in this case
    # # the HTML message, is best and preferred.
    # msg.attach(part1)
    # msg.attach(part2)
    #
    # # Try to send the message.
    # try:
    #     server = smtplib.SMTP(HOST, PORT)
    #     server.ehlo()
    #     server.starttls()
    #     # stmplib docs recommend calling ehlo() before & after starttls()
    #     server.ehlo()
    #     server.login(USERNAME_SMTP, PASSWORD_SMTP)
    #     server.sendmail(SENDER, RECIPIENT, msg.as_string())
    #     server.close()
    # # Display an error message if something goes wrong.
    # except Exception as e:
    #     print("Error: ", e)
    # else:
    #     print("Email sent!")



def signUpEmailToManager():
    name = "Manager"
    emailContent = "Dear"+name+"，\nThere is a new account application submitted.\n\n Regards,\n Women In Australia"
    emailAddr = 'jianjingsusan@gmail.com'
    emailAddr1 ='15319788165@163.com'
    subject = "New Account Application"
    mail(emailContent, name, emailAddr, subject)
   # mail(emailContent, name, emailAddr1, subject)


def signUpEmailtoUser(user):
    emailContent = "Dear " + user.uName + "\n Your application has been submitted successfully.\n\n Regards\n Women In Australia"
    name = user.uName
    subject = "Account Application"
    mail(emailContent, name, user.email, subject)




def approveAccEmail(user):
    emailContent = "Dear " + user.uName + "\n Your application has been approved and your role is"+user.role+".\n\n Regards\n Women In Australia"
    name = user.uName
    emailAddr = user.email
    subject = "Account Application Approved"
    mail(emailContent, name, emailAddr, subject)


def rejectAccEmail(user):
    emailContent = "Dear " + user.uName + "\n We are really sorry that we can not approve your application.\n\n Regards\n Women In Australia"
    name = user.uName
    emailAddr = user.email
    subject = "Account Application Rejected"
    mail(emailContent, name, emailAddr, subject)


def changePassword(user, psw):
    emailContent = "Dear " + user.uName + "\n Your new password: "+psw+" , Please change password when you signin.\n\n Regards\n Women In Australia"
    name = user.uName
    emailAddr = user.email
    subject = "Password Reset"
    mail(emailContent, name, emailAddr, subject)


def rejectEntityEmail(user,url):
    emailContent = "Dear " + user.uName + "\n We feel sorry to tell you that your entity has been rejected."+"\n\n Regards\n Women In Australia"
    name = user.uName
    emailAddr = user.email
    subject = "Entity Rejected"
    mail(emailContent, name, emailAddr, subject)



def approveEntityEmail(user, url):
    emailContent = "Dear " + user.uName + "\n Congratulations, your entity has been approved by curator."+"\n\n Regards\n Women In Australia"
    name = user.uName
    emailAddr = user.email
    subject = "Entity Approved"
    mail(emailContent, name, emailAddr, subject)


def releaseEntityEmail(user, url):
    emailContent = "Dear " + user.uName + "\n Congratulations, your entity has been released. "+"\n\n Regards\n Women In Australia"
    name = user.uName
    emailAddr = user.email
    subject = "Entity Released"
    mail(emailContent, name, emailAddr, subject)





#signUpEmailtoUser('aaa')

'''
from flask import Flask
import config

from flask_mail import Message

from flask_mail import Mail

from Component.Implementation import Config
from Component.Models.Model import app

mail = Mail()

#app = Flask(__name__)
app.config.from_object(Config)
mail.init_app(app)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route("/send/")
def send():
    # 第一个参数为发送邮件的标题;
    # recipients：接收邮件的用户邮箱;
    # body：发送邮箱的主题内容
    mail_msg = """
    <p>Python 邮件发送测试...</p>
    <p><a href="http://www.runoob.com">这是一个链接</a></p>
    """
    msg = Message("测试邮件发送", recipients=['15319788165@163.com'], body=mail_msg)
    mail.send(msg)
    return "success"


if __name__ == '__main__':
    app.run(debug=True)

'''
