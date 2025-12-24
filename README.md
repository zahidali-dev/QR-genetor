QR Code Generator
A simple, fast and responsive QR Code Generator built with HTML, CSS and JavaScript.
Type any text, number or URL, choose a size, and download the generated QR code as a PNG image.

🌐 Live Demo
🔗 https://zahidali-dev.github.io/QR-genetor/

Preview
![QR Code Generator UI](

🛠️ Tech Stack
HTML5

Modern CSS (flexbox, gradients, custom properties)

Vanilla JavaScript

qrcodejs library for generating QR codes

📁 Features
Generate QR codes for text, phone numbers, links and more

Multiple size options (100×100 up to 1000×1000)

Clean UI with centered layout and smooth shadows

Download QR code as PNG with a single click

Responsive layout that works nicely on desktop and laptop screens

🚀 Getting Started
Clone the repo

git clone https://github.com/zahidali-dev/QR-genetor.git
cd QR-genetor

Open in browser

Directly open index.html / QR.html in any browser

Or use VS Code Live Server extension

📂 Project Structure
QR-genetor/
├── QR.html # Main UI
├── QR.css # Styles and layout
├── QR.js # QR generation + download logic
├── assets/
│ └── qr-demo.png # Screenshot used in README
└── README.md

⚙️ How It Works
JavaScript input field se value read karta hai

Selected size ke basis par QRCode library ko configure karta hai

Library QR code ko <div id="qr"> ke andar render karti hai

Download button canvas ko PNG me convert karke user ko save karne deta hai

🌟 Future Improvements
Dark / light theme toggle

Error / validation message below the input

Option to add logo in the center of QR

Better mobile layout and spacing

❤️ Credits
Created with curiosity and practice by Zahid Ali.
If this project helps you, feel free to ⭐ the repository.
