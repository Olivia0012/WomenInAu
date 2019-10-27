import datetime

from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config[
    'SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:womenaus@localhost:3306/women?charset=UTF8MB4'
app.config['SECRET_KEY'] = "random string"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
db = SQLAlchemy(app)

class UserInfo(db.Model):
    __tablename__ = 'UserInfo'
    uId = db.Column('UID', db.String(50), primary_key=True)
    uName = db.Column('USERNAME', db.String(10))
    email = db.Column('EMAIL', db.String(255))
    passphrase = db.Column('PASSPHRASE', db.String(255))
    role = db.Column('UROLE', db.String(50))
    addr = db.Column('ADDRESS', db.String(50))
    phone = db.Column('PHONE', db.String(50))
    mot = db.Column('MOTIVATION', db.String(500))
    exp = db.Column('EXPERIENCE', db.String(500))
    name = db.Column('UNAME', db.String(50))
    uvs = db.Column('UVS', db.String(1))# email switch

    def __init__(self, uId, uName, email, passphrase, role, addr, phone, mot, exp, name, uvs):
        self.uId = uId
        self.uName = uName
        self.email = email
        self.passphrase = passphrase
        self.role = role
        self.addr = addr
        self.phone = phone
        self.mot = mot
        self.exp = exp
        self.name = name
        self.uvs = uvs


class Feedback(db.Model):
    __tablename__ = 'Feedback'
    fId = db.Column('FID', db.String(50), primary_key=True)
    eId = db.Column('EID', db.String(50))
    uId = db.Column('UID', db.String(50))
    feedback = db.Column('FEEDBACK', db.String(700))
    fDate = db.Column('FDATE', db.String(50))

    def __init__(self, fId, eId, uId, feedback, fDate):
        self.fId = fId
        self.eId = eId
        self.uId = uId
        self.feedback = feedback
        self.fDate = fDate



class Relationship(db.Model):
    __tablename__ = 'Relationship'
    rId = db.Column('RID', db.String(50), primary_key=True)
    eId = db.Column('EID', db.String(50))
    reId = db.Column('REID', db.String(50))
    relationship = db.Column('RELATIONSHIP', db.String(100))

    def __init__(self, rId, eId, reId, relationship):
        self.rId = rId
        self.eId = eId
        self.reId = reId
        self.relationship = relationship


class Occupation(db.Model):
    __tablename__ = 'Occupation'
    oId = db.Column('OID', db.String(50), primary_key=True)
    eId = db.Column('EID', db.String(50))
    occupation = db.Column('OCCUPATION', db.String(50))
    oEvent = db.Column('OEVENT', db.String(100))

    def __init__(self, oId, eId, occupation, oEvent):
        self.oId = oId
        self.eId = eId
        self.occupation = occupation
        self.oEvent = oEvent


class Alternation(db.Model):
    __tablename__ = 'Alternation'
    aId = db.Column('AID', db.String(10), primary_key=True)
    alternate = db.Column('ALTERNATION_NAME', db.String(200))
    aType = db.Column('ALTERNATION_TYPE', db.String(200))
    eId = db.Column('EID', db.String(20))

    def __init__(self, aId, alternate, aType, eId):
        self.aId = aId
        self.alternate = alternate
        self.aType = aType
        self.eId = eId


class DigitalResourse(db.Model):
    __tablename__ = 'DigitalResourse'
    dId = db.Column('DID', db.String(40), primary_key=True)
    dTitle = db.Column('DR_Title', db.String(50))
    dType = db.Column('DR_TYPE', db.String(50))
    dDate = db.Column('DR_DATE', db.String(50))
    dUrl = db.Column('DR_URL', db.String(200))
    eId = db.Column('EID', db.String(40))

    def __init__(self, dId, dTitle, dType,dDate, dUrl, eId):
        self.dId = dId
        self.dTitle = dTitle
        self.dType = dType
        self.dDate = dDate
        self.dUrl = dUrl
        self.eId = eId


class PublicResourse(db.Model):
    __tablename__ = 'PublicResourse'
    pId = db.Column('PID', db.String(40), primary_key=True)
    pTitle = db.Column('PR_Title', db.String(50))
    pType = db.Column('PR_TYPE', db.String(50))
    pUrl = db.Column('PR_URL', db.String(200))
    eId = db.Column('EID', db.String(40))

    def __init__(self, pId, pTitle, pType, pUrl, eId):
        self.pId = pId
        self.pTitle = pTitle
        self.pType = pType
        self.pUrl = pUrl
        self.eId = eId



class EntityInfo(db.Model):
    __tablename__ = 'EntityInfo'
    eId = db.Column('EID', db.String(40), primary_key=True)
    eType = db.Column('E_TYPE', db.String(40))
    eName = db.Column('E_NAME', db.String(50))
    eImage = db.Column('E_IMAGE', db.String(200))
    eImgResource = db.Column('E_IMGRESOURCE', db.String(200))
    eSubName = db.Column('E_SUBNAME', db.String(50))
    eStartDate = db.Column('E_STARTDATE', db.String(20))
    eEndDate = db.Column('E_ENDDATE', db.String(50))
    eBirthPlace = db.Column('E_BIRTHPLACE', db.String(50))
    eDeathPlace = db.Column('E_DEATHPLACE', db.String(50))
    eSumNote = db.Column('E_SUMNOTE', db.String(500))
    ePrepared = db.Column('E_PREPARED', db.String(50))
    eLocation = db.Column('E_LOCATION', db.String(50))
    eStatus = db.Column('E_STATUS', db.String(10))
    eSubDate = db.Column('E_SUBDATE', db.String(50))
    euId = db.Column('EUID', db.String(50))

    def __init__(self, eId, eType, eName, eSubName, eStartDate, eEndDate, eBirthPlace, eDeathPlace,
                 eSumNote, ePrepared, eAId, eLocation, eStatus, eSubDate, euId, eImage, eImgResource):
        self.eId = eId
        self.eType = eType
        self.eName = eName
        self.eSubName = eSubName
        self.eStartDate = eStartDate
        self.eEndDate = eEndDate
        self.eBirthPlace = eBirthPlace
        self.eDeathPlace = eDeathPlace
        self.eSumNote = eSumNote
        self.ePrepared = ePrepared
        self.eAId = eAId
        self.eLocation = eLocation
        self.eStatus = eStatus
        self.eSubDate = eSubDate
        self.euId = euId
        self.eImage = eImage
        self.eImgResource = eImgResource


class Message(db.Model):
    __tablename__ = 'Message'
    mId = db.Column('MID', db.String(20), primary_key=True)
    uId = db.Column('UID', db.String(40))
    tuId = db.Column('TUID', db.String(50))
    message = db.Column('MESSAGE', db.String(255))
    time = db.Column('TIME', db.String(20))
    eId = db.Column('EID', db.String(40))
    isRead = db.Column('ISREAD', db.String(200))

    def __init__(self, mId, uId, tuId, eId, message, time, isRead):
        self.mId = mId
        self.uId = uId
        self.tuId = tuId
        self.eId = eId
        self.message = message
        self.time = time
        self.isRead = isRead


# db.create_all()