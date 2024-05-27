import Smartphones from "../models/SmartphonesModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const getSmartphones = async (req, res) => {
    try {
        const smartphones = await Smartphones.findAll();
        res.json(smartphones);
    } catch (error) {
        console.error(error);
    }
}

