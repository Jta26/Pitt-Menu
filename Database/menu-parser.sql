DROP DATABASE menu_parser_db;
CREATE DATABASE menu_parser_db;
USE menu_parser_db;

CREATE TABLE foods (
	foodID INT NOT NULL,
	name VARCHAR(100),
    PRIMARY KEY (foodID)
);

CREATE TABLE dates (
	dateID INT NOT NULL,
    dae DATE NOT NULL,
    weekday VARCHAR(20) NOT NULL,
    PRIMARY KEY (dateID)
);

CREATE TABLE fooddates (
	fooddateID INT NOT NULL,
	FOREIGN KEY (FoodID) REFERENCES food(foodID),
    FOREIGN KEY (DateID) REFERENCES dates(dateID),
    PRIMARY KEY (fooddateID)
)