import os

from flask import json


class NewEntity1:
    eId = ''
    fullNote = ''

    def __init__(self, u, c):
        self.eId = u
        self.fullNote = c


class NewEntity:
    eId = ''
    eType = ''
    eName = ''
    eTitle = ''
    eStartDate = ''
    eEndDate = ''
    eBirthPlace = ''
    eDeathPlace = ''
    eSumNote = ''
    eFullNote = ''
    ePrepared = ''
    euId = ''

    def __init__(self, eId, eType, eName, eTitle, eStartDate, eEndDate, eBirthPlace, eDeathPlace,
                 eSumNote, eFullNote, ePrepared, euId):
        self.eId = eId
        self.eType = eType
        self.eName = eName
        self.eTitle = eTitle
        self.eStartDate = eStartDate
        self.eEndDate = eEndDate
        self.eBirthPlace = eBirthPlace
        self.eDeathPlace = eDeathPlace
        self.eSumNote = eSumNote
        self.eFullNote = eFullNote
        self.ePrepared = ePrepared
        self.euId = euId


def read_entity(location):
    f = open(location, 'r', encoding='utf-8')
    pyob = json.load(f)
    print(pyob['eId'])
    newe = NewEntity1(pyob['eId'], pyob['fullNote'])
    return newe


# Create new entity and Save entity
def write_entity(newE):
    json_str = json.dumps(newE.__dict__, ensure_ascii=False)
    f_location = './JsonEntities/entity.json'
    with open(f_location, 'w') as f:
        f.write(json_str)


def delete_entity_Json(location):
    os.remove(location)



# Create new entity
def new_entity_Json(eId, newE):
    eLocation = './JsonEntities/AWE_' + str(eId) + '.json'
    json_str = json.dumps(newE.__dict__, ensure_ascii=False)
    with open(eLocation, 'w') as f:
        f.write(json_str)
    return eLocation


def update_entity_Json(location, entity):
    json_str = json.dumps(entity.__dict__, ensure_ascii=False)
    with open(location, 'w') as f:
        f.write(json_str)
