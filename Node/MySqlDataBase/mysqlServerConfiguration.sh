#mysql Problem Resolve

#Create New User
function createUser(){
    mysql 
    CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
    FLUSH PRIVILEGES;
}

#Normal entry for MySQL
mysql -u rickCaetano -p