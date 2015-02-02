SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `stock` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `stock` ;

-- -----------------------------------------------------
-- Table `stock`.`item_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`item_type` ;

CREATE TABLE IF NOT EXISTS `stock`.`item_type` (
  `iditem_type` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(250) NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `deleted` TINYINT NULL DEFAULT 1,
  PRIMARY KEY (`iditem_type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stock`.`item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`item` ;

CREATE TABLE IF NOT EXISTS `stock`.`item` (
  `iditem` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `serial_number` VARCHAR(250) NULL,
  `quantity` INT NULL,
  `remainder` INT NULL,
  `description` VARCHAR(250) NULL,
  `item_type_iditem_type` INT NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `deleted` TINYINT NULL,
  PRIMARY KEY (`iditem`),
  INDEX `fk_item_item_type1_idx` (`item_type_iditem_type` ASC),
  CONSTRAINT `fk_item_item_type1`
    FOREIGN KEY (`item_type_iditem_type`)
    REFERENCES `stock`.`item_type` (`iditem_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stock`.`department`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`department` ;

CREATE TABLE IF NOT EXISTS `stock`.`department` (
  `iddepartments` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `deleted` TINYINT NULL,
  PRIMARY KEY (`iddepartments`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stock`.`employee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`employee` ;

CREATE TABLE IF NOT EXISTS `stock`.`employee` (
  `idemployee` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NULL,
  `email` VARCHAR(250) NULL,
  `username` VARCHAR(500) NULL,
  `password` VARCHAR(500) NULL,
  `phoneNumber` VARCHAR(45) NULL,
  `iddepartment` INT NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `deleted` TINYINT NULL DEFAULT 1,
  `salt` VARCHAR(500) NULL,
  `level` TINYINT NULL,
  PRIMARY KEY (`idemployee`),
  INDEX `fk_Employ_departments1_idx` (`iddepartment` ASC),
  CONSTRAINT `fk_Employ_departments1`
    FOREIGN KEY (`iddepartment`)
    REFERENCES `stock`.`department` (`iddepartments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stock`.`order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`order` ;

CREATE TABLE IF NOT EXISTS `stock`.`order` (
  `idtable1` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `date` DATE NULL,
  `discription` VARCHAR(45) NULL,
  `departments_iddepartments` INT NOT NULL,
  `requestEmploye` INT NOT NULL,
  `Employ_stocks` INT NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `deleted` TINYINT NULL DEFAULT 1,
  PRIMARY KEY (`idtable1`),
  INDEX `fk_orders_Employ1_idx` (`requestEmploye` ASC),
  INDEX `fk_orders_Employ2_idx` (`Employ_stocks` ASC),
  CONSTRAINT `fk_orders_Employ1`
    FOREIGN KEY (`requestEmploye`)
    REFERENCES `stock`.`employee` (`idemployee`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_Employ2`
    FOREIGN KEY (`Employ_stocks`)
    REFERENCES `stock`.`employee` (`idemployee`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stock`.`supplier`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`supplier` ;

CREATE TABLE IF NOT EXISTS `stock`.`supplier` (
  `idsupplier` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NULL,
  `quantity` VARCHAR(45) NULL,
  `companyName` VARCHAR(45) NULL,
  `deleted` TINYINT NULL,
  PRIMARY KEY (`idsupplier`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stock`.`supplier_has_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`supplier_has_item` ;

CREATE TABLE IF NOT EXISTS `stock`.`supplier_has_item` (
  `supplier_idsupplier` INT NOT NULL,
  `item_iditem` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`item_iditem`, `supplier_idsupplier`),
  INDEX `fk_supplier_has_item_item1_idx` (`item_iditem` ASC),
  INDEX `fk_supplier_has_item_supplier1_idx` (`supplier_idsupplier` ASC),
  CONSTRAINT `fk_supplier_has_item_supplier1`
    FOREIGN KEY (`supplier_idsupplier`)
    REFERENCES `stock`.`supplier` (`idsupplier`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_supplier_has_item_item1`
    FOREIGN KEY (`item_iditem`)
    REFERENCES `stock`.`item` (`iditem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
