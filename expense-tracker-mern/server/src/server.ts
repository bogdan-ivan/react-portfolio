import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import path from "path";

import connectDB from "./config/db";
import transactions from './controllers/Transaction.controller';

dotenv.config({ path: __dirname + '/./config/config.env' }); // absolute + relative

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// app.get('/', (req, res) => {
//     res.send("Hello");
// })

// Mount the router
app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(colors.yellow.bold(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)));

connectDB();