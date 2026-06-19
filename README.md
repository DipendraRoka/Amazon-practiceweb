<div align="center">
🛒 Amazon Clone

A front-end e-commerce web app inspired by Amazon — built with pure HTML, CSS & JavaScript
</div>

📖 About The Project

Amazon Clone is a front-end recreation of the core Amazon shopping experience, built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no libraries. It simulates a real shopping flow: browse products, place an order, track it, and check out — all powered by the browser's localStorage, so your cart and orders persist even after a page refresh.

This project was built as a learning exercise to practice DOM manipulation, state management without a framework, and building multi-page UI flows that feel like a real product.


✨ Features


🏠 Home Page — Browse a catalog of products in a clean, responsive layout
🛍️ Order Page — Add items to your cart and review your order details
📦 Track Order — Check the live status of a placed order
💳 Checkout Page — Enter shipping/payment details and confirm your purchase
💾 Persistent Data — Cart and order info saved locally via localStorage (no backend required)
📱 Responsive Design — Works smoothly across desktop, tablet, and mobile screens


🖥️ Pages Overview

PageFileDescription🏠 Homeindex.htmlLanding page with product listings🛍️ Orderorder.htmlView and manage items in your cart📦 Track Ordertrack-order.htmlTrack the status of an existing order💳 Checkoutcheckout.htmlFinal step to confirm and place an order


💡 Update the file names above if yours are different — this is just a starting template.




🛠️ Built With


HTML5 — Semantic page structure
CSS3 — Styling, layout (Flexbox/Grid), and responsiveness
JavaScript (Vanilla) — DOM manipulation, cart logic, and order tracking
localStorage — Client-side data persistence



📁 Project Structure

amazon-clone/
│
├── index.html              # Home page
├── order.html               # Order page
├── track-order.html         # Track order page
├── checkout.html             # Checkout page
│
├── css/
│   ├── style.css             # Global styles
│   ├── home.css
│   ├── order.css
│   └── checkout.css
│
├── js/
│   ├── main.js                # Shared/global JS logic
│   ├── home.js
│   ├── order.js
│   ├── track-order.js
│   └── checkout.js
│
├── assets/
│   └── images/                # Product images, icons, logo etc.
│
└── README.md


📝 Adjust this tree to match your actual folder/file names.




🚀 Getting Started

Prerequisites

All you need is a web browser. No installations, no dependencies, no build tools required.

Installation & Running Locally


Clone the repository


bash   git clone https://github.com/your-username/amazon-clone.git


Navigate into the project folder


bash   cd amazon-clone


Open it in your browser

Simply double-click index.html, or
Use a live server for the best experience (recommended):

In VS Code, install the Live Server extension
Right-click index.html → "Open with Live Server"








That's it — you're up and running! 🎉


🧭 How It Works


Home Page — Browse available products and add the ones you like to your cart
Order Page — Review everything in your cart before proceeding
Checkout — Fill in your details and confirm your order
Track Order — Head to the tracking page anytime to see your order's status


All data — cart items, order details, and order status — is stored locally in your browser using localStorage, so nothing is lost if you refresh the page. (Note: since there's no backend, data is device/browser-specific and will reset if browser storage is cleared.)


🗺️ Roadmap


 Add user authentication (login/signup)
 Add product search & filtering
 Add product categories
 Connect to a real backend/database
 Add order history page
 Improve mobile responsiveness further



Feel free to check the issues page for proposed features and known issues.




🤝 Contributing

Contributions make the open-source community an amazing place to learn and build. Any contributions are greatly appreciated.


Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request



📄 License

This project is for educational purposes only. It is not affiliated with, endorsed by, or connected to Amazon.com, Inc. in any way — it is purely a clone built for learning front-end development.

Distributed under the MIT License. See LICENSE for more information.


📬 Contact

Your Name — your.email@example.com

Project Link: https://github.com/your-username/amazon-clone


<div align="center">
Made with ❤️ and a lot of console.log()

⭐ Star this repo if you found it helpful!

</div>
