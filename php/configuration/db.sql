CREATE TABLE `alphacode`.`contacts` (
    `c_id` INT NOT NULL AUTO_INCREMENT , 
    `c_name` VARCHAR(128) NOT NULL , 
    `c_birthday` DATE NOT NULL , 
    `c_email` VARCHAR(128) NOT NULL , 
    `c_profession` VARCHAR(128) NOT NULL , 
    `c_telephone` VARCHAR(128) NOT NULL , 
    `c_cellphone` VARCHAR(128) NOT NULL , 
    PRIMARY KEY (`c_id`)
) ENGINE = MyISAM;
