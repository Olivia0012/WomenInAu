from flask import Flask

app = Flask(__name__)

app.config[
    'SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:manlo1314@@localhost:3306/WomenInAu?charset=UTF8MB4'
app.config['SECRET_KEY'] = "random string"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True

#db.init_app(app)