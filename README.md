# 🛒 RENCart – Modern E-Commerce Web App

RENCart is a **modern, responsive, and animated e-commerce web application** built with **Next.js, Tailwind CSS, and Framer Motion**.  
It provides a professional shopping experience with product filters, categories, cart functionality, order placement, and aesthetic UI animations.

---

## 🚀 Features

- **Home Page**

  - Modern hero section with background animation.
  - Dynamic and professional navbar.

- **Shop Page**

  - 25+ Products with real images.
  - **Filters:** Gender (Men/Women), Price range, Sizes.
  - Pagination with **Next/Previous buttons** for browsing products.
  - Add to cart functionality.
  - **Order placed page** after checkout.

- **Categories Section**

  - Shop by categories (Tops, Dresses, Outerwear, Accessories).
  - Clicking a category redirects user directly to the **Shop page**.

- **Cart**

  - Add/remove items.
  - Dynamic price calculation.
  - Checkout flow → order placed confirmation page.

- **About Page**

  - Animated mission and vision cards.
  - Professional design with **Framer Motion animations**.
  - Aesthetic **Gallery section** with hover effects.

- **Responsive Design**
  - Works seamlessly on desktop, tablet, and mobile.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Client Components)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts (optional):** Recharts (if analytics page is added later)

---

## 📂 Project Structure

```

/components
├── Navbar.jsx
├── Footer.jsx
├── Categories.jsx
├── ProductCard.jsx
└── Cart.jsx

/app
├── page.jsx        # Home
├── shop/page.jsx   # Shop
├── about/page.jsx  # About + Gallery
└── order/page.jsx  # Order placed confirmation
/public
├── img1.jpg
├── img2.jpg
└── ...

```

---

## ⚡ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rencart.git
   cd rencart
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📸 Screenshots

### 🏠 Home Page

![Home](./public/screenshots/home.png)

### 🛍️ Shop with Filters

![Shop](./public/screenshots/shop.png)

### 🧾 Cart & Order Placed

![Cart](./public/screenshots/cart.png)

### ℹ️ About + Gallery

![About](./public/screenshots/about.png)

---

## 🎨 Design Choices

* Minimal but professional **UI/UX** with soft shadows, rounded corners, and modern typography.
* Hover animations and smooth transitions to make the shopping experience engaging.
* Organized **grid layout** for product listings and galleries.
* Dark overlays for better readability on images.

---

## 📌 Future Improvements

* Add authentication (login/signup).
* Payment gateway integration (Stripe/PayPal).
* Wishlist functionality.
* Admin dashboard for managing products.

---

## 👨‍💻 Author

Developed with ❤️ by **Nikhil Sharma**

---


````
