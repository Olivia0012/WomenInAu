from Component import Models
from Component.mySQLOperations import commonFunctions

#################------Feedback Operations------##################

def search_feedback_num():
    als = Models.Model.Feedback.query.all()
    fnum = commonFunctions.largestId(als, 4)
    return fnum


def search_feedback():
    fbs = Models.Model.Feedback.query.all()
    return fbs


def add_feedback2db(fb):
    Models.Model.db.session.add(fb)
    Models.Model.db.session.commit()


# feedback: search by eId
def search_feedback_eId(eId):
    feedback = Models.Model.Feedback.query.filter_by(eId=eId).first()
    return feedback


# feedback: add feedback to eId
def add_feedback(feedback):
    Models.Model.db.session.add(feedback)
    Models.Model.db.session.commit()


def dele_feedbackFdb(eId):
    fb = search_feedback_eId(eId)
    Models.Model.db.session.delete(fb)
    Models.Model.db.session.commit()