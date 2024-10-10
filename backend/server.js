const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())


app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log('server running on port' + PORT)
})


