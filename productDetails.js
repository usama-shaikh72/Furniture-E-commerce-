document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const conversionRate = 83;

  const products = {
    1: {
      title: "King Size Bed",
      image: "kingsize-bed.webp",
      description:
        "Spacious and comfortable king-size bed with premium wood finish.",
      price: "799.99",
      specs: ["Material: Solid Wood", "Color: Brown", "Size: King"],
    },
    2: {
      title: "Queen Size Bed",
      image: "queensize bed.webp",
      description:
        "Elegant queen-size bed designed for comfort and durability.",
      price: "699.99",
      specs: ["Material: Teak Wood", "Color: Dark Brown", "Size: Queen"],
    },
    3: {
      title: "Single Bed",
      image: "single-bed.webp",
      description: "Compact single bed, perfect for small spaces.",
      price: "499.99",
      specs: ["Material: Pine Wood", "Color: White", "Size: Single"],
    },
    4: {
      title: "Modern Chair",
      image: "modern.webp",
      description: "Sleek and stylish modern chair with cushioned seating.",
      price: "149.99",
      specs: ["Material: Metal Frame", "Color: Black", "Ergonomic Design"],
    },
    5: {
      title: "Classic Wooden Chair",
      image: "classicWoodenChair.webp",
      description: "A timeless wooden chair with a vintage look.",
      price: "129.99",
      specs: ["Material: Oak Wood", "Color: Natural", "Handcrafted"],
    },
    6: {
      title: "Luxury Armchair",
      image: "armchair-isolated.webp",
      description: "A plush armchair for ultimate relaxation.",
      price: "199.99",
      specs: ["Material: Leather", "Color: Grey", "High-density Foam"],
    },
    7: {
      title: "Single Seater Sofa",
      image: "single-seater-sofa.webp",
      description: "Compact yet comfortable single-seater sofa.",
      price: "499.99",
      specs: ["Material: Fabric", "Color: Beige", "Cushioned Backrest"],
    },
    8: {
      title: "Corner Sofa",
      image: "corner-sofa.webp",
      description: "L-shaped corner sofa, perfect for spacious living rooms.",
      price: "599.99",
      specs: ["Material: Leather", "Color: Black", "Modular Design"],
    },
    9: {
      title: "Double Seater Sofa",
      image: "2-seater-sofa.webp",
      description: "Elegant two-seater sofa with soft cushions.",
      price: "799.99",
      specs: ["Material: Velvet", "Color: Navy Blue", "Compact Size"],
    },
    10: {
      title: "Murphy Bed",
      image: "murphy-bed.avif",
      description: "Space-saving Murphy bed that folds into the wall.",
      price: "799.99",
      specs: ["Material: Engineered Wood", "Color: White", "Wall-mounted"],
    },
    11: {
      title: "Poster Bed",
      image: "poster-bed.webp",
      description: "Elegant four-poster bed with a classic touch.",
      price: "699.99",
      specs: ["Material: Mahogany Wood", "Color: Brown", "Size: Queen"],
    },
    12: {
      title: "Panel Bed",
      image: "panel-bed.webp",
      description: "Stylish panel bed with a sturdy frame.",
      price: "499.99",
      specs: ["Material: Hardwood", "Color: Dark Walnut", "Size: Full"],
    },
    13: {
      title: "Study Chair",
      image: "study-chair.png",
      description:
        "Ergonomic study chair for long hours of comfortable seating.",
      price: "149.99",
      specs: ["Material: Plastic & Metal", "Color: Black", "Adjustable Height"],
    },
    14: {
      title: "Baby Chair",
      image: "baby-chair.jpg",
      description: "Safe and sturdy baby chair for toddlers.",
      price: "129.99",
      specs: ["Material: Plastic", "Color: Blue", "Safety Harness"],
    },
    15: {
      title: "High Chair",
      image: "high-chair.webp",
      description: "Adjustable high chair for babies and toddlers.",
      price: "199.99",
      specs: ["Material: Wood", "Color: White", "Foldable Design"],
    },
    16: {
      title: "Luxury Sofa",
      image: "luxurious.webp",
      description: "Premium luxury sofa with plush cushioning.",
      price: "499.99",
      specs: ["Material: Leather", "Color: Brown", "Spacious & Comfortable"],
    },
    17: {
      title: "Classic 3-Seater Sofa",
      image: "classic 3 seater.webp",
      description: "A comfortable and stylish three-seater sofa.",
      price: "599.99",
      specs: ["Material: Fabric", "Color: Grey", "Soft Cushions"],
    },
    18: {
      title: "Modern Sectional Sofa",
      image: "modern 2.webp",
      description: "A modular sectional sofa for large spaces.",
      price: "799.99",
      specs: ["Material: Leather", "Color: Black", "Adjustable Seats"],
    },
    19: {
      title: "Wooden Dining Table",
      image: "wooden-dining-table.webp",
      description: "Elegant wooden dining table with a smooth finish.",
      price: "299.99",
      specs: ["Material: Solid Wood", "Seats: 6", "Dimensions: 72x36 inches"],
    },
    20: {
      title: "Modern Glass Table",
      image: "modern-glass-table.webp",
      description: "A stylish glass table with a modern aesthetic.",
      price: "399.99",
      specs: [
        "Material: Glass & Metal",
        "Color: Transparent",
        "Scratch-resistant",
      ],
    },
    21: {
      title: "Foldable Coffee Table",
      image: "foldable-coffee-table.jpg",
      description: "A convenient foldable coffee table for easy storage.",
      price: "199.99",
      specs: ["Material: Wood", "Color: Brown", "Foldable Design"],
    },
    22: {
      title: "Console Table",
      image: "consloe-tables.webp",
      description: "Sleek console table for modern interiors.",
      price: "299.99",
      specs: ["Material: MDF & Metal", "Color: Black", "Compact Size"],
    },
    23: {
      title: "Fixed Coffee Table",
      image: "fixed-coffee-table.webp",
      description: "A classic fixed coffee table for your living room.",
      price: "399.99",
      specs: ["Material: Teak Wood", "Color: Dark Brown", "Durable"],
    },
    24: {
      title: "Bed Side Table",
      image: "bed-side-table.webp",
      description: "Minimalist bedside table with storage.",
      price: "199.99",
      specs: ["Material: Engineered Wood", "Color: White", "Storage Drawer"],
    },
  };

  const product = products[productId];

  if (product) {
    document.getElementById("product-title").innerText = product.title;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-description").innerText =
      product.description;

    // ✅ Convert price from USD to INR properly
    const priceInINR = convertToINR(product.price);
    document.getElementById("product-price").innerText = `₹${priceInINR}`;

    const specsList = document.getElementById("product-specs");
    specsList.innerHTML = "";
    product.specs.forEach((spec) => {
      const li = document.createElement("li");
      li.textContent = spec;
      specsList.appendChild(li);
    });

    // ✅ Ensure button exists before adding event listener
    const addToCartBtn = document.querySelector(".add-to-cart-btn"); // Updated to match your HTML
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", function () {
        addToCart(product);
      });
    } else {
      console.error("Add to Cart button not found!"); // Debugging log
    }
  } else {
    document.body.innerHTML = "<h2>Product Not Found</h2>";
  }
});

// ✅ Function to convert USD to INR correctly
function convertToINR(priceInUSD) {
  return (parseFloat(priceInUSD) * 83).toFixed(2);
}

// ✅ Updated Add to Cart function with proper INR prices
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex(
    (item) => item.name === product.title
  );

  // Convert price to INR before storing
  const priceInINR = parseFloat(convertToINR(product.price));

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
    cart[existingProductIndex].totalPrice = (
      cart[existingProductIndex].price * cart[existingProductIndex].quantity
    ).toFixed(2);
  } else {
    cart.push({
      name: product.title,
      price: priceInINR, // ✅ Ensure INR price is stored
      image: product.image,
      quantity: 1,
      totalPrice: priceInINR.toFixed(2),
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}
