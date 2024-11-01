<?php
require 'vendor/autoload.php'; // Ensure Composer's autoload is included

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

session_start();

$correctPassphrase = getenv('PASSPHRASE'); // Get the passphrase from the environment variable
$accessGranted = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['passphrase']) && $_POST['passphrase'] === $correctPassphrase) {
        $_SESSION['access_granted'] = true;
        $accessGranted = true;
    } else {
        $error = "Incorrect passphrase. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secret Page</title>
</head>
<body>

<?php if ($accessGranted || isset($_SESSION['access_granted'])): ?>
    <h1>Welcome to the Secret Page!</h1>
    <p>Your exclusive content goes here. Only your friends can see this!</p>
    <a href="logout.php">Logout</a>
<?php else: ?>
    <div>
        <h2>Enter Passphrase to Access This Page</h2>
        <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
        <form method="post">
            <input type="text" name="passphrase" placeholder="Enter passphrase" required>
            <button type="submit">Submit</button>
        </form>
    </div>
<?php endif; ?>

</body>
</html>