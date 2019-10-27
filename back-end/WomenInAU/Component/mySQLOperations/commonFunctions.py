
# type : 0(EntityInfo); 1(ALTERNATION); 2(OCCUPATION);
# 3(Relationship); 4(Feedback); 5(USERINFO);
# 6(Digital Resource); 7(Public Resource); 8(Message)
import datetime


def largestId(objects, type):
    i = 0
    for oId in objects:
        if type == 0:
            num = 7; # ENTITY_
            s = oId.eId
        if type == 1:
            num = 6; # ALTER_
            s = oId.aId
        if type == 2:
            num = 4; # OCC_
            s = oId.oId
        if type == 3:
            num = 5; #RELA_
            s = oId.rId
        if type == 4:
            num = 3;# FB_
            s = oId.fId
        if type == 5:
            num = 9;# USERINFO_
            s = oId.uId
        if type == 6:
            num = 3;# DR_
            s = oId.dId
        if type == 7:
            num = 3;# PR_
            s = oId.pId
        if type == 8:
            num = 4;   # MSG_
            s = oId.mId
        ss = int(s[num:])
        if i < ss:
            i = ss;
    return i


def scheduleDay(date,func):
    day = int(date[8:])
    now = datetime.datetime.now()
    ts = now.strftime('%d')
    if func == 1:
        if (day +  14 <= 30 and day +  14 == int(ts)) or (day +  14 > 30 and day +  14 - 30 == int(ts)):
            return 1
        else:
            return 0
    if func == 2:
        if (day +  14 <= 30 and day +  14 == int(ts)) or (day +  14 > 30 and day +  14 - 30 == int(ts)):
            return 1
        else:
            return 0
    if func == 3:
        if (day + 7 <= 30 and day + 7 == int(ts)) or (day + 7 > 30 and day + 7 - 30 == int(ts)):
            return 1
        else:
            return 0
