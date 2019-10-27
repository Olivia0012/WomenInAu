
class allUsers():
    def __init__(self, uId, uName, email, role):
        self.uId = uId
        self.uName = uName
        self.email = email
        self.role = role


class entities():
    def __init__(self, eId, eName, eTitle, status, date):
        self.eId = eId
        self.eName = eName
        self.eTitle = eTitle
        self.status = status
        self.date = date


class allentitiesForrel():
    def __init__(self, eId, eName,eType):
        self.eId = eId
        self.eName = eName
        self.eType = eType


# Objects for showing reltionship
class relationshipsforen():
    def __init__(self,rId, eId,relPairs,reId, eName, sDate):
        self.rId = rId
        self.eId = eId
        self.relPairs = relPairs
        self.reId = reId
        self.eName = eName
        self.sDate = sDate

# Objects for showing reltionship
class alternationforen():
    def __init__(self,alterName,alterType):
        self.alterName = alterName
        self.alterType = alterType

# Objects for showing public resource
class publicResourceforen():
    def __init__(self,pId, pTitle,pType,pUrl):
        self.pId = pId
        self.pTitle = pTitle
        self.pType = pType
        self.pUrl = pUrl


# Objects for showing digital resource
class digitalResourceforen():
    def __init__(self,dId, dTitle,dType,dUrl):
        self.dId = dId
        self.dTitle = dTitle
        self.dType = dType
        self.dUrl = dUrl


# Objects for checking functions of an entity
class functions():
    def __init__(self,fId, function,funcDescription):
        self.fId = fId
        self.function = function
        self.funcDescription = funcDescription


# Objects for checking functions of an entity
class feedback():
    def __init__(self,eId, feedback):
        self.eId = eId
        self.feedback = feedback
