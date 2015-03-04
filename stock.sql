-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 26, 2015 at 06:34 PM
-- Server version: 5.5.41-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

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
(1, 'قسم النخاز', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(2, 'قسم المخازن', '2015-02-03 09:11:56', NULL, 1);

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
  `id_item_info_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `remainder` int(11) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `item_type_iditem_type` int(11) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`iditem`),
  KEY `fk_item_item_type1_idx` (`item_type_iditem_type`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`iditem`, `id_item_info_id`, `quantity`, `remainder`, `description`, `item_type_iditem_type`, `create_time`, `update_time`, `deleted`) VALUES
(1, 1, 4, 135, 'win8', 1, '2015-02-22 08:57:58', NULL, 1),
(2, 2, 0, 2, 'win', 1, '2015-02-22 08:57:58', NULL, 1),
(3, 3, 10, 10, 'win7,ram8', 1, '2015-02-22 09:02:46', NULL, 1),
(4, 4, 9, 9, 'hdd', 1, '2015-02-22 09:06:36', NULL, 0),
(5, 5, 9, 9, 'hdd', 1, '2015-02-22 09:08:36', NULL, 0),
(6, 6, 77, 77, 'gh', 1, '2015-02-22 09:17:29', NULL, 1),
(7, 7, 8, 8, 'hh', 1, '2015-02-22 09:18:21', NULL, 1),
(8, 8, 3, 3, 'متحرك', 4, '2015-02-22 18:16:26', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `item_info`
--

CREATE TABLE IF NOT EXISTS `item_info` (
  `item_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Barcode` int(12) DEFAULT NULL,
  PRIMARY KEY (`item_info_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `item_info`
--

INSERT INTO `item_info` (`item_info_id`, `Name`, `Barcode`) VALUES
(1, 'dell', 5),
(2, 'HP 2030', 5),
(3, 'sony', 100),
(4, 'sumsung', 200),
(5, 'sumsung', 200),
(6, 'fujtso', 78787),
(7, 'dfd', 99),
(8, 'كرسي', 2323);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `item_type`
--

INSERT INTO `item_type` (`iditem_type`, `type`, `create_time`, `update_time`, `deleted`) VALUES
(1, 'جهاز كميوتر', '2015-02-17 12:09:07', NULL, 1),
(2, 'قرطاسية', '2015-02-17 12:09:07', NULL, 1),
(3, 'طابعات', '2015-02-20 12:40:38', NULL, 1),
(4, 'اثاث', '2015-02-20 16:51:04', NULL, 1),
(5, 'مواد غدائية', '2015-02-23 17:55:38', NULL, 1);

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
  `name` varchar(250) DEFAULT NULL,
  `companyName` varchar(45) DEFAULT NULL,
  `Email` varchar(250) NOT NULL,
  `mobail` varchar(250) NOT NULL,
  `deleted` int(1) DEFAULT '1',
  PRIMARY KEY (`idsupplier`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`idsupplier`, `name`, `companyName`, `Email`, `mobail`, `deleted`) VALUES
(1, 'علاء الدين', 'coders', 'alaaden3000@yahoo.com', '0926487264', 1),
(2, 'مهند', 'القصر سيتي', 'mohammed@yahoo.com', '0926512382', 1),
(3, 'محمد', 'camp', 'info@naga.com', '0926512382', 0),
(4, 'عبدالله', 'لانعلم', 'abdalu@info.com', '84735923', 1),
(5, 'Aladdin', 'jk', 'alaaden3000@gmail.com', '763237', 0),
(6, 'Aladdin A Suni', 'lksbdvkjsdk', 'alaaden3000@gmail.com', '899838', 1),
(7, 'فاروق ولد الشعبة', 'الطريق', 'info@info.com', '836239', 1),
(8, 'Aladdin A Suni', 'jk', 'alaaden3000@gmail.com', '84735923', 0),
(9, 'Aladdin A Suni', 'الطريق', 'alaaden3000@gmail.com', '763237', 0),
(10, 'Aladdin', 'jk', 'alaaden3000@gmail.com', '7234783478', 0),
(11, 'علاء', '', '', '', 0),
(12, '', '', '', '', 0),
(13, 'kjsdbjkv', '', '', '', 0),
(14, 'lkdfnkl', 'kjsdbjkvs', '', '', 0),
(15, 'kjsdkjvjskdkjs', 'kjzdbvjkskakjbcc', 'kjdsvkjs', '', 0),
(16, '', '', '', '', 0),
(17, '', '', '', '23984239849832749234', 0),
(18, '', '', '', '', 0),
(19, 'flkblkrml', 'lkdckd', 'lsv kdl', '', 0),
(20, 'عبدالعظيم فرج', 'ناقا', 'abdo@info.com', '9823498239023', 1),
(21, 'عبدالله الامير', 'في الشارع', 'abdooooo@indo.com', '4589327230', 1),
(22, 'حمزة الكوت', 'بالتريس', 'hamaz@yahoo.com', '92475983409230', 1),
(23, 'احمد الفيتوري', 'الناقا', 'ahmed@naga.com', '9238093209', 1),
(24, 'فيصل رحيل', 'شدوه في راس حسن', 'faisel@naga.com', '957043023432', 1),
(25, 'test', 'test', 'test@naga.com', '0938093280', 1),
(26, '', '', '', '', 0),
(27, '', '', '', '', 0),
(28, '', '', '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `supplier_has_item`
--

CREATE TABLE IF NOT EXISTS `supplier_has_item` (
  `supplier_idsupplier` int(11) NOT NULL,
  `item_iditem` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`item_iditem`,`supplier_idsupplier`),
  KEY `fk_supplier_has_item_item1_idx` (`item_iditem`),
  KEY `fk_supplier_has_item_supplier1_idx` (`supplier_idsupplier`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `supplier_has_item`
--

INSERT INTO `supplier_has_item` (`supplier_idsupplier`, `item_iditem`, `quantity`) VALUES
(2, 1, 5),
(7, 2, 5),
(6, 3, 7),
(6, 6, 77),
(1, 7, 8),
(7, 8, 3);

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
  ADD CONSTRAINT `fk_supplier_has_item_item1` FOREIGN KEY (`item_iditem`) REFERENCES `item_info` (`item_info_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_supplier_has_item_supplier1` FOREIGN KEY (`supplier_idsupplier`) REFERENCES `supplier` (`idsupplier`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
