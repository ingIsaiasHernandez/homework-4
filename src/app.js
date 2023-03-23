// Import required packages and modules
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const reletedModels = require('./models/reletedModels');
const db = require('./utils/database');

// Create Express application
const app = express();

// Import routes
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const conversationRoutes = require('./routes/conversation.routes');
const messageRoutes = require('./routes/message.routes');
const errorHandlerRouter = require('./routes/error.handler.routes');

// Set up database models
reletedModels();

// Set up middleware
app.use(cors()); // Enable CORS for all routes
app.use(morgan('dev')); // Log HTTP requests in development mode
app.use(express.json()); // Parse JSON-encoded request bodies

// Set up routes
app.use(userRoutes);
app.use(authRoutes);
app.use(conversationRoutes);
app.use(messageRoutes);

// Authenticate and synchronize database
db.authenticate()
    .then(() => console.log("Database authenticate")) // Log successful authentication
    .catch((error) => console.log(error)) // Log error if authentication fails

db.sync({alter: true})
    .then(() => console.log("Database async")) // Log successful synchronization
    .catch((error) => console.log(error)) // Log error if synchronization fails

// Set up error handling middleware
errorHandlerRouter(app);

// Start server and listen on specified port
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`); // Log server start message
})