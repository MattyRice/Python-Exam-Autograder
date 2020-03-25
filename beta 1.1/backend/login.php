<?php
$db_server 		= "sql1.njit.edu";
$db_username 	= "mtr22";
$db_password 	= "Coolgig678!";
$db_name 		= "mtr22";

if (isset($_POST['username'], $_POST['password'])) {
	try { $db = new mysqli($db_server, $db_username, $db_password, $db_name); }
	catch (Exception $e) {
		$message = "Service Unavailable. Error: " . $e;
		echo json_encode($message);
		exit;
	}
	$username 	= mysqli_real_escape_string($db,$_POST['username']);
    $password 	= mysqli_real_escape_string($db,$_POST['password']);
	$query 	 	= "SELECT `UserStatus` FROM `users` WHERE username = '$username' and password = '$password';";
	$result 	= mysqli_query($db,$query);
    $count 		= mysqli_num_rows($result);
    // If result matched $username and $password, table row must be 1 row
	// will return 'student' if user is a student and 'faculty' if user is faculty
    if($count == 1) {
		//session_start();
		$reply = mysqli_fetch_row($result);
		echo json_encode($reply);
    }
	else {
		$message = "failed";
		echo json_encode($message);
	}
	mysqli_close($db);
}
?>
