🚗 AutoMarket – Car Marketplace UI
AutoMarket is a modern, responsive car marketplace UI project built using HTML, Tailwind CSS, and Vanilla JavaScript.
The project focuses on clean architecture, reusable components, and a smooth user experience, while simulating authentication logic on the client side (UI-only).
⚠️ Note: This project is frontend-only and does not include a real backend or API.
Authentication and routing are simulated using localStorage and sessionStorage.
________________________________________
🎯 Project Goals
•	Build a realistic marketplace UI without using frameworks
•	Apply clean folder structure and separation of concerns
•	Practice authentication flow (login / register / redirect)
•	Create reusable UI components
•	Prepare the project to be backend-ready in the future
________________________________________
✨ Features
🔐 Authentication (UI Only)
•	Login & Register pages
•	Client-side form validation
•	Fake authentication token handling
•	Remember Me support (LocalStorage / SessionStorage)
•	Automatic redirect after login & signup
🧭 Client-Side Routing
•	Centralized route definitions
•	Clean redirects between pages
•	No hardcoded paths scattered in files
🧩 Reusable Components
•	Dynamic Navbar component
•	Fully modular Footer component (single file)
•	Shared helper functions for DOM creation
🚨 Custom Error Handling
•	Custom error messages (no browser default alerts)
•	Reusable error handler across auth pages
•	Styled error UI with CSS
🌙 Dark Mode
•	Toggle-based dark mode
•	Theme persisted using localStorage
•	Fully styled with Tailwind CSS
📱 Responsive Design
•	Mobile-first layout
•	Works smoothly on all screen sizes
•	Flexbox & Grid based layouts
🎨 Modern UI/UX
•	Clean and minimal interface
•	Smooth hover & transition effects
•	Consistent typography and spacing
🗂️ Clean Architecture
•	Organized folder structure
•	Separation between:
o	Pages
o	Components
o	Styles
o	Utilities
•	Easy to maintain and scale
⚙️ Vanilla JavaScript Only
•	No frameworks (React, Vue, etc.)
•	Pure ES6+ JavaScript
•	Simple, readable, and extendable code
🚀 Backend-Ready
•	Auth logic can be easily replaced with real API calls
•	Structure supports future backend integration
________________________________________
📁 Project Structure
AutoMarket/
│
├── pages/
│   ├── auth/
│   │   ├── login.html
│   │   └── register.html
│   │
│   ├── cars/
│   │   └── index.html
|   |   |__car-details.html
│   │   └── listing.html
|   |   |__wishlist.html
│
├── js/
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── login.js
│   │   │   └── register.js
│   │   │
│   │   └── cars/
│   │       └── landing.js
│   │       └── cars.js
│   │       └── car-details.js
│   │       └── wiskist.js
│   │
│   ├── components/
│   │   ├── carcard.js
│   │   └── error.js
│   │   └── footer.js
│   │
│   └── utils/
│       ├── auth.js
│       ├── routes.js
│       └── api.js
│       ├── config.js
│       ├── element.js
│       └── icon.js
│
├── css/
│   ├── pages/
│   │   └── auth.css
│   │
│   └── components/
│       └── error.css
│
________________________________________
🔑 Authentication Logic (UI Simulation)
•	A fake token is stored on successful login/register
•	If Remember Me is checked:
o	Token is saved in localStorage
•	Otherwise:
o	Token is saved in sessionStorage
•	Protected pages check authentication state before rendering
________________________________________
▶️ How to Run the Project
1.	Clone the repository:
git clone https://github.com/your-username/automarket-ui.git
2.	Open the project folder
3.	Run using Live Server or any local server
(Recommended: VS Code Live Server extension)
4.	Start from:
index.html
________________________________________
🛠️ Technologies Used
•	HTML5
•	Tailwind CSS
•	Vanilla JavaScript (ES6+)
•	LocalStorage & SessionStorage
________________________________________
📌 Future Enhancements
•	Integrate real backend APIs
•	Add role-based access (Admin / User)
•	advanced filters
•	Real authentication & authorization
•	Dashboard for admins
________________________________________
👤 Author
AutoMarket UI
Built with ❤️ for learning, practice, and clean frontend architecture.

