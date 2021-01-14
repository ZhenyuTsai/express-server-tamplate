/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : mydb

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2021-01-14 16:25:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dep
-- ----------------------------
DROP TABLE IF EXISTS `dep`;
CREATE TABLE `dep` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` int(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dep
-- ----------------------------
INSERT INTO `dep` VALUES ('1', '20', '娜可露露框架', '12');
INSERT INTO `dep` VALUES ('2', '50', '尽快了解', '50');
INSERT INTO `dep` VALUES ('3', '100', '你咋了', '80');
INSERT INTO `dep` VALUES ('4', '200', '时杰是傻叉', '66.66');
INSERT INTO `dep` VALUES ('5', '812', '用户测试', '53.6');
INSERT INTO `dep` VALUES ('6', '1010', '用户不会用', '64.2');
INSERT INTO `dep` VALUES ('7', '2019', '新型肺炎', '34.1');
INSERT INTO `dep` VALUES ('8', '2020', '世界末日', '95.5');
INSERT INTO `dep` VALUES ('9', '1026', '你你你', '88.8');
INSERT INTO `dep` VALUES ('10', '220', '拉开距离科技', '99.9');
INSERT INTO `dep` VALUES ('11', '555', '深圳智宏科技有限公司', '88.88');
INSERT INTO `dep` VALUES ('12', '1231', '设积极聚隆科技来看', '77.23');
INSERT INTO `dep` VALUES ('13', '5555', '尽快了解开机快了', '223.66');
INSERT INTO `dep` VALUES ('14', '3789', '聚隆科技来看', '50.1');
INSERT INTO `dep` VALUES ('15', '5', '空间会尽快了', '10');
INSERT INTO `dep` VALUES ('16', '4', '康乐街离开', '8');

-- ----------------------------
-- Table structure for nav
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav` (
  `navId` int(20) NOT NULL AUTO_INCREMENT,
  `rolesName` varchar(255) DEFAULT NULL,
  `parent` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `children` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`navId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nav
-- ----------------------------
INSERT INTO `nav` VALUES ('1', 'admin', null, '讲师管理', '/train/lecturer', 'el-icon-user', null);
INSERT INTO `nav` VALUES ('2', 'admin', '讲师管理', '讲师维护', '/train/lecturer/maintain', 'el-icon-first-aid-kit', null);
INSERT INTO `nav` VALUES ('3', 'admin', '讲师管理', '讲师评级', '/train/lecturer/rating', 'el-icon-user-solid', null);
INSERT INTO `nav` VALUES ('4', 'admin', '讲师维护', '编辑讲师', '/train/lecturer/maintain/edit', 'el-icon-first-aid-kit', null);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `rolesId` int(11) NOT NULL AUTO_INCREMENT,
  `rolesName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rolesId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of roles
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0', 'admin', 'admin', '1', '3212321', 'eamil@foxmail.com', '114114114', 'd');
INSERT INTO `user` VALUES ('1', 'root', 'root', '2', '654654', 'zhenyutsai@foxmail.com', '18352507138', 'd');
INSERT INTO `user` VALUES ('16', '002598', '888888', 'dd', 'das', '', 'dd', 'dd');
INSERT INTO `user` VALUES ('17', '002598d', '888888', 'dd', 'das', '', 'dd', 'dd');
INSERT INTO `user` VALUES ('10', 'root', '798789879', 'ddd', 'ddd', '', 'adsa', 'dd');
INSERT INTO `user` VALUES ('19', 'testkk', 'testkk', '2', '789978987', '465465654@qq.com', '111111', '77777');
INSERT INTO `user` VALUES ('18', 'my', 'my', '1', '20200122', '', 'ddd', '5666565');
