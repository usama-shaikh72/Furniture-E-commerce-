<?php
session_start();
session_destroy();
$_SESSION['message'] = "You have been logged out successfully.";
header("Location: index.php");
exit();
?>
