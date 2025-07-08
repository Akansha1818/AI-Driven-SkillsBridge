
import dotenv from "dotenv";

import connectDB from "../lib/db.js";
import AllowedUser from '../models/AllowedUser.js'; 


dotenv.config();

async function addUser(email) {
    try {
        await connectDB();
        const existing = await AllowedUser.findOne({ email });
        if (existing) {
            console.log("User already exists.");
            return;
        }

        await AllowedUser.create({ email });
        console.log("User added:", email);
    } catch (err) {
        console.error("Error adding user:", err);
    } finally {
        process.exit();
    }
}

addUser("akanksha8287961834@gmail.com");