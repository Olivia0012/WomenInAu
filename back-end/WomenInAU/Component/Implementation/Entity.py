# coding:utf-8
import cv2
import os
import time
from flask import json, url_for, request, jsonify
from werkzeug.utils import secure_filename
from Component import Models
from Component.Implementation import SendEmail
from Component.Models import Objects
from Component.Models import Model
from Component.fileOperations import jsonEntity, imageOperation
from Component import mySQLOperations
from Component.mySQLOperations import entityInfoDB, alternationDB, publicResourceDB, digitalResourceDB, relationshipDB, \
    occupationDB, feedbackDB, userInfoDB


def submit_entity_function():
    print(request)
    flag = request.values.get("flag")
    f = None
    print(flag)
    if flag == '1':
        f = request.files['file']
    print(f)

      #  f = 0
    data = request.values.get("data")
    print(data)
    json_data = json.loads(data)
    print(json_data)
    '''
    data = request.get_data()
    print(request)
    json_data = json.loads(data)
    print(json_data['eId'])
    '''
    eId = json_data['eId']
    if eId == 'none':
        add_entity(1, json_data, f,None,None)
    else:
        update_entity(1, json_data, f,flag)
    return jsonify('true')


# Save entity
def save_entity_function():
    print(request)
    flag = request.values.get("flag")
    f = None
    print(flag)
    if flag == '1':
        print('!!!!!!!!!!jinle')
        f = request.files['file']
        print('!!!! get image already')
   # print("show f: "+str(f))
    data = request.values.get("data")
    json_data = json.loads(data)
    print(json_data)
    eId = json_data['eId']
    if eId == 'none':
        add_entity(0, json_data, f,None,None)
    else:
        update_entity(0, json_data, f,flag)
    return jsonify('true')


# Check all my entities.
def view_my_entity_function():
    uId = request.values.get("uId")
    print(uId)
    myEntities = mySQLOperations.entityInfoDB.search_entity_uId(uId)
    result = dict()
    if myEntities is None:
        result['result'] = 'No entity has been contributed.'
        return jsonify(result)
    result['myEntities'] = []
    status = ''
    for e in myEntities:
        if e.eStatus == '8':
            status = 'Rejected'
        if e.eStatus == '0':
            status = 'Draft'
        if e.eStatus == '1':
            status = 'Submitted'
        if e.eStatus == '2':
            status = 'Being Verifed by Curator.'
        if e.eStatus == '3':
            status = 'Submitted'
        if e.eStatus == '4':
            status = 'Curator Approved.'
        if e.eStatus == '5':
            status = 'Submitted'
        if e.eStatus == '6':
            status = 'Being Verifed by Manager.'
        if e.eStatus == '7':
            status = 'Released'
        en = Models.Objects.entities(e.eId, e.eName, e.eSubName, status, str(e.eSubDate))
        u = en.__dict__
        # r = json.dumps(u)
        result['myEntities'].append(u)
        print(result)
    return jsonify(result)


# Delete entity including its relationships, alternations and occupations.
def delete_entity_function():
    eId = request.values.get("eId")
    en = mySQLOperations.entityInfoDB.search_entity(eId)
    if en is None:
        return jsonify('eId Error.')
    mySQLOperations.entityInfoDB.dele_entityFdb(eId)
    jsonEntity.delete_entity_Json(en.eLocation)  # delete json file.
    if en.eImage is not None:
        imageOperation.deleteImage(en.eImage)
    return jsonify('true')


