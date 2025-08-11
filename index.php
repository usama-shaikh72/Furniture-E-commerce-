<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The woodshop</title>
    <link rel="stylesheet" href="fur.css">
</head>
<body>
    <header>
        <div class="logo">Furniture Store</div>
        <nav>
            <ul>
                <li class="dropdown">
                    <a href="#">Products</a>
                    <ul class="dropdown-menu">
                        <li><a href="chairs.html">Chairs</a></li>
                        <li><a href="sofas.html">Sofas</a></li>
                        <li><a href="beds.html">Beds</a></li>
                        <li><a href="tables.html">Tables</a></li>
                        <li><a href="all-products.html">All Products</a></li>
                    </ul>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <?php if (isset($_SESSION['user'])): ?>
    
<?php else: ?>
    <li class="dropdown">
        <a href="#">Account</a>
        <ul class="dropdown-menu">
            <?php if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true): ?>
                <li><a href="admin_dashboard.php">Admin Panel</a></li>
                <li><a href="admin_logout.php">Logout</a></li>
            <?php elseif (isset($_SESSION['email'])): ?>
                <li><a href="logout.php">Logout</a></li>
            <?php else: ?>
                <li><a href="login.php">Login</a></li>
                <li><a href="signup.php">Sign Up</a></li>
                <li><a href="admin_login.php">Admin Login</a></li>
            <?php endif; ?>
        </ul>
    </li>


<?php endif; ?>
                <li><a href="#" id="cart-button">cart🛒 (<span id="cart-count">0</span>)</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="home">
        <h1>Elevate Your Home with Stunning Furniture</h1>
        <button onclick="scrollToProducts()">Shop Now</button>
    </section>

    <section class="products" id="products">
        <h2>Featured Products</h2>
        <div class="product-grid">
            <div class="product">
                <img src="armchair.jpg" alt="Product 1">
                <h3>Armchair</h3>
                <p>$199.99</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="product">
                <img src="sofa.jpg" alt="Product 2">
                <h3>Sofa</h3>
                <p>$299.99</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="product">
                <img src="bed.jpg" alt="Product 3">
                <h3>Bed</h3>
                <p>$399.99</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
        <div class="product-grid">
            <div class="product">
                <img src="table.webp" alt="Product 4">
                <h3>Foldable Table</h3>
                <p>$499.99</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="product">
                <img src="Wooden-Chair.jpg" alt="Product 5">
                <h3>Wooden Chair</h3>
                <p>$149.99</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="product">
                <img src="kingsize-bed.webp" alt="Product 6">
                <h3>kingsize bed</h3>
                <p>$249.99</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    </section>

    <section id="cart-container" style="display: none;">
        <h2>Your Cart</h2>
        <div id="cart-items"></div>
    </section>

    <section class="about" id="about">
        <h2>About Us</h2>
        <p>At <b>The WoodShop</b>, we bring craftsmanship and elegance to your home. From classic wooden pieces to modern designs, our furniture is built with quality and style in mind.</p>
        <p>Our journey started in 2015, and we have since helped thousands of customers create their dream spaces.</p>
        <div class="about-extra">
            <div class="about-card">
                <h3>🏆 10+ Years of Experience</h3>
                <p>Trusted craftsmanship that stands the test of time.</p>
            </div>
            <div class="about-card">
                <h3>📦 Free Nationwide Delivery</h3>
                <p>Get your furniture delivered safely to your doorstep.</p>
            </div>
            <div class="about-card">
                <h3>❤️ 5000+ Happy Customers</h3>
                <p>Join our community of satisfied homeowners.</p>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <h2>Contact Us</h2>
        <p>We’d love to hear your feedback! Get in touch for any queries.</p>
        <form id="contact-form" action="contact_process.php" method="post">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        
        <div class="contact-info">
            <p>📞 Phone: +91 9224333457</p>
            <p>📧 Email: info@TheWoodShop.com</p>
            <p>📍 Location: Mumbai, India</p>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Furniture Store. All rights reserved.</p>
    </footer>

    <script src="fur.js"></script>
</body>
</html>