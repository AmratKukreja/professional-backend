import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app =  express()

// we can also use the cors() simply
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

// Middleware configuration for the Express.js application

// This line sets a limit on the size of JSON data that can be processed by the application
// to 16 kilobytes. This is done to prevent denial-of-service attacks and to ensure the
// application's performance is not affected by large data transfers.
app.use(express.json({limit : '16kb'}));

// This line enables the application to parse URL-encoded data, which is commonly used
// in HTML forms. This allows the application to handle form submissions and other
// URL-encoded data.
app.use(express.urlencoded());

// This line serves static files from the "public" directory. This is useful for serving
// client-side assets such as images, stylesheets, and JavaScript files.
app.use(express.static("public"));

// This line enables the application to parse and manage cookies. This is useful for
// managing user sessions, storing user preferences, and other cookie-based functionality.
app.use(cookieParser());

// named export
export { app }