# Curator and manager can view all submissions
def view_all_submissions_function():
    uId = request.values.get("uId")
    print(uId)
    user = mySQLOperations.userInfoDB.search_user(uId)
    if user is None:
        return jsonify('uId Error.')
    if user.role == 'Manager':
        subs = entityInfoDB.search_allentities_uId('', uId, 1)
    else:
        subs = entityInfoDB.search_allentities_uId('', uId, 0)
    result = dict()
    result['myEntities'] = []
    if subs is None:
        return jsonify('No entity has been contributed.')
    for uu in subs:
        status = ''
        if uu.eStatus == '8':
            status = 'Rejected'
        if uu.eStatus == '0':
            status = 'Draft'
        if uu.eStatus == '1':
            status = 'Submitted'
        if uu.eStatus == '2':
            status = 'Being Verifed by Curator.'
        if uu.eStatus == '3':
            status = 'Submitted'
        if uu.eStatus == '4':
            status = 'Curator Approved.'
        if uu.eStatus == '5':
            status = 'Submitted'
        if uu.eStatus == '6':
            status = 'Being Verifed by Manager.'
        if uu.eStatus == '7':
            status = 'Released'
        user = Objects.entities(uu.eId, uu.eName, uu.eSubName, status, str(uu.eSubDate))
        print(user.eId)
        u = user.__dict__
        result['myEntities'].append(u)
        print(result)
    return jsonify(result)


def get_all_rel_function():
    allentities = entityInfoDB.search_allentities_rel_db()
    if allentities is None:
        jsonify('No entity can be related.')
    customers = []
    for rele in allentities:
        en = Models.Objects.allentitiesForrel(rele.eId, rele.eName, rele.eType)
        print(en.eId)
        u = en.__dict__
        result = json.dumps(u)
        customers.append(result)
        print(result)
    result1 = str(customers).replace('\'', '')
    r = json.loads(result1)
    return jsonify(r)


def check_status_function():
    eId = request.values.get("eId")
    uu = entityInfoDB.search_entity(eId)
    if uu is None:
        return jsonify('eId Error.')
    result = dict()
    if uu.eStatus == '8':
        status = 'Rejected'
    if uu.eStatus == '0':
        status = 'Draft'
    if uu.eStatus == '1':
        status = 'Submitted'
    if uu.eStatus == '2':
        status = 'Being Verifed by Curator.'
    if uu.eStatus == '3':
        status = 'Submitted'
    if uu.eStatus == '4':
        status = 'Curator Approved.'
    if uu.eStatus == '5':
        status = 'Submitted'
    if uu.eStatus == '6':
        status = 'Being Verifed by Manager.'
    if uu.eStatus == '7':
        status = 'Released'
    result['status'] = status
    return jsonify(result)


# check the details of the entity
def check_entity_function():
    eId = request.values.get("eId")
    role = request.values.get("role")
    en = entityInfoDB.search_entity(eId)
    if en is None:
        return jsonify('eId Error!')
    if role == 'Manager':
        en.eStatus = 6
    if role == 'Curator':
        en.eStatus = 2

    result = dict()
    if en is None:
        return jsonify('No such Entity!')
    result['eId'] = en.eId
    result['uId'] = en.euId
    result['eType'] = en.eType
    result['eName'] = en.eName
    result['eTitle'] = en.eSubName
    result['sDate'] = en.eStartDate
    result['eDate'] = en.eEndDate
    result['bPlace'] = en.eBirthPlace
    result['dPlace'] = en.eDeathPlace
    result['sumNote'] = en.eSumNote
    result['ePrepared'] = en.ePrepared
    result['resources'] = en.eImgResource

    if en.eLocation is not None:
        dn = jsonEntity.read_entity(en.eLocation)
        result['fullNote'] = dn.fullNote

    if en.eImage is None:
        result['image'] = 'static/images/default.png'
    else:
        result['image'] = 'static/images/' + en.eId + '.png'

    als = alternationDB.search_alternation_eId_Fdb(en.eId)  # just for one relationship
    result['alternation'] = []
    if als is not None:
        for al in als:
            aa = Models.Objects.alternationforen(al.aType, al.alternate)
            result['alternation'].append(aa.__dict__)

    pr = publicResourceDB.search_publicResource_eId_Fdb(en.eId)  # just for one relationship
    result['publish'] = []
    if pr is not None:
        for r in pr:
            pp = Models.Objects.publicResourceforen(r.pId, r.pTitle, r.pType, r.pUrl)
            result['publish'].append(pp.__dict__)

    dr = digitalResourceDB.search_digitalResource_eId_Fdb(en.eId)  # just for one relationship
    result['digital'] = []
    if dr is not None:
        for r in dr:
            dd = Models.Objects.digitalResourceforen(r.dId, r.dTitle, r.dType, r.dUrl)
            result['digital'].append(dd.__dict__)

    rela = relationshipDB.search_relationship_eId(en.eId)
    result['Individual'] = []
    result['Organisation'] = []
    if rela is not None:
        for r in rela:
            ren = entityInfoDB.search_entity(r.reId)
            if ren is not None: #rId, eId, relPairs, reId, eName, sDate, eType
                rr = Models.Objects.relationshipsforen(r.rId, r.eId, r.relationship, r.reId, ren.eName, ren.eType)
                if ren.eType == 'Person':
                    result['Individual'].append(rr.__dict__)
                if ren.eType == 'Organisation':
                    result['Organisation'].append(rr.__dict__)
            else:
                rr = Models.Objects.relationshipsforen(r.rId, r.eId, r.relationship, r.reId, None, None)

            # print(r.reId)

    occ = occupationDB.search_occupation_eId_Fdb(en.eId)
    result['function'] = []
    if occ is not None:
        for o in occ:
            ff = Models.Objects.functions(o.oId, o.occupation, o.oEvent)
            result['function'].append(ff.__dict__)

    fb = feedbackDB.search_feedback_eId(eId)
    if fb is not None:
        print(fb.feedback)
        result['feedback'] = json.loads(fb.feedback)
    print(result)
    return jsonify(result)


