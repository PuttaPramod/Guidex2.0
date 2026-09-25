const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userDataRoutes = require('./routes/userData');

const {
  verifyMailConnection
} = require('./services/mailService');

const app = express();


/* =====================================================
   CONFIGURATION
===================================================== */

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

const FRONTEND_URL =
  process.env.FRONTEND_URL ||
  'http://localhost:4200';


/* =====================================================
   MIDDLEWARE
===================================================== */

/*
 * Allow requests from the Angular frontend.
 *
 * Development:
 *   http://localhost:4200
 *
 * Production:
 *   FRONTEND_URL from environment variables.
 */

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true
  })
);


app.use(express.json());


app.use(
  express.urlencoded({
    extended: true
  })
);


app.use(cookieParser());


/* =====================================================
   BASIC API ROUTE
===================================================== */

app.get('/api/health', (req, res) => {

  return res.status(200).json({
    success: true,
    message: 'Guidex backend is running',
    timestamp: new Date().toISOString()
  });

});


/* =====================================================
   AUTHENTICATION ROUTES
===================================================== */

app.use(
  '/api/auth',
  authRoutes
);


/* =====================================================
   USER DATA ROUTES
===================================================== */

app.use(
  '/api/user-data',
  userDataRoutes
);


/* =====================================================
   MONGODB CONNECTION
===================================================== */

const connectDatabase = async () => {

  try {

    if (!MONGO_URI) {

      console.error(
        '❌ MONGO_URI is not defined in the environment variables.'
      );

      process.exit(1);

    }


    await mongoose.connect(
      MONGO_URI
    );


    console.log(
      '✅ MongoDB connected successfully'
    );


    /* =================================================
       EMAIL SERVICE CONNECTION
    ================================================= */

    const mailConnected =
      await verifyMailConnection();


    if (!mailConnected) {

      console.error(
        '❌ Email service connection failed.'
      );

      process.exit(1);

    }


  } catch (error) {

    console.error(
      '❌ Backend startup failed:',
      error.message
    );

    process.exit(1);

  }

};


/* =====================================================
   SERVER START
===================================================== */

const startServer = async () => {

  await connectDatabase();


  app.listen(
    PORT,
    () => {

      console.log('');

      console.log(
        '========================================'
      );

      console.log(
        '🚀 Guidex 2.0 Backend Started'
      );

      console.log(
        '========================================'
      );

      console.log(
        `📡 Port: ${PORT}`
      );

      console.log(
        `🌐 Frontend: ${FRONTEND_URL}`
      );

      console.log(
        `❤️  Health: /api/health`
      );

      console.log(
        `🔐 Auth: /api/auth`
      );

      console.log(
        `👤 User Data: /api/user-data`
      );

      console.log(
        '🗄️  Database: MongoDB'
      );

      console.log(
        '📧 Email: Connected'
      );

      console.log(
        '========================================'
      );

      console.log('');

    }
  );

};


/* =====================================================
   START APPLICATION
===================================================== */

startServer();