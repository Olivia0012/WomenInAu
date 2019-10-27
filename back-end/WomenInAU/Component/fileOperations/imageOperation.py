# 设置允许的文件格式
import os
from datetime import timedelta

import cv2
from flask import jsonify
from werkzeug.utils import secure_filename

from Component.Models.Model import app

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'JPG', 'PNG', 'bmp'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


#app = Flask(__name__)
# 设置静态文件缓存过期时间
app.send_file_max_age_default = timedelta(seconds=1)


def saveImage(f,imageName):
    if not (f and allowed_file(f.filename)):
        return jsonify({"error": 1001, "msg": "Image format is not supported, please change to png、PNG、jpg、JPG、bmp"})
    # user_input = request.form.get("name")
    print(f)
    #  curPath = os.path.dirname(__file__)
    ROOT_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    print(ROOT_DIR)
    #  basepath = curPath[:curPath.find("WA\\") + len("WA\\")]
    upload_path = os.path.join(ROOT_DIR, 'Models/static/images',
                               secure_filename(f.filename))  # 注意：没有的文件夹一定要先创建，不然会提示没有该路径
    # upload_path = os.path.join(basepath, './Images','image.jpg')  #注意：没有的文件夹一定要先创建，不然会提示没有该路径
    f.save(upload_path)
    img = cv2.imread(upload_path)
    cv2.imwrite(os.path.join(ROOT_DIR, 'Models/static/images', imageName), img)
    location = os.path.join(ROOT_DIR, 'Models/static/images',
                 secure_filename(imageName))
    return location


def deleteImage(eLocation):
    os.remove(eLocation)