def check_basic_eInfo_function():
    data = request.get_data()
    json_data = json.loads(data)
    result = entityInfoDB.search_basic_entityinfo_db(json_data['eName'], json_data['sDate'], json_data['bPlace'])
    print(result)
    if result is not None:
        return result
    else:
        return jsonify('false')


def reject_entity_function():
    data = request.get_data()
    json_data = json.loads(data)
    print(json_data)
    eId = json_data['eId']
    role = json_data['role']
    uId = json_data['vuId']
    user = userInfoDB.search_user(uId)
    if user is None:
        return jsonify('uId Error')
    en = entityInfoDB.search_entity(eId)
    if en is None:
        return jsonify('eId error')
    if en.eStatus == '8':
        return jsonify('false')
    if role == 'Manager':
        if en.eStatus == '7':
            return jsonify('false')
    if role == 'Curator':
        if en.eStatus == '4' or en.eStatus == '7':
            return jsonify('false')
    en.eStatus = '8'
    date = time.strftime('%Y-%m-%d', time.localtime(time.time()))  # Rejected date
    en.eSubDate = date
    entityInfoDB.update_entity2db(en)
    fd = feedbackDB.search_feedback_eId(eId)
    if fd is not None:
        feedbackDB.dele_feedbackFdb(eId)
    fnum = feedbackDB.search_feedback_num() + 1
    fId = 'FB_' + str(fnum)
    date = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    fb = Model.Feedback(fId, json_data['eId'],uId, json.dumps(json_data['feedback']), date)
    feedbackDB.add_feedback2db(fb)
    user = userInfoDB.search_user(en.euId)
    if user is not None:
        url = ''#json_data['url']
        if user.uvs == '0':
            SendEmail.rejectEntityEmail(user,url)
    return jsonify('true')


