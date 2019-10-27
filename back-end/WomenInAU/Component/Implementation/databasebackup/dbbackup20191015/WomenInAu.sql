-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: WomenInAu
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Alternation`
--

DROP TABLE IF EXISTS `Alternation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Alternation` (
  `AID` varchar(10) NOT NULL,
  `ALTERNATION_NAME` varchar(20) DEFAULT NULL,
  `ALTERNATION_TYPE` varchar(20) DEFAULT NULL,
  `EID` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`AID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alternation`
--

LOCK TABLES `Alternation` WRITE;
/*!40000 ALTER TABLE `Alternation` DISABLE KEYS */;
INSERT INTO `Alternation` VALUES ('ALTER_1','xx','swsw','ENTITY_1'),('ALTER_10','','','ENTITY_11'),('ALTER_11','','','ENTITY_12'),('ALTER_13','','','ENTITY_14'),('ALTER_16','asd','asdas','ENTITY_17'),('ALTER_17','aaaa','aaaaa','ENTITY_18'),('ALTER_18','aaaaa','vdsvs','ENTITY_19'),('ALTER_19','','','ENTITY_20'),('ALTER_2','vdsvs','dqwdqw','ENTITY_2'),('ALTER_20','aaaaa','aaaa','ENTITY_21'),('ALTER_27','','','ENTITY_28'),('ALTER_28','sss','aaaa','ENTITY_29'),('ALTER_29','','','ENTITY_30'),('ALTER_3','','','ENTITY_3'),('ALTER_30','dqwd','','ENTITY_31'),('ALTER_31','aaaa','aaaaa','ENTITY_32'),('ALTER_32','aaaaa','aaaa','ENTITY_33'),('ALTER_33','DVSD','CSAC','ENTITY_34'),('ALTER_34','','','ENTITY_35'),('ALTER_35','','','ENTITY_36'),('ALTER_36','','','ENTITY_37'),('ALTER_37','','','ENTITY_38'),('ALTER_38','','','ENTITY_39'),('ALTER_39','','','ENTITY_40'),('ALTER_40','','','ENTITY_41'),('ALTER_41','','','ENTITY_42'),('ALTER_42','','','ENTITY_43'),('ALTER_43','','','ENTITY_44'),('ALTER_44','','','ENTITY_45'),('ALTER_45','','','ENTITY_46'),('ALTER_46','','','ENTITY_47'),('ALTER_47','','','ENTITY_48'),('ALTER_48','aaaaa','bbbbb','ENTITY_49'),('ALTER_49','Staines, Elizabeth','married name','ENTITY_50'),('ALTER_5','','lisa','ENTITY_5'),('ALTER_6','','','ENTITY_6'),('ALTER_7','','','ENTITY_8'),('ALTER_8','','','ENTITY_9'),('ALTER_9','','','ENTITY_10');
/*!40000 ALTER TABLE `Alternation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DigitalResourse`
--

DROP TABLE IF EXISTS `DigitalResourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DigitalResourse` (
  `DID` varchar(40) NOT NULL,
  `DR_Title` varchar(50) DEFAULT NULL,
  `DR_TYPE` varchar(50) DEFAULT NULL,
  `DR_DATE` varchar(50) DEFAULT NULL,
  `DR_URL` varchar(200) DEFAULT NULL,
  `EID` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`DID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DigitalResourse`
--

LOCK TABLES `DigitalResourse` WRITE;
/*!40000 ALTER TABLE `DigitalResourse` DISABLE KEYS */;
INSERT INTO `DigitalResourse` VALUES ('DR_1','dwq','d',NULL,'d','ENTITY_1'),('DR_13','asd','asd',NULL,'asdasd','ENTITY_17'),('DR_14','fewf','fwef',NULL,'fewf','ENTITY_29'),('DR_15','d','XSAC',NULL,'CCASC','ENTITY_33'),('DR_16','VFD','FV',NULL,'FV','ENTITY_34'),('DR_17','fd','vfvvfvfv',NULL,'cdsvvfv','ENTITY_35'),('DR_18','wd','dwq',NULL,'dwq','ENTITY_44'),('DR_19','csac','scasac',NULL,'sacs','ENTITY_45'),('DR_2','edw','dew',NULL,'dew','ENTITY_2'),('DR_20','ddqwd','dwq',NULL,'dqw','ENTITY_46'),('DR_21','xz ',' zx',NULL,'http://sss.com','ENTITY_48'),('DR_22','s','sad',NULL,'http://sss.com','ENTITY_49'),('DR_3','g','rgr',NULL,'grg','ENTITY_6'),('DR_5','dwq','dw',NULL,'dwd','ENTITY_8'),('DR_6','dsa','dsa',NULL,'sd','ENTITY_10'),('DR_7','sad','das',NULL,'das','ENTITY_11'),('DR_8','ds','sds',NULL,'ds','ENTITY_12'),('DR_9','e3','e3',NULL,'e32','ENTITY_14');
/*!40000 ALTER TABLE `DigitalResourse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EntityInfo`
--

DROP TABLE IF EXISTS `EntityInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EntityInfo` (
  `EID` varchar(40) NOT NULL,
  `E_TYPE` varchar(40) DEFAULT NULL,
  `E_NAME` varchar(50) DEFAULT NULL,
  `E_IMAGE` varchar(200) DEFAULT NULL,
  `E_SUBNAME` varchar(50) DEFAULT NULL,
  `E_STARTDATE` varchar(20) DEFAULT NULL,
  `E_ENDDATE` varchar(50) DEFAULT NULL,
  `E_BIRTHPLACE` varchar(50) DEFAULT NULL,
  `E_DEATHPLACE` varchar(50) DEFAULT NULL,
  `E_SUMNOTE` varchar(50) DEFAULT NULL,
  `E_PREPARED` varchar(50) DEFAULT NULL,
  `E_LOCATION` varchar(50) DEFAULT NULL,
  `E_STATUS` varchar(10) DEFAULT NULL,
  `E_SUBDATE` varchar(50) DEFAULT NULL,
  `EUID` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EntityInfo`
