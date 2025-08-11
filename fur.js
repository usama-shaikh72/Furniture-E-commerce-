document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
  convertPricesToINR();

  document.querySelectorAll(".product img").forEach((image) => {
    image.addEventListener("click", function () {
      const product = this.closest(".product");
      if (!product) return;

      const name = product.querySelector("h3, h2").innerText;
      let priceElement = product.querySelector("p");

      if (!priceElement) return;

      let priceText = priceElement.innerText;
      let priceInINR = extractPrice(priceText);
      const imageSrc = this.src;

      openProductDetails({
        name,
        price: parseFloat(priceInINR),
        image: imageSrc,
      });
    });
  });

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const product = this.closest(".product");
      if (!product) return;

      const name = product.querySelector("h3, h2").innerText;
      let priceElement = product.querySelector("p");

      if (!priceElement) return;

      let priceText = priceElement.innerText;
      let priceInINR = extractPrice(priceText);
      const image = product.querySelector("img").src;

      addToCart({ name, price: parseFloat(priceInINR), image });
      showCart(); // Auto-open the cart when adding an item
    });
  });

  document
    .getElementById("cart-button")
    ?.addEventListener("click", function (event) {
      event.preventDefault();
      showCart();
    });

  document.getElementById("close-cart")?.addEventListener("click", function () {
    closeCart();
  });
});

function scrollToProducts() {
  const productsSection = document.getElementById("products");
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth" });
  }
}

function extractPrice(priceText) {
  return parseFloat(priceText.replace(/[^\d.]/g, "")) || 0;
}

function convertToINR(price) {
  const conversionRate = 83;
  return (parseFloat(price) * conversionRate).toFixed(2);
}

function convertPricesToINR() {
  document
    .querySelectorAll(".product p, .product-info p")
    .forEach((priceElement) => {
      if (
        priceElement.innerText.includes("Price:") ||
        priceElement.innerText.includes("$")
      ) {
        let priceInUSD = extractPrice(priceElement.innerText);
        let priceInINR = convertToINR(priceInUSD);
        priceElement.innerHTML = `<strong>Price:</strong> ₹${priceInINR}`;
      }
    });
  // Ensure stored cart items are also converted
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((item) => {
    item.price = parseFloat(convertToINR(item.price));
    item.totalPrice = (item.price * item.quantity).toFixed(2);
  });
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = cart.find((item) => item.name === product.name);

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.totalPrice = (
      existingItem.price * existingItem.quantity
    ).toFixed(2);
  } else {
    product.quantity = 1;
    product.totalPrice = product.price.toFixed(2);
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartTotal();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  let cartCountElement = document.getElementById("cart-count");

  if (cartCountElement) {
    cartCountElement.innerText = totalCount;
  } else {
    console.error("Cart count element not found.");
  }
}

function updateCartTotal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalAmount = cart.reduce(
    (sum, item) => sum + parseFloat(item.totalPrice),
    0
  );
  let cartTotalElement = document.getElementById("cart-total");

  if (!cartTotalElement) {
    let cartContainer = document.getElementById("cart-items");
    let totalElement = document.createElement("p");
    totalElement.id = "cart-total";
    cartContainer.appendChild(totalElement);
  }

  document.getElementById(
    "cart-total"
  ).innerHTML = `<strong>Total: ₹${totalAmount.toFixed(2)}</strong>`;
}

function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartDetails = cart
    .map(
      (item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" width="50">
      <p><strong>${item.name}</strong> - ₹${item.totalPrice} (x${item.quantity})</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    </div>
  `
    )
    .join("");

  let cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = cartDetails || "<p>Your cart is empty.</p>";
  document.getElementById("cart-container").style.display = "block";
  updateCartTotal();

  let cartActions = document.getElementById("cart-actions");
  if (!cartActions) {
    cartActions = document.createElement("div");
    cartActions.id = "cart-actions";
    cartActions.style.display = "flex";
    cartActions.style.gap = "10px";

    cartActions.innerHTML = `
      <button id="close-cart" onclick="closeCart()">Close</button>
      <a href="checkout.html" id="proceed-checkout" class="checkout-button">Proceed to Checkout</a>
    `;
    document.getElementById("cart-container").appendChild(cartActions);
  }
  cartActions.innerHTML = `
  <button id="close-cart" class="close-cart-button" onclick="closeCart()">Close</button>
     ${
       cart.length > 0
         ? '<a href="checkout.html" id="proceed-checkout" class="checkout-button">Proceed to Checkout</a>'
         : ""
     }
  `;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    cart[index].totalPrice = (cart[index].price * cart[index].quantity).toFixed(
      2
    );
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showCart();
}

function closeCart() {
  document.getElementById("cart-container").style.display = "none";
}

function openProductDetails(product) {
  alert(`Product: ${product.name}\nPrice: ₹${product.price}`);
}
