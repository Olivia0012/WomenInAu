from flask import jsonify
from sqlalchemy import and_

from Component import Models
from Component.Models.Model import EntityInfo
from Component.mySQLOperations import commonFunctions, alternationDB, relationshipDB, occupationDB, publicResourceDB, \
    digitalResourceDB

# Search an entity by its ID: eId
from Component import mySQLOperations


def search_entity(eId):
    entity = Models.Model.EntityInfo.query.filter_by(eId=eId).first()
    return entity

def search_uId_entity(eId):
    entity = Models.Model.EntityInfo.query.filter_by(eId=eId).first()
    return entity.uId


# Search all entities for sending Email
def search_entitiesDB():
    entity = Models.Model.EntityInfo.query.all()
    print(entity)
    return entity
#search_entitiesDB()

# search entities by contributor's uId and this user can have more than one entity.
def search_entity_uId(uId):
    entity = Models.Model.EntityInfo.query.filter_by(euId=uId).all()
    if entity is None:
        return 'false'
    else:
        return entity


# status of entity in this system：
# contributer  contribute&save：0；submit：1；curator verify 2；curator approve 4；
# manager verify 6；manager approve 7;  Rejected=8
# curator contribute->submit：3  manager contribute->submit: 5


# search a user's entities,
def search_allentities_uId(s, uId, n):
    if n == 1:
        subs = Models.Model.EntityInfo.query.filter(
            and_(Models.Model.EntityInfo.euId != uId, Models.Model.EntityInfo.eStatus != '0',\
                 Models.Model.EntityInfo.eStatus != '2',Models.Model.EntityInfo.eStatus != '8',
                 Models.Model.EntityInfo.eStatus != '6')).all()
    else:
        subs = Models.Model.EntityInfo.query.filter(
            and_(Models.Model.EntityInfo.euId != uId, Models.Model.EntityInfo.eStatus != '0',\
                 Models.Model.EntityInfo.eStatus != '2',Models.Model.EntityInfo.eStatus != '8',
                 Models.Model.EntityInfo.eStatus != '4', Models.Model.EntityInfo.eStatus != '5',\
                 Models.Model.EntityInfo.eStatus != '6')).all()
    return subs


# search entity by status
def search_entity_status(status):
    entity = Models.Model.EntityInfo.query.filter_by(status=status)
    return entity


# search all submitted entity
def search_sub_entity():
    entity = Models.Model.EntityInfo.query.filter_by(status=1)  # not just status= 1
    return entity


def search_allentities_rel_db():
    entities = EntityInfo.query.filter_by(eStatus=7).all()
    print(entities)
    return entities


def search_entity_num():
    #enum = Models.EntityInfo.query.count()
    eIds = Models.Model.EntityInfo.query.all()
    enum = commonFunctions.largestId(eIds, 0)
    return enum


def search_basic_entityinfo_db(eName, sDate, bPlace):
    bentity = Models.Model.EntityInfo.query.filter(
        and_(Models.Model.EntityInfo.eName == eName, Models.Model.EntityInfo.eStartDate == sDate,
             Models.Model.EntityInfo.eBirthPlace == bPlace)).first()
    if bentity is not None:
        result = dict()
        result['eId'] = bentity.eId
        result['eTitle'] = bentity.eSubName
        print(result)
        return jsonify(result)
    else:
        return jsonify('false')


# add new entity to database
def add_entity2db(newEntity):
    Models.Model.db.session.add(newEntity)
    Models.Model.db.session.commit()


# update the status of entity
def update_entity2db(result):
    Models.Model.db.session.add(result)
    Models.Model.db.session.commit()


# delete entity by eId
def dele_entityFdb(eId):
    result = Models.Model.db.session.query(Models.Model.EntityInfo).filter_by(eId=eId).first()
    Models.Model.db.session.delete(result)
    alternationDB.dele_alternation_eId_Fdb(result.eId)
    relationshipDB.dele_relationship_eId_Fdb(result.eId)
    occupationDB.dele_occupation_eId_Fdb(result.eId)
    publicResourceDB.dele_publicResource_eId_Fdb(result.eId)
    digitalResourceDB.dele_digitalResource_eId_Fdb(result.eId)
    # refresh all the entityID
    entities = Models.Model.EntityInfo.query.all()
    Models.Model.db.session.commit()






