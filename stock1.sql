SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`item_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`item_type` ;

CREATE TABLE IF NOT EXISTS `mydb`.`item_type` (
  `iditem_type` INT NOT NULL,
  `type` VARCHAR(45) NULL,
  PRIMARY KEY (`iditem_type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`item` ;

CREATE TABLE IF NOT EXISTS `mydb`.`item` (
  `iditem` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `serial_number` VARCHAR(250) NULL,
  `quantity` INT NULL,
  `remainder` INT NULL,
  `description` VARCHAR(250) NULL,
  `item_type_iditem_type` INT NOT NULL,
  PRIMARY KEY (`iditem`),
  INDEX `fk_item_item_type1_idx` (`item_type_iditem_type` ASC),
  CONSTRAINT `fk_item_item_type1`
    FOREIGN KEY (`item_type_iditem_type`)
    REFERENCES `mydb`.`item_type` (`iditem_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`departments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`departments` ;

CREATE TABLE IF NOT EXISTS `mydb`.`departments` (
  `iddepartments` INT NOT NULL,
  `namel` VARCHAR(45) NULL,
  PRIMARY KEY (`iddepartments`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Employ`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Employ` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Employ` (
  `idlogin` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `gender` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `departments_iddepartments` INT NOT NULL,
  `phoneNumber` VARCHAR(45) NULL,
  `departments_iddepartments1` INT NOT NULL,
  PRIMARY KEY (`idlogin`),
  INDEX `fk_Employ_departments1_idx` (`departments_iddepartments1` ASC),
  CONSTRAINT `fk_Employ_departments1`
    FOREIGN KEY (`departments_iddepartments1`)
    REFERENCES `mydb`.`departments` (`iddepartments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`orders` ;

CREATE TABLE IF NOT EXISTS `mydb`.`orders` (
  `idtable1` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `date` DATE NULL,
  `discription` VARCHAR(45) NULL,
  `departments_iddepartments` INT NOT NULL,
  `requestEmploye` INT NOT NULL,
  `Employ_stocks` INT NOT NULL,
  PRIMARY KEY (`idtable1`),
  INDEX `fk_orders_Employ1_idx` (`requestEmploye` ASC),
  INDEX `fk_orders_Employ2_idx` (`Employ_stocks` ASC),
  CONSTRAINT `fk_orders_Employ1`
    FOREIGN KEY (`requestEmploye`)
    REFERENCES `mydb`.`Employ` (`idlogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_Employ2`
    FOREIGN KEY (`Employ_stocks`)
    REFERENCES `mydb`.`Employ` (`idlogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`supplier`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`supplier` ;

CREATE TABLE IF NOT EXISTS `mydb`.`supplier` (
  `idelmowared` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `quantity` VARCHAR(45) NULL,
  `companyName` VARCHAR(45) NULL,
  PRIMARY KEY (`idelmowared`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`supplier_has_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`supplier_has_item` ;

CREATE TABLE IF NOT EXISTS `mydb`.`supplier_has_item` (
  `idsupplier` INT NOT NULL,
  `iditem` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`iditem`, `idsupplier`),
  INDEX `fk_Elmowared_has_item_item1_idx` (`iditem` ASC),
  INDEX `fk_Elmowared_has_item_Elmowared1_idx` (`idsupplier` ASC),
  CONSTRAINT `fk_Elmowared_has_item_Elmowared1`
    FOREIGN KEY (`idsupplier`)
    REFERENCES `mydb`.`supplier` (`idelmowared`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Elmowared_has_item_item1`
    FOREIGN KEY (`iditem`)
    REFERENCES `mydb`.`item` (`iditem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
