// Cart Management with localStorage
// Key: "farmera_cart" -> JSON array of cart items

const CART_KEY = "farmera_cart";

// Get cart from localStorage
function getCart() {
  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (err) {
    console.error("Error reading cart:", err);
    return [];
  }
}

// Save cart to localStorage
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateAllCartBadges();
  } catch (err) {
    console.error("Error saving cart:", err);
  }
}

// Add a standardized item to cart
function addItemToCart(item) {
  if (!item || !item.id || !item.name || !item.price || !item.img) {
    console.error("Invalid item added to cart:", item);
    alert("Có lỗi xảy ra khi thêm sản phẩm. Vui lòng thử lại.");
    return;
  }
  const cart = getCart();
  const newItem = {
    id: item.id,
    name: item.name,
    price: item.price,
    img: item.img,
    type: item.type || "product",
    quantity: item.quantity || 1,
  };
  cart.push(newItem);
  saveCart(cart);
  alert(`Đã thêm "${item.name}" vào giỏ hàng.`);
}

// Remove item from cart by index
function removeFromCart(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    saveCart(cart);
    return true;
  }
  return false;
}

// Update quantity
function updateQuantity(index, quantity) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }
    saveCart(cart);
    return true;
  }
  return false;
}

// Clear entire cart
function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateAllCartBadges();
}

// Get total items count
function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

// Get total price (parse prices and sum)
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => {
    const priceStr = String(item.price).replace(/[^\d]/g, "");
    const price = parseInt(priceStr) || 0;
    return sum + price * (item.quantity || 1);
  }, 0);
}

// Update cart badge on all pages
function updateAllCartBadges() {
  const count = getCartCount();
  document.querySelectorAll("#cart-badge").forEach((badge) => {
    if (count > 0) {
      badge.classList.remove("hidden");
      badge.classList.remove("opacity-0", "scale-0");
      badge.classList.add("opacity-100", "scale-100");
      badge.innerText = count > 99 ? "99+" : count;
    } else {
      badge.classList.add("hidden");
      badge.classList.add("opacity-0", "scale-0");
      badge.classList.remove("opacity-100", "scale-100");
    }
  });
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", () => {
  updateAllCartBadges();
});
