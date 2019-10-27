from Component import Models

#################------Alternation Operations------##################


# search alternation number
from Component.mySQLOperations import commonFunctions


def search_alternation_num():
    als = Models.Model.Alternation.query.all()
    data1 = Models.Model.Alternation.query.filter().count()
    data = Models.Model.Alternation.query.count()
    print(data1)
    anum = commonFunctions.largestId(als, 1)
    return anum


def search_alternationFdb(aId):
    result = Models.Model.Alternation.query.filter_by(aId=aId).first()
    return result


def search_alternation_eId_Fdb(eId):
    result = Models.Model.Alternation.query.filter_by(eId=eId).all()
    return result


def add_alternation(newAl):
    Models.Model.db.session.add(newAl)
    Models.Model.db.session.commit()


def update_alternation(upAl):
    Models.Model.db.session.add(upAl)
    Models.Model.db.session.commit()


# delete altenation by aId
def dele_alternationFdb(aId):
    result = Models.Model.Alternation.query.filter_by(aId=aId).all()
    for var in result:
        Models.Model.db.session.delete(var)
    Models.Model.db.session.commit()


# delete altenation by eId
def dele_alternation_eId_Fdb(eId):
    result = Models.Model.Alternation.query.filter_by(eId=eId).all()
    for var in result:
        print(var.aId)
        Models.Model.db.session.delete(var)
    Models.Model.db.session.commit()