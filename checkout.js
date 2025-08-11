document.addEventListener("DOMContentLoaded", function () {
  const checkoutForm = document.getElementById("checkout-form");
  const paymentSelect = document.getElementById("payment");
  const onlinePaymentDetails = document.getElementById(
    "online-payment-details"
  );
  const upiField = document.getElementById("upi-id");
  const phoneField = document.getElementById("phone");
  const orderMessage = document.getElementById("order-message");

  // Show/Hide UPI & Phone fields based on payment selection
  paymentSelect.addEventListener("change", function () {
    if (paymentSelect.value === "online") {
      onlinePaymentDetails.style.display = "block";
      upiField.setAttribute("required", "true");
      phoneField.setAttribute("required", "true");
    } else {
      onlinePaymentDetails.style.display = "none";
      upiField.removeAttribute("required");
      phoneField.removeAttribute("required");
    }
  });

  // Handle form submission
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let paymentMethod = paymentSelect.value;

    // Validate required fields
    if (!name || !email || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    let orderDetails = {
      name,
      email,
      address,
      paymentMethod,
    };

    if (paymentMethod === "online") {
      let upi = upiField.value.trim();
      let phone = phoneField.value.trim();

      // Validate UPI and Phone
      if (!upi) {
        alert("Please enter your UPI ID.");
        upiField.focus();
        return;
      }

      if (!phone) {
        alert("Please enter your phone number.");
        phoneField.focus();
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        phoneField.focus();
        return;
      }

      orderDetails.upi = upi;
      orderDetails.phone = phone;
    }

    // Store in localStorage (simulating a DB for now)
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Show success message
    orderMessage.innerText = "Your order has been placed successfully!";
    orderMessage.style.color = "green";

    // Reset form
    checkoutForm.reset();
    onlinePaymentDetails.style.display = "none"; // Hide payment fields after reset
  });
});
