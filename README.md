# BroShop eCommerce 
```
Full Stack E-commerce WebApp built with the MERN stack & Redux. you are welcome to check by visiting live version on below link.
Try it: https://elcshop.herokuapp.com/ 

```

 ## Features
```
- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)
- Responsive UI for multiple screens
```

## Languages & tools
```
front end:
ReactJS - Frontend framework.
React Router Dom - For routing & navigation.
axios - For fetching data from API.

back end:
NodeJS - back-end JavaScript runtime environment.
Express - back end web application framework.
MongoDB - Database to store document-based data.
Mongoose - MongoDB object modeling for Node.js.
JSON Web Token - A standard to secure/authenticate HTTP requests.
Bcrypt.js - For hashing passwords.
Dotenv - To load environment variables from a .env file.
```

## Env Variables

Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```


### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## admin screens
![2](https://user-images.githubusercontent.com/87587492/178826150-a33f7ddb-227a-47e8-b3d3-23942668f721.png)
![3](https://user-images.githubusercontent.com/87587492/178826194-5f821ca3-1e76-4f03-9175-a4a0b430721e.png)
![4](https://user-images.githubusercontent.com/87587492/178826219-3483a1c9-a128-4ff6-854b-f260f37c73a9.png)
![5](https://user-images.githubusercontent.com/87587492/178826307-9ce14b4e-bd42-4f82-a4ec-b003378d09e4.png)
![6](https://user-images.githubusercontent.com/87587492/178826322-2f53b1d9-637c-489f-a81e-9350f30e816c.png)
