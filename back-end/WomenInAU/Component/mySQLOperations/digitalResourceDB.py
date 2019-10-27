from Component import Models
from Component import mySQLOperations


def search_digitalResource_num():
    als = Models.Model.DigitalResourse.query.all()
    dnum = mySQLOperations.commonFunctions.largestId(als, 6)
    return dnum


def search_digitalResource_eId_Fdb(eId):
    result = Models.Model.DigitalResourse.query.filter_by(eId=eId).all()
    return result


def search_digitalResource_dId_Fdb(dId):
    result = Models.Model.DigitalResourse.query.filter_by(dId=dId).first()
    return result


def add_digitalResource2bd(newDR):
    Models.Model.db.session.add(newDR)
    Models.Model.db.session.commit()


def update_digitalResource2db(upDR):
    Models.Model.db.session.add(upDR)
    Models.Model.db.session.commit()


def dele_digitalResource_eId_Fdb(eId):
    result = Models.Model.DigitalResourse.query.filter_by(eId=eId).all()
    for var in result:
        print(var.dId)
        Models.Model.db.session.delete(var)
    Models.Model.db.session.commit()