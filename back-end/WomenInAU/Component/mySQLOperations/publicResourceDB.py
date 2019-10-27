from Component import Models
from Component import mySQLOperations

#################------- ------------#################



def search_publicResource_num():
    als = Models.Model.PublicResourse.query.all()
    pnum = mySQLOperations.commonFunctions.largestId(als, 7)
    return pnum


def search_publicResource_eId_Fdb(eId):
    result = Models.Model.PublicResourse.query.filter_by(eId=eId).all()
    return result


def search_publicResource_dId_Fdb(pId):
    result = Models.Model.PublicResourse.query.filter_by(pId=pId).first()
    return result


def add_publicResource2bd(newPR):
    Models.Model.db.session.add(newPR)
    Models.Model.db.session.commit()


def update_publicResource2db(upPR):
    Models.Model.db.session.add(upPR)
    Models.Model.db.session.commit()


def dele_publicResource_eId_Fdb(eId):
    result = Models.Model.PublicResourse.query.filter_by(eId=eId).all()
    for var in result:
        print(var.pId)
        Models.Model.db.session.delete(var)
    Models.Model.db.session.commit()