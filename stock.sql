-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 08, 2015 at 06:42 PM
-- Server version: 5.5.40-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.5

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`idemployee`, `name`, `email`, `username`, `password`, `phoneNumber`, `iddepartment`, `create_time`, `update_time`, `deleted`, `salt`, `level`) VALUES
(1, 'abdullah abdulladem elamir', 'abdullah.el_ameer@yahoo.com', 'abdo', '123', '33333', 1, '2015-02-03 09:30:14', NULL, 1, 'dsfsadf', 2),
(2, 'ahmeed', 'ahmeed@yahoo.com', 'ahmeed', '123', '092', 2, '2015-02-26 17:33:42', NULL, 1, NULL, 1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`iditem`, `id_item_info_id`, `quantity`, `remainder`, `description`, `item_type_iditem_type`, `create_time`, `update_time`, `deleted`) VALUES
(9, 9, 4, 26, 'krsd,ds', 6, '2015-02-28 08:30:08', NULL, 0),
(10, 10, 3, 33, 'ssffs', 6, '2015-02-28 08:31:11', NULL, 1),
(11, 11, 5, 35, 'erjwelsd', 6, '2015-02-28 08:34:34', NULL, 1),
(12, 12, 33, 48, 'kfdlsdfk', 6, '2015-02-28 11:36:59', NULL, 1),
(13, 13, 5, 5, 'اهلا وسهلا', 6, '2015-03-04 07:45:03', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `item_info`
--

CREATE TABLE IF NOT EXISTS `item_info` (
  `item_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Barcode` int(12) DEFAULT NULL,
  PRIMARY KEY (`item_info_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `item_info`
--

INSERT INTO `item_info` (`item_info_id`, `Name`, `Barcode`) VALUES
(9, 'dell', 2332),
(10, 'hp', 34),
(11, 'sony vaio', 34),
(12, 'mac', 342),
(13, 'toshiba', 4344343);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `item_type`
--

INSERT INTO `item_type` (`iditem_type`, `type`, `create_time`, `update_time`, `deleted`) VALUES
(6, 'جهاز كمبيوتر', '2015-02-28 08:28:31', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `idorder` int(11) NOT NULL AUTO_INCREMENT,
  `accepted` int(11) NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  `discription` varchar(45) DEFAULT NULL,
  `requestEmploye` int(11) NOT NULL,
  `Employ_stocks` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`idorder`),
  KEY `fk_orders_Employ1_idx` (`requestEmploye`),
  KEY `fk_orders_Employ2_idx` (`Employ_stocks`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`idorder`, `accepted`, `date`, `discription`, `requestEmploye`, `Employ_stocks`, `create_time`, `update_time`, `deleted`) VALUES
(1, 0, NULL, 'jlwesklksd', 1, 1, '2015-02-26 17:32:24', NULL, 0),
(2, 0, NULL, '         klsdklksld', 1, 1, '2015-02-26 17:32:40', NULL, 0),
(3, 1, NULL, '         kkerdfk', 2, 2, '2015-02-26 17:35:59', NULL, 0),
(4, 0, NULL, '         اهلا وسهلا', 2, 1, '2015-02-28 16:02:44', NULL, 0),
(5, 0, NULL, '        ldfkkdf', 1, 1, '2015-02-28 21:40:02', NULL, 0),
(6, 1, NULL, '         skksks', 1, 1, '2015-02-28 21:48:46', NULL, 0),
(7, 0, NULL, '         ss', 1, 1, '2015-02-28 22:07:02', NULL, 0),
(8, 1, NULL, '         jujj', 1, 1, '2015-03-01 09:07:45', NULL, 0),
(9, 0, NULL, 'jdfjfdjjdfkjadfjadfkjadfkjafkjadfjkkadfkj', 2, 1, '2015-03-01 09:11:17', NULL, 1),
(10, 0, NULL, '         jddddddddddddddddddddddddddddddddddd', 1, 1, '2015-03-01 09:22:27', NULL, 0),
(11, 0, NULL, '         dfalfldad;flladfl;ladf;lffffffffffff', 1, 1, '2015-03-01 09:23:14', NULL, 1),
(12, 0, NULL, '         jfa,kjsadsfkjkjsdkjkaslfdjjasdfhasdf', 1, 1, '2015-03-01 09:24:14', NULL, 1),
(13, 0, NULL, '         sss', 1, 1, '2015-03-01 09:28:46', NULL, 1),
(14, 0, NULL, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', 1, 1, '2015-03-01 09:32:00', NULL, 0),
(15, 0, NULL, 'eeeeeeeeeeeeeeeeeeee', 1, 1, '2015-03-01 09:32:44', NULL, 0),
(16, 0, NULL, 'eeeeeeeeeeeeeeeeeeeeeeeee', 1, 1, '2015-03-01 09:35:22', NULL, 0),
(17, 0, NULL, 'kkkkk', 2, 1, '2015-03-01 09:54:41', NULL, 0),
(18, 0, NULL, 'lllllllllllllllllllllllll', 1, 1, '2015-03-01 09:54:59', NULL, 0),
(19, 0, NULL, 'ghhj', 2, 1, '2015-03-01 09:55:15', NULL, 0),
(20, 0, NULL, '      kkllkl   gg', 1, 1, '2015-03-01 09:55:27', NULL, 0),
(21, 1, NULL, 'fffffffffffffffffffffffffffffffffffffff', 2, 1, '2015-03-01 09:55:39', NULL, 0),
(22, 1, NULL, 'qqq', 2, 2, '2015-03-01 16:39:39', NULL, 0),
(23, 0, NULL, NULL, 1, 1, '2015-03-03 10:34:45', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_has_item`
--

CREATE TABLE IF NOT EXISTS `order_has_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `iditem` int(11) NOT NULL,
  `idorder` int(11) NOT NULL,
  `description` varchar(500) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=61 ;

--
-- Dumping data for table `order_has_item`
--

INSERT INTO `order_has_item` (`id`, `quantity`, `create_time`, `iditem`, `idorder`, `description`) VALUES
(5, 19, '2015-02-28 10:33:35', 9, 3, 'gjgj'),
(6, 16, '2015-02-28 10:34:44', 11, 3, 'jrsdkjfj'),
(7, 19, '2015-02-28 11:25:01', 10, 3, '          k k kck'),
(11, 8, '2015-02-28 16:01:58', 12, 3, ' mackentoch'),
(12, 3, '2015-02-28 22:10:26', 9, 6, '         ccc'),
(13, 5, '2015-03-01 09:08:23', 10, 8, '         jjkkjk'),
(14, 2, '2015-03-01 16:33:34', 10, 21, '         dccc'),
(15, 3, '2015-03-01 20:59:42', 9, 22, '         hjht'),
(16, 5, '2015-03-01 21:04:50', 12, 20, '         gvgg'),
(17, 7, '2015-03-01 22:45:33', 11, 20, '         ggg'),
(18, 3, '2015-03-01 23:19:03', 9, 19, '         ccc'),
(19, 7, '2015-03-01 23:30:33', 10, 18, '         vfgg'),
(20, 5, '2015-03-02 11:30:10', 10, 19, '         ,,,'),
(21, 8, '2015-03-03 11:06:08', 9, 23, '         ddd'),
(22, 13, '2015-03-03 11:07:41', 10, 23, 'ccc'),
(23, 10, '2015-03-04 07:46:08', 13, 23, '     ????'),
(24, 5, '2015-03-05 19:26:06', 12, 23, '         Hbdbbz\r\n'),
(25, 3, '2015-03-07 13:08:31', 10, 23, '         kkk'),
(26, 3, '2015-03-07 13:08:55', 10, 23, '         nnn'),
(27, 4, '2015-03-07 13:13:41', 10, 23, '         mmm'),
(28, 4, '2015-03-07 13:13:55', 10, 23, '         mm'),
(29, 4, '2015-03-07 13:16:25', 10, 23, '         v vvv'),
(30, 17, '2015-03-07 13:18:29', 10, 16, '         kkk'),
(46, 3, '2015-03-08 08:08:56', 10, 15, '         ccc'),
(60, 8, '2015-03-08 08:52:25', 10, 13, '         jrtkj');

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
(1, 'علاء الدين', 'coders', 'alaaden3000@yahoo.com', '2222', 1),
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `supplier_has_item`
--

INSERT INTO `supplier_has_item` (`supplier_idsupplier`, `item_iditem`, `quantity`) VALUES
(2, 1, 5),
(7, 2, 5),
(6, 3, 7),
(6, 6, 77),
(1, 7, 8),
(7, 8, 3),
(1, 13, 5);

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
