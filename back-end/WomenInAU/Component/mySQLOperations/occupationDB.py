from Component import Models
from Component.mySQLOperations import commonFunctions

#################------Occupation Operations------##################


# search relationship number
def search_occupation_num():
    als =Models.Model.Occupation.query.all()
    onum = commonFunctions.largestId(als, 2)
        #Models.Occupation.query.count()
    return onum


def search_occupation_eId_Fdb(eId):
    result = Models.Model.Occupation.query.filter_by(eId=eId).all()
    return result


def search_occupation_oId_Fdb(oId):
    result = Models.Model.Occupation.query.filter_by(oId=oId).first()
    return result


def add_occupation2bd(newOcc):
    Models.Model.db.session.add(newOcc)
    Models.Model.db.session.commit()


def update_occupation2db(upOcc):
    Models.Model.db.session.add(upOcc)
    Models.Model.db.session.commit()


def dele_occupation_eId_Fdb(eId):
    result = Models.Model.Occupation.query.filter_by(eId=eId).all()
    for var in result:
        print(var.oId)
        Models.Model.db.session.delete(var)
    '''
    als = Models.Occupation.query.all()
    i = 1
    for en in als:
        en.oId = 'OCCUPATION_' + str(i)
        i = i + 1
        db.session.add(en)
    '''
    Models.Model.db.session.commit()