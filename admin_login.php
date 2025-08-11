 <?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Login - Furniture E-Commerce</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <div class="admin-login-wrapper">
        <h2>Admin Login</h2>
        
        <?php
        if (isset($_SESSION['error'])) {
            echo "<p style='color: red;'>" . $_SESSION['error'] . "</p>";
            unset($_SESSION['error']);
        }
        ?>

        <form action="adminloginprocess.php" method="post">
            <div class="input-group">
                <label for="admin_email">Email</label>
                <input type="email" id="admin_email" name="email" required>
            </div>
            <div class="input-group">
                <label for="admin_password">Password</label>
                <input type="password" id="admin_password" name="password" required>
            </div>
            <button type="submit" class="btn">Login</button>
        </form>
    </div>
</body>
</html>
