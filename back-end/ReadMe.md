# Back-end of Women In Australia Project 

The back-end is implemented with Flask+Python3.6+MySQL.

### Requirements
 Library requirements lists and use "pip install -r requirements.txt" to install all these libraries.
 ```sh
$ pip install -r requirements.txt
```


### Installation

1. Install pycharm and set Run-> Flask Server -> Additional options [--host=0.0.0.0  --port=5000].
2. Install mySQL-> create an account -> create database "WomenInAu" -> Using this command to recovery database (backup.sql is in the Document: Component-> Implementation -> databasebackup), this database will be backed up every week, so choose the newest one to recovery the database.
```sh
$ mysql -u root -p [dbname] < backup.sql
```

### Deployment
We choose to deploy the back-end part on to an Amazon EC2 server (13.210.246.106). There are several steps you need to follow. Please enter the command shown below.
#### 1. Create Python 3.6 Environment
#####     a. (Install pre-requisites)
        sudo yum -y groupinstall development
        sudo yum -y install zlib-devel
        sudo yum -y install openssl-devel
#####    b. (Installing openssl-devel alone seems to result in SSL errors in pip)
       (Need to install OpenSSL also to avoid these errors)
        wget https://github.com/openssl/openssl/archive/OpenSSL_1_0_2l.tar.gz
        tar -zxvf OpenSSL_1_0_2l.tar.gz 
        cd openssl-OpenSSL_1_0_2l/
        ./config shared
        make
        sudo make install
        export LD_LIBRARY_PATH=/usr/local/ssl/lib/
        cd ..
        rm OpenSSL_1_0_2l.tar.gz
        rm -rf openssl-OpenSSL_1_0_2l/
#####    c. (Install Python 3.6)
        wget https://www.python.org/ftp/python/3.6.0/Python-3.6.0.tar.xz
        tar xJf Python-3.6.0.tar.xz
        cd Python-3.6.0
        ./configure
        make
        sudo make install
        cd ..
        rm Python-3.6.0.tar.xz
        sudo rm -rf Python-3.6.0
#####    d. (Create virtualenv running Python 3.6)
        sudo pip install --upgrade virtualenv
        virtualenv -p python3 MYVENV
        source MYVENV/bin/activate
#####    e. (Test)
        python --version (You can see Python 3.6.0)

#### 2. Create the MYSQL Environment
#####    a. (Prerequsiteis)
        sudo yum update
#####    b. (Install MySQL Server)
        sudo yum install mysql57-server
        service mysqld start
        chkconfig mysqld on
#####    c. (Post Install Setup)
        mysql_secure_installation
        (Follow each step and set a password)
#####    d. (Connect MySQL Terminal)
        mysql -u root -p (then enter the password)

#### 3. Run the project on the remote server
#####    a. (Activate the Python environment)
        source MYVENV/bin/activate 
#####    b. (Change the path to our project)   
        cd /home/ec2-user/WA
#####    c. (Run the program)  
        python app.py
        python ScheduleTask.py
        




