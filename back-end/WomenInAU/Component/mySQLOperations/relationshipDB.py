from Component import Models

#################------Relationship Operations------##################


# search relationship number
from Component.mySQLOperations import commonFunctions


def search_relationship_num():
    als = Models.Model.Relationship.query.all()
    rnum = commonFunctions.largestId(als, 3)
    return rnum


def search_relationship_eId_Fdb(eId):
    result = Models.Model.Relationship.query.filter(eId=eId).first()
    return result


def add_relationship2db(newRe):
    Models.Model.db.session.add(newRe)
    Models.Model.db.session.commit()


def update_relationship2db(upRe):
    Models.Model.db.session.add(upRe)
    Models.Model.db.session.commit()


# delete reltionship by rId
def dele_relationshipFdb(rId):
    result = Models.Model.Relationship.query.filter(rId=rId).first()
    Models.Model.db.session.delete(result)
    Models.Model.db.session.commit()


# delete reltionship by eId
def dele_relationship_eId_Fdb(eId):
    result = Models.Model.Relationship.query.filter_by(eId=eId).all()
    for var in result:
        print(var.rId)
        Models.Model.db.session.delete(var)
    Models.Model.db.session.commit()


def search_relationship_eId(eId):
    result = Models.Model.Relationship.query.filter_by(eId=eId).all()
    return result


def search_relationship_rId(rId):
    result = Models.Model.Relationship.query.filter(rId=rId).first()
    return result