def approve_entity_function():
    data = request.get_data()
    json_data = json.loads(data)
    print(json_data)
    eId = json_data['eId']
    uId = json_data['vuId']
    en = entityInfoDB.search_entity(eId)
    print(uId)
    u = userInfoDB.search_user(uId)
    if u is None:
        return jsonify('uId Error')
    if en is None:
        return jsonify('eId Error')
    if en.eStatus == '8':
        return jsonify('false')
    print(u.role)
    if u.role == 'Manager':
        if en.eStatus == '7':
            return jsonify('false')
    if u.role == 'Curator':
        if en.eStatus == '4' or en.eStatus == '7':
            return jsonify('false')
    date = time.strftime('%Y-%m-%d', time.localtime(time.time()))  # Approved date
    en.eSubDate = date
    print(u.role)
    if u.role == 'Manager':
        print('en.status')
        en.eStatus = '7'
    if u.role == 'Curator':
        en.eStatus = '4'
    fd = feedbackDB.search_feedback_eId(eId)
    if fd is not None:
        feedbackDB.dele_feedbackFdb(eId)
    fnum = feedbackDB.search_feedback_num() + 1
    fId = 'FB_' + str(fnum)
    date = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    fb = Model.Feedback(fId, json_data['eId'],uId, json.dumps(json_data['feedback']), date)
    feedbackDB.add_feedback2db(fb)
    entityInfoDB.update_entity2db(en)
    user = userInfoDB.search_user(en.euId)
    if user is not None:
        url = ''#json_data['url']
        if user.uvs == '0':
            if u.role == 'Manager':
                SendEmail.releaseEntityEmail(user, url)
            else:
                SendEmail.approveEntityEmail(user, url)
    return jsonify('true')


def release_entity_function():
    data = request.get_data()
    json_data = json.loads(data)
    en = entityInfoDB.search_entity(json_data.eId)
    if en is None:
        return jsonify('eId Error.')
    en.status = 7
    entityInfoDB.update_entity2db(en)
    return jsonify('true')


def check_feedback_function():
    data = request.get_data()
    json_data = json.loads(data)
    feedback = feedbackDB.search_feedback_eId(json_data.eId)
    if feedback is not None:
        customers = []
        for e in feedback:
            u = e.__dict__
            result = json.dumps(u)
            customers.append(result)
        # print(result)
        result1 = str(customers).replace('\'', '')
    # print(result1)
        r = json.loads(result1)
        return jsonify(r)
    else:
        return jsonify('false')


# Modify and submit a existing entity
def update_entity(func, json_data, f, flag):
    eId = json_data['eId']
    print(eId)
    en = entityInfoDB.search_entity(eId)

    if en is None:
        return jsonify('eId Error.')
    locationImg = en.eImage
    jsonEntity.delete_entity_Json(en.eLocation)
    entityInfoDB.dele_entityFdb(eId)
    imgLocation = None
    print('ff： '+str(f))

    if flag == '2':
        if en.eImage is not None:
            imgLocation = eId
    else:
        if en.eImage is not None:
            imageOperation.deleteImage(en.eImage)
        print(imgLocation)
    neweId = add_entity(func, json_data, f, imgLocation,locationImg)
    return neweId


