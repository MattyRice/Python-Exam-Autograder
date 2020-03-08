<?php
//database connection
	define ('DB_HOST','sql1.njit.edu');
	define ('DB_USER','mtr22');
	define ('DB_PASS','Coolgig678!');

define ('DB_NAME','mtr22');

$dsn = "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8";
$db = new PDO($dsn, DB_USER, DB_PASS);
?>
