import jwt from 'jsonwebtoken';
import {JWT_EXPIRATION_TIME, JWT_SECRET} from "../config/config.js";

export const EncodeToken = (email, user_id) => {
    const KEY = JWT_SECRET;
    const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
    const PAYLOAD = { email: email, user_id: user_id };
    return jwt.sign(PAYLOAD,KEY,EXPIRE);
};

export const DecodeToken = (token) => {
    try {
        const KEY = process.env.JWT_SECRET;
        return jwt.verify(token,KEY);
    } catch (error) {
        return null;
    }
};
