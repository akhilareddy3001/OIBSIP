#  PizzaHub - Pizza Delivery Application

PizzaHub is a full-stack pizza delivery web application developed using the MERN stack. Users can browse pizzas, search and filter the menu, customize pizzas, manage their cart, authenticate using Google, place orders, and view their order history.

##  Features

- Google Authentication using Firebase
- Browse pizza menu
- Search pizzas
- Filter pizzas by category
- Veg and Non-Veg pizza filtering
- View detailed pizza information
- Select pizza size and crust
- Create a custom pizza
- Select base, sauce, cheese, and toppings
- Dynamic custom pizza price calculation
- Add pizzas to cart
- Increase or decrease item quantity
- Remove items from cart
- Order summary with GST and delivery fee
- Checkout with delivery address
- Cash on Delivery, UPI, and Card payment options
- Place orders
- Store orders in MongoDB
- View logged-in user's order history
- View individual order details
- Reorder previous orders
- Firebase token-based backend authentication

##  Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- Mongoose

### Authentication
- Firebase Authentication
- Google Sign-In
- Firebase Admin SDK

##  Project Structure

```text
PizzaDeliveryApp/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── firebase.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

##  Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

Open another terminal:

```bash
cd server
npm install
node server.js
```

##  Environment Variables

Create a `.env` file inside the `server` folder.

Required environment variables include:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
```

Do not commit the `.env` file or Firebase private credentials to GitHub.

##  Application Flow

```text
Google Login
     ↓
Browse Pizza Menu
     ↓
Search / Filter Pizzas
     ↓
Select or Customize Pizza
     ↓
Add to Cart
     ↓
Checkout
     ↓
Place Order
     ↓
MongoDB
     ↓
My Orders
     ↓
Order Details / Reorder
```

## Authentication & Security

Firebase Authentication is used for Google Sign-In.

Protected backend order routes verify Firebase ID tokens using the Firebase Admin SDK. Orders are associated with the authenticated user's email.

Sensitive credentials are stored using environment variables and excluded from Git using `.gitignore`.

##  Future Enhancements

- Real online payment gateway
- Live order tracking
- Admin dashboard
- Pizza inventory management
- Coupons and offers
- Email/order notifications
- Deployment of frontend and backend

##  Developer

**Akhila Reddy Alikepalli**

B.Tech Computer Science Engineering (AI & ML)

---

Developed as a full-stack MERN Pizza Delivery application.