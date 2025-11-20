const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || "mongodb+srv://Dev_Kevin:mtu123@cluster0.pmlalsj.mongodb.net/DIYTechSolutions?retryWrites=true&w=majority";

// Connect asynchronously - don't block app initialization
mongoose.connect(dbURI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
}).catch(err => console.error('✗ MongoDB connection failed:', err.message));

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to database: ${mongoose.connection.db.databaseName}`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose disconnected through app termination');
  process.exit(0);
});

