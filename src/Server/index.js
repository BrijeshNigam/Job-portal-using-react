const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware 
app.use(express.json());
app.use(cors());

//Routes
app.use('./api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('chal hi gyi re baba ye ...');
});

// database connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/brijesh-Nigam';
    
mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Connect ho gya ooooohhhyyeee');
    app.listen(PORT, () => {
        console.log(`server char rha humara http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log('Nahi hua connect re ye to', err);
    process.exit(1);
});