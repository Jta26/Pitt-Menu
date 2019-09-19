DROP DATABASE pitt_menu;
CREATE DATABASE pitt_menu;
USE pitt_menu;

CREATE TABLE Item (
	ItemID INT UNIQUE NOT NULL AUTO_INCREMENT,
	ItemName VARCHAR(100) UNIQUE NOT NULL,
    PRIMARY KEY (ItemID)
);
CREATE TABLE Weekdays (
	WeekdayID INT UNIQUE NOT NULL AUTO_INCREMENT,
    WeekdayName VARCHAR(20) NOT NULL,
    PRIMARY KEY (WeekdayID)
);
INSERT INTO Weekdays (WeekdayName) VALUES
('monday'), 
('tuesday'), 
('wednesday'), 
('thursday'), 
('friday'), 
('saturday'), 
('sunday');

CREATE TABLE Menu (
	MenuID INT UNIQUE NOT NULL AUTO_INCREMENT,
    MenuDate DATE NOT NULL,
    MenuType BOOL NOT NULL,
    WeekdayID INT NOT NULL,
    CONSTRAINT WeekdayID_FK FOREIGN KEY (WeekdayID) REFERENCES Weekdays(WeekdayID),
    PRIMARY KEY (MenuID),
    UNIQUE KEY DateType (MenuDate, MenuType)
);
CREATE TABLE MenuItem (
    ItemID INT NOT NULL,
    MenuID INT NOT NULL,
    CONSTRAINT ItemID_FK FOREIGN KEY (ItemID) REFERENCES Item(ItemID),
    CONSTRAINT MenuID_FK FOREIGN KEY (MenuID) REFERENCES Menu(MenuId),
    UNIQUE KEY MenuItemKey (ItemID, MenuID)
);
DELIMITER //
DROP PROCEDURE IF EXISTS menu_parser_db.InsertItem//
CREATE PROCEDURE InsertItem(IN _ItemName VARCHAR(100))
BEGIN
	INSERT IGNORE INTO Item (ItemName) VALUES (_ItemName);
END//
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS menu_parser_db.InsertMenu//
CREATE PROCEDURE InsertMenu(
IN _MenuDate DATE,
IN _MenuType BOOL,
IN _Weekday VARCHAR(20))
BEGIN
 	INSERT IGNORE INTO Menu(MenuDate, MenuType, WeekdayID) VALUES 
    (_MenuDate, _MenuType, (SELECT WeekdayID FROM Weekdays WHERE WeekdayName = LOWER(_Weekday)));
END//
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS menu_parser_db.InsertMenuItem//
CREATE PROCEDURE InsertMenuItem(
IN _MenuDate DATE,
IN _MenuType BOOL,
IN _ItemName VARCHAR(100))
BEGIN
	INSERT IGNORE INTO MenuItem(ItemID, MenuID) VALUES(
    (SELECT ItemID FROM Item WHERE ItemName=_ItemName), 
    (SELECT MenuID FROM Menu WHERE MenuDate=_MenuDate AND MenuType=_MenuType));
END//
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS menu_parser_db.GetMenu//
CREATE PROCEDURE GetMenu(
IN _MenuDate DATE,
IN _MenuType BOOL)
BEGIN 
	SELECT 
    i.ItemName AS 'Item Name',
    m.MenuDate AS 'Menu Date',
    m.MenuType AS 'Menu Type' FROM Item i 
    JOIN MenuItem mi ON i.ItemID = mi.ItemID 
	JOIN Menu m ON m.MenuID = mi.MenuID
    WHERE 
    m.MenuDate = _MenuDate
    AND
    m.MenuType = _MenuType;
END//
DELIMITER ;