--

LOCK TABLES `EntityInfo` WRITE;
/*!40000 ALTER TABLE `EntityInfo` DISABLE KEYS */;
INSERT INTO `EntityInfo` VALUES ('ENTITY_1','Person','Yue Guo1','/Users/manlo/Desktop/UNIMELB/Semester1/PROJECT/WA/WA/Component/Models/static/images/ENTITY_1.jpg','Yue Guo1\'s project','10/02/1012','','xsq','dqwd','dqwd','','./JsonEntities/AWE_ENTITY_1.json','1','2019-10-14','USERINFO_6'),('ENTITY_10','Person','Yue Guo',NULL,'','','','','','wdq','','./JsonEntities/AWE_ENTITY_10.json','1','2019-10-14','USERINFO_6'),('ENTITY_11','Person','Yue Guo',NULL,'','','','','','dsad','','./JsonEntities/AWE_ENTITY_11.json','7','2019-10-14','USERINFO_5'),('ENTITY_12','Person','Yue Guo',NULL,'','','','','','dwd','','./JsonEntities/AWE_ENTITY_12.json','1','2019-10-14','USERINFO_6'),('ENTITY_17','Person','asdad',NULL,'sada','asd','','asd','asd','sdsadas','','./JsonEntities/AWE_ENTITY_17.json','0','2019-10-14','USERINFO_16'),('ENTITY_18','Person','Yue Guo',NULL,'qwdqwd','10/02/1012','12/30/2311','2023','klnkjn','k.mklml;',NULL,'./JsonEntities/AWE_ENTITY_18.json','1','2019-10-14','USERINFO_6'),('ENTITY_19','Person','Yue Guo',NULL,'bbbbb','10/02/1012','12/30/2311','rrr','ffff','dew',NULL,'./JsonEntities/AWE_ENTITY_19.json','1','2019-10-14','USERINFO_6'),('ENTITY_2','Person','Yue Guo','/Users/manlo/Desktop/UNIMELB/Semester1/PROJECT/WA/WA/Component/Models/static/images/ENTITY_2.jpg','qwdqwd','10/02/1012','','edw','dew','dew','','./JsonEntities/AWE_ENTITY_2.json','7','2019-10-14','USERINFO_5'),('ENTITY_20','Person','nancy',NULL,'','','','','','de',NULL,'./JsonEntities/AWE_ENTITY_20.json','7','2019-10-14','USERINFO_5'),('ENTITY_21','Person','Yue Guo',NULL,'dsad','10/02/1012','12/30/2311','dwd','dwd','dew',NULL,'./JsonEntities/AWE_ENTITY_21.json','1','2019-10-14','USERINFO_6'),('ENTITY_28','Person','Yue Guo',NULL,'','','','','','crcr','','./JsonEntities/AWE_ENTITY_28.json','1','2019-10-14','USERINFO_6'),('ENTITY_29','Person','New',NULL,'bbbbb','10/02/1012','','dqwd','de','deefef','','./JsonEntities/AWE_ENTITY_29.json','1','2019-10-14','USERINFO_6'),('ENTITY_3','Person','landon','/Users/manlo/Desktop/UNIMELB/Semester1/PROJECT/WA/WA/Component/Models/static/images/ENTITY_3.jpg','','','','','','\';,;l','','./JsonEntities/AWE_ENTITY_3.json','8','2019-10-14','USERINFO_6'),('ENTITY_30','Person','Yue Guo',NULL,'vvv','','','','','ftt',NULL,'./JsonEntities/AWE_ENTITY_30.json','1','2019-10-14','USERINFO_6'),('ENTITY_31','Person','Yue Guo',NULL,'qwdqwd','dwqd','dqwd','dqwd','dqwd','dqwd',NULL,'./JsonEntities/AWE_ENTITY_31.json','1','2019-10-14','USERINFO_6'),('ENTITY_32','Person','Yue Guo',NULL,'qwdqwd','10/02/1012','','dqwd','ded','dewd',NULL,'./JsonEntities/AWE_ENTITY_32.json','1','2019-10-15','USERINFO_6'),('ENTITY_33','Person','ppppp',NULL,'bbbbb','10/02/1012','','dwq','dwd','ax','','./JsonEntities/AWE_ENTITY_33.json','7','2019-10-15','USERINFO_6'),('ENTITY_34','Organisation','1s',NULL,'CSAC','10/02/1012','12/30/2311','CDSC','CDSC','VDSV','','./JsonEntities/AWE_ENTITY_34.json','8','2019-10-15','USERINFO_6'),('ENTITY_35','Person','',NULL,'','','','','','',NULL,'./JsonEntities/AWE_ENTITY_35.json','0','2019-10-15','USERINFO_6'),('ENTITY_36','Person','',NULL,'','','','','','',NULL,'./JsonEntities/AWE_ENTITY_36.json','0','2019-10-15','USERINFO_6'),('ENTITY_37','Person','',NULL,'','','','','','','','./JsonEntities/AWE_ENTITY_37.json','8','2019-10-15','USERINFO_6'),('ENTITY_38','Person','',NULL,'','','','','','',NULL,'./JsonEntities/AWE_ENTITY_38.json','0','2019-10-15','USERINFO_6'),('ENTITY_39','Person','Yue Guo',NULL,'','','','','','',NULL,'./JsonEntities/AWE_ENTITY_39.json','0','2019-10-15','USERINFO_6'),('ENTITY_40','Organisation','Yue Guo',NULL,'','','','','','9589','','./JsonEntities/AWE_ENTITY_40.json','0','2019-10-15','USERINFO_6'),('ENTITY_41','Person','s',NULL,'','','','','','cas',NULL,'./JsonEntities/AWE_ENTITY_41.json','8','2019-10-15','USERINFO_6'),('ENTITY_42','Person','landon',NULL,'','','','','',' xz','','./JsonEntities/AWE_ENTITY_42.json','0','2019-10-15','USERINFO_6'),('ENTITY_43','Person','landon',NULL,'','','','','','vds','','./JsonEntities/AWE_ENTITY_43.json','7','2019-10-15','USERINFO_6'),('ENTITY_44','Organisation','Yue Guo',NULL,'','','','','','dwqd','','./JsonEntities/AWE_ENTITY_44.json','7','2019-10-15','USERINFO_6'),('ENTITY_45','Person','x z',NULL,'','','','','','scac','','./JsonEntities/AWE_ENTITY_45.json','7','2019-10-15','USERINFO_6'),('ENTITY_46','Person','Yue Guo',NULL,'','','','','','dqw','','./JsonEntities/AWE_ENTITY_46.json','7','2019-10-15','USERINFO_6'),('ENTITY_47','Person','',NULL,'','','','','','','','./JsonEntities/AWE_ENTITY_47.json','7','2019-10-15','USERINFO_6'),('ENTITY_48','Person','Yue Guo',NULL,'','','','','',' zx','','./JsonEntities/AWE_ENTITY_48.json','8','2019-10-15','USERINFO_6'),('ENTITY_49','Organisation','Yue Guo',NULL,'Yue Guo\'s project','10/02/1012','12/30/2011','dwqd','dqwd','sadas','','./JsonEntities/AWE_ENTITY_49.json','1','2019-10-15','USERINFO_9'),('ENTITY_5','Person','Serana Woods','/Users/manlo/Desktop/UNIMELB/Semester1/PROJECT/WA/WA/Component/Models/static/images/ENTITY_5.jpg','AACR2','','','','','','','./JsonEntities/AWE_ENTITY_5.json','8','2019-10-14','USERINFO_5'),('ENTITY_50','Person','Morgan, Elizabeth',NULL,'','December 1827','','Penzance, Cornwall, England','Melbourne?','ghdfghdthdtyhtghdfghdtrghdghrtyjutyutyuff',NULL,'./JsonEntities/AWE_ENTITY_50.json','8','2019-10-15','USERINFO_10'),('ENTITY_6','Person','grg','/Users/manlo/Desktop/UNIMELB/Semester1/PROJECT/WA/WA/Component/Models/static/images/ENTITY_6.jpg','','','','','','grg','','./JsonEntities/AWE_ENTITY_6.json','7','2019-10-14','USERINFO_5'),('ENTITY_8','Person','Yue Guo','/Users/manlo/Desktop/UNIMELB/Semester1/PROJECT/WA/WA/Component/Models/static/images/ENTITY_8.jpg','','','','','','d','','./JsonEntities/AWE_ENTITY_8.json','7','2019-10-14','USERINFO_5'),('ENTITY_9','Person','Yue Guo','/Users/manlo/Desktop/UNIMELB/Semester1/PROJECT/WA/WA/Component/Models/static/images/ENTITY_9.jpg','','','','','','784458','','./JsonEntities/AWE_ENTITY_9.json','7','2019-10-14','USERINFO_5');
/*!40000 ALTER TABLE `EntityInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Feedback`
--

DROP TABLE IF EXISTS `Feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Feedback` (
  `FID` varchar(50) NOT NULL,
  `EID` varchar(50) DEFAULT NULL,
  `UID` varchar(50) DEFAULT NULL,
  `FEEDBACK` varchar(700) DEFAULT NULL,
  `FDATE` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`FID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Feedback`
--

LOCK TABLES `Feedback` WRITE;
/*!40000 ALTER TABLE `Feedback` DISABLE KEYS */;
INSERT INTO `Feedback` VALUES ('FB_10','ENTITY_7','USERINFO_5','{\"Digital\": \"false\", \"Individual\": \"false\", \"Organisation\": \"false\", \"Publish\": \"false\", \"alterName\": \"false\", \"alterType\": \"false\", \"bPlace\": \"false\", \"dPlace\": \"false\", \"eDate\": \"false\", \"eName\": \"false\", \"eTitle\": \"false\", \"feedback\": \"\", \"fullNote\": \"false\", \"function\": \"false\", \"resources\": \"false\", \"sDate\": \"false\", \"sumNote\": \"false\"}','2019-10-14'),('FB_11','ENTITY_5','USERINFO_6','{\"Digital\": \"false\", \"Individual\": \"false\", \"Organisation\": \"false\", \"Publish\": \"\\\"false\\\"\", \"alterName\": \"false\", \"alterType\": \"false\", \"bPlace\": \"true\", \"dPlace\": \"false\", \"eDate\": \"false\", \"eName\": \"false\", \"eTitle\": \"false\", \"feedback\": \"\", \"fullNote\": \"false\", \"function\": \"false\", \"resources\": \"false\", \"sDate\": \"false\", \"sumNote\": \"false\"}','2019-10-14'),('FB_12','ENTITY_6','USERINFO_6','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-14'),('FB_13','ENTITY_9','USERINFO_6','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-14'),('FB_14','ENTITY_8','USERINFO_6','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-14'),('FB_15','ENTITY_3','USERINFO_5','{\"Digital\": \"false\", \"Individual\": \"false\", \"Organisation\": \"true\", \"Publish\": \"false\", \"alterName\": \"false\", \"alterType\": \"false\", \"bPlace\": \"false\", \"dPlace\": \"false\", \"eDate\": \"false\", \"eName\": \"false\", \"eTitle\": \"false\", \"feedback\": \"\", \"fullNote\": \"false\", \"function\": \"false\", \"resources\": \"false\", \"sDate\": \"false\", \"sumNote\": \"false\"}','2019-10-14'),('FB_16','ENTITY_20','USERINFO_6','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-14'),('FB_17','ENTITY_43','USERINFO_5','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-15'),('FB_18','ENTITY_41','USERINFO_5','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"\\\"false\\\"\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"false\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-15'),('FB_19','ENTITY_34','USERINFO_5','{\"Digital\": \"false\", \"Individual\": \"\\\"false\\\"\", \"Organisation\": \"\\\"false\\\"\", \"Publish\": \"\\\"false\\\"\", \"alterName\": \"false\", \"alterType\": \"false\", \"bPlace\": \"false\", \"dPlace\": \"false\", \"eDate\": \"false\", \"eName\": \"false\", \"eTitle\": \"false\", \"feedback\": \"\", \"fullNote\": \"false\", \"function\": \"false\", \"resources\": \"false\", \"sDate\": \"false\", \"sumNote\": \"false\"}','2019-10-15'),('FB_2','ENTITY_4','USERINFO_6','{\"Digital\": \"false\", \"Individual\": \"false\", \"Organisation\": \"\\\"false\\\"\", \"Publish\": \"\\\"false\\\"\", \"alterName\": \"false\", \"alterType\": \"true\", \"bPlace\": \"false\", \"dPlace\": \"false\", \"eDate\": \"false\", \"eName\": \"false\", \"eTitle\": \"false\", \"feedback\": \"\", \"fullNote\": \"false\", \"function\": \"true\", \"resources\": \"false\", \"sDate\": \"false\", \"sumNote\": \"false\"}','2019-10-14'),('FB_20','ENTITY_37','USERINFO_5','{\"Digital\": \"false\", \"Individual\": \"false\", \"Organisation\": \"false\", \"Publish\": \"false\", \"alterName\": \"false\", \"alterType\": \"false\", \"bPlace\": \"false\", \"dPlace\": \"false\", \"eDate\": \"false\", \"eName\": \"false\", \"eTitle\": \"false\", \"feedback\": \"\", \"fullNote\": \"false\", \"function\": \"false\", \"resources\": \"false\", \"sDate\": \"false\", \"sumNote\": \"false\"}','2019-10-15'),('FB_21','ENTITY_48','USERINFO_5','{\"Digital\": \"true\", \"Individual\": \"false\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-15'),('FB_22','ENTITY_46','USERINFO_5','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-15'),('FB_23','ENTITY_47','USERINFO_5','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-15'),('FB_24','ENTITY_45','USERINFO_5','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-15'),('FB_25','ENTITY_44','USERINFO_5','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-15'),('FB_26','ENTITY_33','USERINFO_5','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-15'),('FB_27','ENTITY_50','USERINFO_6','{\"Digital\": \"false\", \"Individual\": \"false\", \"Organisation\": \"false\", \"Publish\": \"false\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"false\", \"eDate\": \"false\", \"eName\": \"true\", \"eTitle\": \"false\", \"feedback\": \"\", \"fullNote\": \"false\", \"function\": \"false\", \"resources\": \"false\", \"sDate\": \"true\", \"sumNote\": \"false\"}','2019-10-15'),('FB_3','ENTITY_5','USERINFO_6','{\"Digital\": \"false\", \"Individual\": \"false\", \"Organisation\": \"false\", \"Publish\": \"false\", \"alterName\": \"false\", \"alterType\": \"false\", \"bPlace\": \"true\", \"dPlace\": \"false\", \"eDate\": \"false\", \"eName\": \"false\", \"eTitle\": \"false\", \"feedback\": \"\", \"fullNote\": \"false\", \"function\": \"false\", \"resources\": \"false\", \"sDate\": \"false\", \"sumNote\": \"false\"}','2019-10-14'),('FB_7','ENTITY_11','USERINFO_6','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-14'),('FB_8','ENTITY_2','USERINFO_6','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"true\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-14'),('FB_9','ENTITY_4','USERINFO_6','{\"Digital\": \"true\", \"Individual\": \"true\", \"Organisation\": \"true\", \"Publish\": \"true\", \"alterName\": \"true\", \"alterType\": \"true\", \"bPlace\": \"true\", \"dPlace\": \"true\", \"eDate\": \"true\", \"eName\": \"false\", \"eTitle\": \"true\", \"feedback\": \"\", \"fullNote\": \"true\", \"function\": \"true\", \"resources\": \"true\", \"sDate\": \"true\", \"sumNote\": \"true\"}','2019-10-14');
/*!40000 ALTER TABLE `Feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Message`
--

DROP TABLE IF EXISTS `Message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Message` (
  `MID` varchar(20) NOT NULL,
  `UID` varchar(40) DEFAULT NULL,
  `TUID` varchar(50) DEFAULT NULL,
  `MESSAGE` varchar(30) DEFAULT NULL,
  `TIME` varchar(20) DEFAULT NULL,
  `EID` varchar(40) DEFAULT NULL,
  `ISREAD` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Message`
--

LOCK TABLES `Message` WRITE;
/*!40000 ALTER TABLE `Message` DISABLE KEYS */;
INSERT INTO `Message` VALUES ('MSG_1',NULL,NULL,NULL,NULL,NULL,'7'),('MSG_2',NULL,NULL,NULL,NULL,NULL,'7'),('MSG_3',NULL,NULL,NULL,NULL,NULL,'1');
/*!40000 ALTER TABLE `Message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Occupation`
--

DROP TABLE IF EXISTS `Occupation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Occupation` (
  `OID` varchar(50) NOT NULL,
  `EID` varchar(50) DEFAULT NULL,
  `OCCUPATION` varchar(50) DEFAULT NULL,
  `OEVENT` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`OID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Occupation`
--

LOCK TABLES `Occupation` WRITE;
/*!40000 ALTER TABLE `Occupation` DISABLE KEYS */;
INSERT INTO `Occupation` VALUES ('OCC_1','ENTITY_1','Teacher',NULL),('OCC_10','ENTITY_12','Teacher',NULL),('OCC_12','ENTITY_14','Teacher',NULL),('OCC_15','ENTITY_17','Teacher',NULL),('OCC_16','ENTITY_19','Teacher',NULL),('OCC_17','ENTITY_28','Manager',NULL),('OCC_18','ENTITY_29','Teacher',NULL),('OCC_19','ENTITY_30','Teacher',NULL),('OCC_2','ENTITY_2','Manager',NULL),('OCC_20','ENTITY_30','Manager',NULL),('OCC_21','ENTITY_31','Teacher',NULL),('OCC_22','ENTITY_33','Teacher',NULL),('OCC_23','ENTITY_33','Manager',NULL),('OCC_24','ENTITY_34','Teacher',NULL),('OCC_25','ENTITY_41','Teacher',NULL),('OCC_26','ENTITY_43','Teacher',NULL),('OCC_27','ENTITY_44','Teacher',NULL),('OCC_28','ENTITY_45','Teacher',NULL),('OCC_29','ENTITY_46','Teacher',NULL),('OCC_3','ENTITY_3','Teacher',NULL),('OCC_30','ENTITY_48','Teacher',NULL),('OCC_31','ENTITY_49','Teacher',NULL),('OCC_5','ENTITY_6','Teacher',NULL),('OCC_6','ENTITY_8','Teacher',NULL),('OCC_7','ENTITY_9','Teacher',NULL),('OCC_8','ENTITY_10','Teacher',NULL),('OCC_9','ENTITY_11','Teacher',NULL);
/*!40000 ALTER TABLE `Occupation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PublicResourse`
--

DROP TABLE IF EXISTS `PublicResourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PublicResourse` (
  `PID` varchar(40) NOT NULL,
  `PR_Title` varchar(50) DEFAULT NULL,
  `PR_TYPE` varchar(50) DEFAULT NULL,
  `PR_URL` varchar(200) DEFAULT NULL,
  `EID` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PublicResourse`
--

LOCK TABLES `PublicResourse` WRITE;
/*!40000 ALTER TABLE `PublicResourse` DISABLE KEYS */;
INSERT INTO `PublicResourse` VALUES ('PR_1','w','dw','dw','ENTITY_1'),('PR_11','sad','sdasda','asd','ENTITY_17'),('PR_12','fewwe','fwef','fewf','ENTITY_29'),('PR_13','dqwd','dqwd','dqwd','ENTITY_31'),('PR_14','CDSC','CDS','CDS','ENTITY_33'),('PR_15','VF','FVDV','FD','ENTITY_34'),('PR_16','c\'d\'s','cdsc\'d','cdc\'d\'s\'v','ENTITY_35'),('PR_17','dqw','dwq','w','ENTITY_44'),('PR_18','casc','csac','scsa','ENTITY_45'),('PR_19','wqd','dqw','dwq','ENTITY_46'),('PR_2','dwe','dwed','dwe','ENTITY_2'),('PR_20','x z ',' x ','https://sss.com','ENTITY_48'),('PR_21','dwq','dwdq','https://sss.com','ENTITY_49'),('PR_3','gr','grg','rg','ENTITY_6'),('PR_4','ds','sd','ds','ENTITY_8'),('PR_5','csa','csa','cd','ENTITY_10'),('PR_6','das','dsad','sad','ENTITY_11'),('PR_7','sad','dasd','dsa','ENTITY_12'),('PR_8','edw','dewd','dewd','ENTITY_14');
/*!40000 ALTER TABLE `PublicResourse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Relationship`
--

DROP TABLE IF EXISTS `Relationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Relationship` (
  `RID` varchar(50) NOT NULL,
  `EID` varchar(50) DEFAULT NULL,
  `REID` varchar(50) DEFAULT NULL,
  `RELATIONSHIP` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`RID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Relationship`
--

LOCK TABLES `Relationship` WRITE;
/*!40000 ALTER TABLE `Relationship` DISABLE KEYS */;
INSERT INTO `Relationship` VALUES ('RELA_1','ENTITY_2','ENTITY_1','Associate - Associate'),('RELA_10','ENTITY_17','ENTITY_2','Affiliated organisation - Peak Body'),('RELA_11','ENTITY_18','ENTITY_2','Affiliated organisation - Peak Body'),('RELA_12','ENTITY_19','ENTITY_11','Aunt - Niece'),('RELA_13','ENTITY_29','ENTITY_6','Affiliated - Affiliated'),('RELA_14','ENTITY_30','ENTITY_6','Affiliated organisation - Peak Body'),('RELA_15','ENTITY_33','ENTITY_2','Aunt - Niece'),('RELA_16','ENTITY_34','ENTITY_2','Affiliated - Affiliated'),('RELA_17','ENTITY_35','ENTITY_2','Affiliated organisation - Peak Body'),('RELA_18','ENTITY_49','ENTITY_2','Aunt - Niece'),('RELA_19','ENTITY_49','ENTITY_2','Associate - Associate'),('RELA_2','ENTITY_6','ENTITY_1','Affiliated - Affiliated'),('RELA_20','ENTITY_49','ENTITY_2','Affiliated organisation - Peak Body'),('RELA_21','ENTITY_49','ENTITY_2','Affiliated organisation - Peak Body'),('RELA_3','ENTITY_6','ENTITY_1','Awarded - Awardee'),('RELA_4','ENTITY_10','ENTITY_7','Affiliated - Affiliated'),('RELA_9','ENTITY_17','ENTITY_2','Associate - Associate');
/*!40000 ALTER TABLE `Relationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserInfo`
--

DROP TABLE IF EXISTS `UserInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserInfo` (
  `UID` char(20) NOT NULL,
  `USERNAME` char(64) DEFAULT NULL,
  `EMAIL` char(254) DEFAULT NULL,
  `PASSPHRASE` char(64) DEFAULT NULL,
  `UROLE` char(30) DEFAULT NULL,
  `ADDRESS` char(100) DEFAULT NULL,
  `PHONE` char(100) DEFAULT NULL,
  `MOTIVATION` varchar(1000) DEFAULT NULL,
  `EXPERIENCE` varchar(1000) DEFAULT NULL,
  `UNAME` char(40) DEFAULT NULL,
  `UVS` char(1) DEFAULT NULL,
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserInfo`
--

LOCK TABLES `UserInfo` WRITE;
/*!40000 ALTER TABLE `UserInfo` DISABLE KEYS */;
INSERT INTO `UserInfo` VALUES ('USERINFO_10','knitsontrains','helen@helenmorgan.net','$2a$10$iBK679OzIM9DnEJclxzN8eh/0umLX9MS.mU7QL8kKSQBS9L75O0ie','Curator','12 Tyne St, Burwood VIC 3125','0383445383','Senior Research Fellow','','Helen Morgan','0'),('USERINFO_2','Lucy','liuxueling1013@gmail.com','$2a$10$fn4GFDCNG7UWBVps22pMduia8yCFtmH49i/EuKQ7IhLGioRxjAQMy','Contributor','North Melbourne','0468777776','Rich','','Xueling Liu','0'),('USERINFO_3','Susan','jianjingy@student.unimelb.edu.au','$2a$10$MlngmyklhhrWmy8.wk3Xtud4s0JGs3qebN4CUVLPbwxyH6hCKZ1ua','Manager','1','1234567890','1','','Susan','0'),('USERINFO_4','Jenny','xueling.liu@student.unimelb.edu.au','$2a$10$li/PJ0U/odRR1TXoBtyCdeO84BmOjIgVUifa8J0JvWRvF2PKz8FaW','Contributor','North Melbourne','0468777780','Rich','','Ling Liu','0'),('USERINFO_5','wdq','lwgonlwgon@gmail.com','$2a$10$DsKyjut8vUkuXYpdoDA0fesyEm/sfeUL6Nle.NSq6JmVNv0FWaBs6','0','dqwd','1111111111','wdqwd','','Yue Guo','0'),('USERINFO_6','Susan','yaojianjing@126.com','$2a$10$a3buxFqfn7cbygiIWvgFLuqwAX2AXawchhaO5FWlrwsVQDNX0Lpje','Manager','111','1234567890','11111','','sss','0'),('USERINFO_8','Zhao','jianpingzhao0@163.com','$2a$10$ZfJIXsw4KsvJVcMbhAjWDOFDt9V7nIWJx.Jjq/i.9VFupfxiYX77a','0','North Melbourne','0468777780','Professional Math Teacher','','Jianping Zhao','0'),('USERINFO_9','dqw','gyprodeve@gmail.com','$2a$10$2BKNPcZOqXAHFZfaoVqv1uvv0YsoMGe6npom5oxqBSdKlbcTLxoo6','Curator','wssqw','111-111-1111','fewf','','Yue Guo','0');
/*!40000 ALTER TABLE `UserInfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-15 14:12:29
