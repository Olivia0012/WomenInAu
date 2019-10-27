# Import required python libraries
import os
import time
import datetime
import glob
import shutil
# MySQL database details to which backup to be done. Make sure below user having enough privileges to take databases backup.
# To take multiple databases backup, create any file like /backup/dbnames.txt and put databses names one on each line and assignd to DB_NAME variable.
#这里填你的公网ip
DB_HOST = 'localhost'
#这里填数据库用户名
DB_USER = 'root'
#这里填数据库密码
DB_USER_PASSWORD = 'manlo1314@'
#DB_NAME = '/backup/dbnames.txt'
#这里填要备份的数据库
DB_NAME = 'WomenInAu'
#这里填需要备份到的路径
BACKUP_PATH = './databasebackup/dbbackup'

# Getting current datetime to create seprate backup folder like "12012013-071334".
DATETIME = time.strftime('%Y%m%d')

TODAYBACKUPPATH = BACKUP_PATH + DATETIME

# Checking if backup folder already exists or not. If not exists will create it.

def dbBackup():
    print ('del folder three days ago')
    folders = glob.glob('Please input the location of saving the backup./*')
    today = datetime.datetime.now()
    for item in folders:
        try:
            foldername = os.path.split(item)[1]
            day = datetime.datetime.strptime(foldername, "%Y%m%d")
            diff = today - day
            if diff.days >= 3:
                shutil.rmtree(item)
        except:
            pass
    print ("creating backup folder")
    if not os.path.exists(TODAYBACKUPPATH):
        os.makedirs(TODAYBACKUPPATH)

    # Code for checking if you want to take single database backup or assinged multiple backups in DB_NAME.
    print ("checking for databases names file.")
    if os.path.exists(DB_NAME):
        file1 = open(DB_NAME)
        multi = 1
        print ("Databases file found...")
        print ("Starting backup of all dbs listed in file " + DB_NAME)
    else:
        print ("Databases file not found...")
        print ("Starting backup of database " + DB_NAME)
        multi = 0

    # Starting actual database backup process.
    if multi:
        in_file = open(DB_NAME,"r")
        flength = len(in_file.readlines())
        in_file.close()
        p = 1
        dbfile = open(DB_NAME,"r")

        while p <= flength:
            db = dbfile.readline()   # reading database name from file
            db = db[:-1]         # deletes extra line
            dumpcmd = "mysqldump -u " + DB_USER + " -p" + DB_USER_PASSWORD + " " + db + " > " + TODAYBACKUPPATH + "/" + db + ".sql"
            os.system(dumpcmd)
            p = p + 1
        dbfile.close()
    else:
        db = DB_NAME
        dumpcmd = "mysqldump -u " + DB_USER + " -p" + DB_USER_PASSWORD + " " + db + " > " + TODAYBACKUPPATH + "/" + db + ".sql"
        os.system(dumpcmd)

    print ("Backup script completed")
    print ("Your backups has been created in '" + TODAYBACKUPPATH + "' directory")

#dbBackup()