# This entity has not been created before.
def add_entity(func, json_data, f,imgLoc,locationImg):
    print(json_data)
    status = 0
    if func == 1:
        status = 1
    date = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    anum = alternationDB.search_alternation_num() + 1
    enum = entityInfoDB.search_entity_num() + 1
    if imgLoc is not None:
        eId = imgLoc
    else:
        eId = 'ENTITY_' + str(enum)

    aId = 'ALTER_' + str(anum)
    alternation = json_data['alternation']
    for a in alternation:
        alter = Model.Alternation(aId, a['alterType'], a['alterName'], eId)
        anum = anum + 1
        aId = 'ALTER_' + str(anum)
        alternationDB.add_alternation(alter)

    rnum = relationshipDB.search_relationship_num() + 1
    rId = 'RELA_' + str(rnum)
    individual = json_data['individual']
    orgnaisation = json_data['orgnaisation']

    for r in individual:
        relationship = Model.Relationship(rId, eId, r['reId'], r['relPair'])
        rnum = rnum + 1
        rId = 'RELA_' + str(rnum)
        print(r)
        relationshipDB.add_relationship2db(relationship)

    rnum = rnum + 1
    for r in orgnaisation:
        relationship = Model.Relationship(rId, eId, r['reId'], r['relPair'])
        rnum = rnum + 1
        rId = 'RELA_' + str(rnum)
        print(r)
        relationshipDB.add_relationship2db(relationship)

    drnum = digitalResourceDB.search_digitalResource_num() + 1
    prnum = publicResourceDB.search_publicResource_num() + 1
    dId = 'DR_' + str(drnum)
    pId = 'PR_' + str(prnum)
    digital = json_data['digital']
    publish = json_data['publish']

    for r in digital:
        drnum = drnum + 1
        dr = Model.DigitalResourse(dId, r['dTitle'], r['dType'], None, r['dUrl'], eId)
        dId = 'DR_' + str(drnum)
        print(r)
        digitalResourceDB.add_digitalResource2bd(dr)

    for r in publish:
        prnum = prnum + 1
        pr = Model.PublicResourse(pId, r['pTitle'], r['pType'], r['pUrl'], eId)
        pId = 'PR_' + str(prnum)
        print(r)
        publicResourceDB.add_publicResource2bd(pr)

    newEntity = jsonEntity.NewEntity1(eId, json_data['fullNote'])
    location = jsonEntity.new_entity_Json(eId, newEntity)
    eImage = None
    # Image location
    if f is not None:
        imageName = str(eId + '.png')
        imgLocation = imageOperation.saveImage(f, imageName)
        eImage = imgLocation
    else:
        eImage = locationImg
    print('eImage: ')
    print(eImage)
    #else:
      #  ROOT_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
      #  eImage = str(ROOT_DIR) + 'Models/static/images/default.png'

    newEndb = Model.EntityInfo(eId, json_data['eType'], json_data['eName'], json_data['eTitle'],
                               json_data['sDate'],
                               json_data['eDate'],
                               json_data['bPlace'], json_data['dPlace'], json_data['sumNote'],
                               json_data['ePrepared'], alter.aId, location, status, date, json_data['euId'], eImage, json_data['resources'])
    entityInfoDB.add_entity2db(newEndb)
    alternationDB.add_alternation(alter)
    onum = occupationDB.search_occupation_num() + 1
    oId = 'OCC_' + str(onum)
    occups = json_data['function']
    # customers = []
    if occups is not None:
        for f in occups:
            fun = Model.Occupation(oId, eId, f, None)
            # customers.append(fun)
            onum = onum + 1
            oId = 'OCC_' + str(onum)
            print(f)
            occupationDB.add_occupation2bd(fun)
    # print(occups)
    #    new_entity_Json(enum + 1, newEntity)
    print(newEntity)
    return eId


# give feedback to the entity, one entity can just has one feedback once a time.
def give_feedback_function():
    data = request.get_data()
    json_data = json.loads(data)
    eId = json_data['eId']
    uId = json_data['uId']
    check_f = feedbackDB.search_feedback_eId(eId)
    if check_f is None:
        fnum = feedbackDB.search_feedback_num() + 1
        fId = 'FB_' + str(fnum)
        date = time.strftime('%Y-%m-%d', time.localtime(time.time()))
        feedback = Model.Feedback(fId, json_data['eId'], json_data['feedback'], date)
        feedbackDB.add_feedback(feedback)
        return jsonify('true')
    else:
        return jsonify('false')


ALLOWED_EXTENSIONS = set(['png', 'jpg', 'JPG', 'PNG', 'bmp'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


def upload_function():
    f = request.files['file']
    if not (f and allowed_file(f.filename)):
        return jsonify({"error": 1001, "msg": "请检查上传的图片类型，仅限于png、PNG、jpg、JPG、bmp"})
    user_input = request.form.get("name")
    print(user_input)
    print(f)
    data = request.values.get("data")
    #  data = request.get_data()
    json_data = json.loads(data)
    basepath = os.path.dirname(__file__)  # 当前文件所在路径
    upload_path = os.path.join(basepath, './images', secure_filename(f.filename))  # 注意：没有的文件夹一定要先创建，不然会提示没有该路径
    # upload_path = os.path.join(basepath, './Images','image.jpg')  #注意：没有的文件夹一定要先创建，不然会提示没有该路径
    f.save(upload_path)

    # 使用Opencv转换一下图片格式和名称
    img = cv2.imread(upload_path)
    cv2.imwrite(os.path.join(basepath, './images', 'test.jpg'), img)
    return url_for('static', filename='images/test.jpg')
