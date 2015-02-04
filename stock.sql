-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
<<<<<<< HEAD
-- 
=======
--
>>>>>>> 60299394bae580e9838cdceebd250d4aa9cae5f6
-- Host: localhost
-- Generation Time: Feb 04, 2015 at 07:16 PM
-- Server version: 5.5.40-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.5
<<<<<<< HEAD
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
=======

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


>>>>>>> 60299394bae580e9838cdceebd250d4aa9cae5f6
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
<<<<<<< HEAD
-- 
-- Database: `stock`
-- 
-- --------------------------------------------------------
-- 
-- Table structure for table `department`
-- 
CREATE TABLE IF NOT EXISTS `department` (
`iddepartments` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(250) DEFAULT NULL,
`create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`update_time` datetime DEFAULT NULL,
`deleted` tinyint(4) DEFAULT NULL,
PRIMARY KEY (`iddepartments`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;
-- 
-- Dumping data for table `department`
-- 
INSERT INTO `department` (`iddepartments`, `name`, `create_time`, `update_time`, `deleted`) VALUES
(1, 'قسم النخاز', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'قسم المخازن', '2015-02-03 09:11:56', NULL, NULL);
-- --------------------------------------------------------
-- 
-- Table structure for table `employee`
-- 
CREATE TABLE IF NOT EXISTS `employee` (
`idemployee` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(250) DEFAULT NULL,
`email` varchar(250) DEFAULT NULL,
`username` varchar(500) DEFAULT NULL,
`password` varchar(500) DEFAULT NULL,
`phoneNumber` varchar(45) DEFAULT NULL,
`iddepartment` int(11) NOT NULL,
`create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`update_time` datetime DEFAULT NULL,
`deleted` tinyint(4) DEFAULT '1',
`salt` varchar(500) DEFAULT NULL,
`level` tinyint(4) DEFAULT NULL,
PRIMARY KEY (`idemployee`),
KEY `fk_Employ_departments1_idx` (`iddepartment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;
-- 
-- Dumping data for table `employee`
-- 
INSERT INTO `employee` (`idemployee`, `name`, `email`, `username`, `password`, `phoneNumber`, `iddepartment`, `create_time`, `update_time`, `deleted`, `salt`, `level`) VALUES
(1, 'abdullah ', 'abdullah.el_ameer@yahoo.com', 'abdo', '123', '33333', 1, '2015-02-03 09:30:14', NULL, 1, 'dsfsadf', 2);
-- --------------------------------------------------------
-- 
-- Table structure for table `item`
-- 
CREATE TABLE IF NOT EXISTS `item` (
`iditem` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(45) DEFAULT NULL,
`serial_number` varchar(250) DEFAULT NULL,
`quantity` int(11) DEFAULT NULL,
`remainder` int(11) DEFAULT NULL,
`description` varchar(250) DEFAULT NULL,
`item_type_iditem_type` int(11) NOT NULL,
`create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
`update_time` timestamp NULL DEFAULT NULL,
`deleted` tinyint(4) DEFAULT NULL,
PRIMARY KEY (`iditem`),
KEY `fk_item_item_type1_idx` (`item_type_iditem_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
-- --------------------------------------------------------
-- 
-- Table structure for table `item_type`
-- 
CREATE TABLE IF NOT EXISTS `item_type` (
`iditem_type` int(11) NOT NULL AUTO_INCREMENT,
`type` varchar(250) DEFAULT NULL,
`create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`update_time` datetime DEFAULT NULL,
`deleted` tinyint(4) DEFAULT '1',
PRIMARY KEY (`iditem_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
-- --------------------------------------------------------
-- 
-- Table structure for table `order`
-- 
CREATE TABLE IF NOT EXISTS `order` (
`idtable1` int(11) NOT NULL AUTO_INCREMENT,
`quantity` int(11) DEFAULT NULL,
`date` date DEFAULT NULL,
`discription` varchar(45) DEFAULT NULL,
`departments_iddepartments` int(11) NOT NULL,
`requestEmploye` int(11) NOT NULL,
`Employ_stocks` int(11) NOT NULL,
`create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`update_time` datetime DEFAULT NULL,
`deleted` tinyint(4) DEFAULT '1',
PRIMARY KEY (`idtable1`),
KEY `fk_orders_Employ1_idx` (`requestEmploye`),
KEY `fk_orders_Employ2_idx` (`Employ_stocks`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
-- --------------------------------------------------------
-- 
-- Table structure for table `supplier`
-- 
CREATE TABLE IF NOT EXISTS `supplier` (
`idsupplier` int(11) NOT NULL AUTO_INCREMENT,
`Email` varchar(250) NOT NULL,
`name` varchar(250) DEFAULT NULL,
`quantity` varchar(45) DEFAULT NULL,
`companyName` varchar(45) DEFAULT NULL,
`deleted` tinyint(4) DEFAULT NULL,
`mobail` varchar(250) NOT NULL,
PRIMARY KEY (`idsupplier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
-- --------------------------------------------------------
-- 
-- Table structure for table `supplier_has_item`
-- 
CREATE TABLE IF NOT EXISTS `supplier_has_item` (
`supplier_idsupplier` int(11) NOT NULL,
`item_iditem` int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`item_iditem`,`supplier_idsupplier`),
KEY `fk_supplier_has_item_item1_idx` (`item_iditem`),
KEY `fk_supplier_has_item_supplier1_idx` (`supplier_idsupplier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
-- 
-- Constraints for dumped tables
-- 
-- 
-- Constraints for table `employee`
-- 
ALTER TABLE `employee`
ADD CONSTRAINT `fk_Employ_departments1` FOREIGN KEY (`iddepartment`) REFERENCES `department` (`iddepartments`) ON DELETE NO ACTION ON UPDATE NO ACTION;
-- 
-- Constraints for table `item`
-- 
ALTER TABLE `item`
ADD CONSTRAINT `fk_item_item_type1` FOREIGN KEY (`item_type_iditem_type`) REFERENCES `item_type` (`iditem_type`) ON DELETE NO ACTION ON UPDATE NO ACTION;
-- 
-- Constraints for table `order`
-- 
ALTER TABLE `order`
ADD CONSTRAINT `fk_orders_Employ1` FOREIGN KEY (`requestEmploye`) REFERENCES `employee` (`idemployee`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_orders_Employ2` FOREIGN KEY (`Employ_stocks`) REFERENCES `employee` (`idemployee`) ON DELETE NO ACTION ON UPDATE NO ACTION;
-- 
-- Constraints for table `supplier_has_item`
-- 
ALTER TABLE `supplier_has_item`
ADD CONSTRAINT `fk_supplier_has_item_item1` FOREIGN KEY (`item_iditem`) REFERENCES `item` (`iditem`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_supplier_has_item_supplier1` FOREIGN KEY (`supplier_idsupplier`) REFERENCES `supplier` (`idsupplier`) ON DELETE NO ACTION ON UPDATE NO ACTION;
=======

--
-- Database: `stock`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `iddepartments` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`iddepartments`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`iddepartments`, `name`, `create_time`, `update_time`, `deleted`) VALUES
(1, 'قسم النخاز', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'قسم المخازن', '2015-02-03 09:11:56', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE IF NOT EXISTS `employee` (
  `idemployee` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `username` varchar(500) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `iddepartment` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT '1',
  `salt` varchar(500) DEFAULT NULL,
  `level` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`idemployee`),
  KEY `fk_Employ_departments1_idx` (`iddepartment`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`idemployee`, `name`, `email`, `username`, `password`, `phoneNumber`, `iddepartment`, `create_time`, `update_time`, `deleted`, `salt`, `level`) VALUES
(1, 'abdullah ', 'abdullah.el_ameer@yahoo.com', 'abdo', '123', '33333', 1, '2015-02-03 09:30:14', NULL, 1, 'dsfsadf', 2);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `iditem` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `serial_number` varchar(250) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `remainder` int(11) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `item_type_iditem_type` int(11) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`iditem`),
  KEY `fk_item_item_type1_idx` (`item_type_iditem_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `item_type`
--

CREATE TABLE IF NOT EXISTS `item_type` (
  `iditem_type` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(250) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`iditem_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `idtable1` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `discription` varchar(45) DEFAULT NULL,
  `departments_iddepartments` int(11) NOT NULL,
  `requestEmploye` int(11) NOT NULL,
  `Employ_stocks` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`idtable1`),
  KEY `fk_orders_Employ1_idx` (`requestEmploye`),
  KEY `fk_orders_Employ2_idx` (`Employ_stocks`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE IF NOT EXISTS `supplier` (
  `idsupplier` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(250) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  `companyName` varchar(45) DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT NULL,
  `mobail` varchar(250) NOT NULL,
  PRIMARY KEY (`idsupplier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `supplier_has_item`
--

CREATE TABLE IF NOT EXISTS `supplier_has_item` (
  `supplier_idsupplier` int(11) NOT NULL,
  `item_iditem` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`item_iditem`,`supplier_idsupplier`),
  KEY `fk_supplier_has_item_item1_idx` (`item_iditem`),
  KEY `fk_supplier_has_item_supplier1_idx` (`supplier_idsupplier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fk_Employ_departments1` FOREIGN KEY (`iddepartment`) REFERENCES `department` (`iddepartments`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `fk_item_item_type1` FOREIGN KEY (`item_type_iditem_type`) REFERENCES `item_type` (`iditem_type`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `fk_orders_Employ1` FOREIGN KEY (`requestEmploye`) REFERENCES `employee` (`idemployee`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orders_Employ2` FOREIGN KEY (`Employ_stocks`) REFERENCES `employee` (`idemployee`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `supplier_has_item`
--
ALTER TABLE `supplier_has_item`
  ADD CONSTRAINT `fk_supplier_has_item_item1` FOREIGN KEY (`item_iditem`) REFERENCES `item` (`iditem`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_supplier_has_item_supplier1` FOREIGN KEY (`supplier_idsupplier`) REFERENCES `supplier` (`idsupplier`) ON DELETE NO ACTION ON UPDATE NO ACTION;

>>>>>>> 60299394bae580e9838cdceebd250d4aa9cae5f6
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
