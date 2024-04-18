# shoppingweb 7780
The sample code is fuckingly difficult to read and maintain. I rewrote it using the separation of front and back ends.

## Highlights
- **Backend Refactoring**: Achieved a clean separation of concerns by refactoring the backend, enhancing maintainability and scalability.
- **Frontend Construction**: Utilized **Vue.js** to build a dynamic and robust frontend.
- **Responsive UI**: Integrated **Bootstrap** to create a responsive user interface that adapts seamlessly to both mobile and desktop devices.

## Prerequisites
- **MySQL Service**: Ensure that the MySQL service is running before initiating the project. Meet these conditions and preload the database.
```json
{
    host: 'localhost',
    user: 'user99',
    password: 'user99',
    database: 'comp7780'
}
```
- **Node.js Environment**: A Node.js environment is required to run the server-side components.

## Project Setup

To get the project up and running, follow these steps:

```sh
cd ./shoppingwebvue
npm install
npm start
```

This will install all the necessary dependencies and start the development server and back-end server for the ShoppingWeb application.


## Secondary Development

In the `server` folder, I have developed a set of refactored backend APIs that can be initiated by running `node app.js`. These APIs are built using the `express` framework and interact with the database through the `query` function from `./db/index.js`. Here's a brief overview of each endpoint:

### Registration Endpoint (`/register`)

- **Request Type**: POST
- **Endpoint**: `/register`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string",
    "name": "string",
    "phone": "string",
    "creditLimit": "number"
  }
  ```
- **Success Response**:
  - **Status Code**: 201 Created
  - **Body**:
    ```json
    {
      "message": "Registration successful",
      "userId": "number"
    }
    ```
- **Error Response**:
  - **Username Exists**:
    - **Status Code**: 409 Conflict
    - **Body**:
      ```json
      {
        "message": "Username already exists"
      }
      ```
  - **Registration Failed**:
    - **Status Code**: 500 Internal Server Error
    - **Body**:
      ```json
      {
        "message": "Registration failed",
        "error": "string"
      }
      ```

### Login Endpoint (`/login`)

- **Request Type**: POST
- **Endpoint**: `/login`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Success Response**:
  - **Status Code**: 200 OK
  - **Body**:
    ```json
    {
      "message": "Login success",
      "user": {
        // user object
      }
    }
    ```
- **Error Response**:
  - **Wrong Credentials**:
    - **Status Code**: 401 Unauthorized
    - **Body**:
      ```json
      {
        "message": "Wrong username or password"
      }
      ```
  - **Login Failed**:
    - **Status Code**: 500 Internal Server Error
    - **Body**:
      ```json
      {
        "message": "Login failed",
        "error": "string"
      }
      ```

### Products Endpoint (`/products`)

- **Request Type**: GET
- **Endpoint**: `/products`
- **Success Response**:
  - **Status Code**: 200 OK
  - **Body**:
    ```json
    [
      // array of product objects
    ]
    ```
- **Error Response**:
  - **Status Code**: 500 Internal Server Error
  - **Body**:
    ```json
    {
      "message": "Failed to get products",
      "error": "string"
    }
    ```

### Add to Cart Endpoint (`/cart`)

- **Request Type**: POST
- **Endpoint**: `/cart`
- **Request Body**:
  ```json
  {
    "username": "string",
    "prodId": "number",
    "qty": "number",
    "price": "number"
  }
  ```
- **Success Response**:
  - **Status Code**: 201 Created
  - **Body**:
    ```json
    {
      "message": "Add to cart successful"
    }
    ```
- **Error Response**:
  - **Status Code**: 500 Internal Server Error
  - **Body**:
    ```json
    {
      "message": "Add to cart failed",
      "error": "string"
    }
    ```

### View Cart Endpoint (`/cart/:username`)

- **Request Type**: GET
- **Endpoint**: `/cart/:username`
- **Success Response**:
  - **Status Code**: 200 OK
  - **Body**:
    ```json
    [
      // array of cart item objects
    ]
    ```
- **Error Response**:
  - **Status Code**: 500 Internal Server Error
  - **Body**:
    ```json
    {
      "message": "Get cart failed",
      "error": "string"
    }
    ```

### Delete Cart Endpoint (`/cart/:username`)

- **Request Type**: DELETE
- **Endpoint**: `/cart/:username`
- **Success Response**:
  - **Status Code**: 200 OK
  - **Body**:
    ```json
    {
      "message": "Buy successful"
    }
    ```
- **Error Response**:
  - **Status Code**: 500 Internal Server Error
  - **Body**:
    ```json
    {
      "message": "Buy failed",
      "error": "string"
    }
    ```

This documentation provides a clear and concise reference for developers looking to understand or integrate with the backend APIs for user registration, login, product browsing, and cart management.
