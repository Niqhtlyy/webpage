<?php
session_start();
session_destroy();
header("Location: secretpage.php");
exit();
?>