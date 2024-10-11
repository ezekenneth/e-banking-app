const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middleware/errorHandler');


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())


app.use('/api/user', userRoutes);


app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


