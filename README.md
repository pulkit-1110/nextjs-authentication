# Next.js Authentication Project

This is a basic authentication project built with Next.js. The main purpose of this project is to learn and demonstrate authentication mechanisms using Next.js.

## Features

- User signup: Users can register with their email and password. Upon registration, a verification email is sent to the registered email address.

- User login: Users can log in using their registered email and password. Upon successful login, a JSON Web Token (JWT) is set in cookies for authentication.

- Profile page: After logging in, users can view their profile page, which displays their user ID.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pulkit-1110/nextjs-authentication.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a .env file based on the provided .env.sample file, and update the environment variables as needed. Below is an example of the .env.sample file:**

   ```bash
   MONGO_URI="mongodb://127.0.0.1:27017/nextjs-auth"
   TOKEN_SECRET=nextjs-auth
   DOMAIN=http://localhost:3000
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000` in your browser.

## Usage

- Signup: Visit the signup page `http://localhost:3000/signup` and register with your email and password. Check your email for the verification link.

- Login: Visit the login page `http://localhost:3000/login` and enter your registered email and password.

- Profile: After logging in, you will be redirected to your profile page `http://localhost:3000/profile`, where you can view your user ID.

## Technologies Used

- Next.js
- MongoDB
- JSON Web Tokens (JWT)
- Nodemailer (configured with Mailtrap for email testing)
