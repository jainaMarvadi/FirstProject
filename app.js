// app.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Import your User model

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

// Middleware
app.use(express.json());

// MongoDB connection
const uri = 'mongodb+srv://UserIdentified:sales110@cluster0.t5pue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

  // Error below here 
// mongoose.connect('mongodb://localhost/Sales');
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Find all users
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting user" });
  }
});

// Delete all Users
app.delete('/users', async (req, res) => {
  try {
    await User.deleteMany();
    res.send({ message: "All users deleted successfully" });
  }
  catch{
    res.status(500).send({ message: "Error deleting all users" });
  }
})


// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid user ID" });
    }

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Delete error:", error); // Log the error
        res.status(500).send({ message: "Error deleting user" });
    }
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
