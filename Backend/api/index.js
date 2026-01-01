import dotenv from 'dotenv';
import app from '../src/app.js';
import connectDB from '../src/db/index.js';

// Load environment variables
dotenv.config({ path: '../.env' });

// Connect to MongoDB once (will be cached in serverless)
let isConnected = false;

const connectToDatabase = async () => {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }

    try {
        await connectDB();
        isConnected = true;
        console.log('New database connection established');
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
};

// Export the Express app as a serverless function
export default async (req, res) => {
    try {
        // Ensure database is connected
        await connectToDatabase();

        // Handle the request with Express
        return app(req, res);
    } catch (error) {
        console.error('Serverless function error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};
