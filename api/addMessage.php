<?php
include("../php/conn.php");
$userid = $_POST['userid'];
$message = $_POST['message'];

$sql = "INSERT INTO messages (userid, message) VALUES ('".$userid."','".$message."')";
mysql_query($sql) or die(mysql_error());
?>