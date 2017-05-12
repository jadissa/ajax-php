# jajax-php
Utilizing jQuery to do an AJAX call, produce javascript and PHP code that will log a client into the system and start a session for them.  The client database table has the fields: (int)client_id,(varchar)user_name,(varchar)password_hash,(datetime)last_login

This project relies on the following libraries:
php Slim, Slim-Session, NotORM, jQuery, Bootstrap, phpLib and a few additionals I've included for shazzam

Two things need doing still: data validation and URL redirecting

Caveats: Obviously, user passwords should at the bare minimum be md5'd and salted however, I have for now left out the salt since there is currently no mechanism for user registration

1. Install database
  * mysql -u root -p
  * create user ajaxphp@localhost identified BY 'testing';
  * create database ajaxphp;
  * grant all privileges on ajaxphp.* to 'ajaxphp'@'localhost';
  * flush privileges;
  * use ajaxphp; create table users (client_id int, user_name varchar(255), password_hash varchar(255), last_login datetime);
  * insert into users (`client_id`, `user_name`, `password_hash`, `last_login`) values (1, 'jadissa', md5('asdf123'), now());
  * quit;

2. chmod u+x ./build
3. ./build
4. Test at http://localhost/ajax-php/
