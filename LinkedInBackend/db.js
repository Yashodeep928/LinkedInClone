import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();

const connection = postgres({
    host: process.env.MY_HOST,
    port: process.env.MY_PORT,
    database: process.env.MY_DATABASE,
    username: process.env.MY_USER,
    password: process.env.MY_PASSWORD    
})

console.log(`Connected to database: ${process.env.MY_DATABASE} at ${process.env.MY_HOST}:${process.env.MY_PORT} as user ${process.env.MY_USER}`);

export default connection;  
