const products = [
  {
    name: "Summit Runner",
    category: "sport",
    price: 89,
    tag: "Best Seller",
    description: "Lightweight performance sneaker designed for all-day comfort.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Northport Loafer",
    category: "formal",
    price: 112,
    tag: "New",
    description: "Refined leather loafer for polished day-to-night business looks.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Harbor Slide",
    category: "women",
    price: 64,
    tag: "Popular",
    description: "Soft comfort slide with premium cushioned footbed.",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Trail Max",
    category: "men",
    price: 98,
    tag: "Outdoor",
    description: "Durable trekking sneaker with supportive grip and traction.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Velora Court",
    category: "women",
    price: 76,
    tag: "Trending",
    description: "Modern court shoe with sleek silhouette and cushioned sole.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Metro Classic",
    category: "men",
    price: 94,
    tag: "Core",
    description: "Everyday dress sneaker crafted for smart casual wear.",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Aero Flex",
    category: "sport",
    price: 82,
    tag: "Hot",
    description: "Breathable athletic trainer with supportive cushioning.",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Crest Oxford",
    category: "formal",
    price: 118,
    tag: "Premium",
    description: "Classic oxford shoe for elevated office and event styling.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
  }
];

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartCount = document.getElementById("cartCount");

let currentFilter = "all";
let totalCart = 0;

function renderProducts(filter) {
  const filteredProducts = filter === "all"
    ? products
    : products.filter((product) => product.category === filter);

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image" style="background-image: url('${product.image}')"></div>
          <div class="product-body">
            <div class="product-meta">
              <span>${product.category.toUpperCase()}</span>
              <span class="badge">${product.tag}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price-row">
              <div class="price">$${product.price}<small> / pair</small></div>
              <button class="btn btn-primary add-to-cart" type="button">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      totalCart += 1;
      cartCount.textContent = String(totalCart);
      const originalText = button.textContent;
      button.textContent = "Added";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 700);
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    renderProducts(currentFilter);
  });
});

renderProducts(currentFilter);

const featuredButton = document.querySelector(".panel-card .btn");
if (featuredButton) {
  featuredButton.addEventListener("click", () => {
    totalCart += 1;
    cartCount.textContent = String(totalCart);
  });
}

const requestQuoteButtons = document.querySelectorAll(".btn-ghost, .btn-secondary");
requestQuoteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "#contact";
  });
});

