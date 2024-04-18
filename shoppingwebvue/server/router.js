import express from 'express';
import { query } from './db/index.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password, email, name, phone, creditLimit } = req.body;
    const checkUserSql = 'SELECT * FROM customer WHERE cust_username = ?';

    try {
        const existingUser = await query(checkUserSql, [username]);
        if (existingUser.length > 0) {
            return res.status(409).send({ message: 'Username already exists' });
        }

        const insertSql = 'INSERT INTO customer (cust_username, cust_password, cust_email, cust_name, cust_phone, cust_credit_limit) VALUES (?, ?, ?, ?, ?, ?)';
        const result = await query(insertSql, [username, password, email, name, phone, creditLimit]);
        res.status(201).send({ message: 'Registration successful', userId: result.insertId });
    } catch (error) {
        res.status(500).send({ message: 'Registration failed', error: error.message });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM customer WHERE cust_username = ? AND cust_password = ?';
    try {
        const result = await query(sql, [username, password]);
        if (result.length > 0) {
            res.send({ message: 'login success', user: result[0] });
        } else {
            res.status(401).send({ message: 'wrong username or pwd' });
        }
    } catch (error) {
        res.status(500).send({ message: 'login fail', error: error.message });
    }
});

router.get('/products', async (req, res) => {
    const sql = 'SELECT * FROM product';
    try {
        const products = await query(sql);
        res.send(products);
    } catch (error) {
        res.status(500).send({ message: 'fail get prod', error: error.message });
    }
});

router.post('/cart', async (req, res) => {
    const { username, prodId, qty, price } = req.body;
    const sql = 'INSERT INTO cart (cust_username, prod_id, cart_qty, cart_price) VALUES (?, ?, ?, ?)';
    try {
        await query(sql, [username, prodId, qty, price]);
        res.status(201).send({ message: 'add cart success' });
    } catch (error) {
        res.status(500).send({ message: 'add cart fail', error: error.message });
    }
});

router.get('/cart/:username', async (req, res) => {
    const { username } = req.params;
    const sql = `
        SELECT c.cust_username, c.cart_order_date, c.prod_id, p.prod_desc, c.cart_qty, c.cart_price
        FROM cart c
        JOIN product p ON c.prod_id = p.prod_id
        WHERE c.cust_username = ?
    `;
    try {
        const cartItems = await query(sql, [username]);
        res.send(cartItems);
    } catch (error) {
        res.status(500).send({ message: 'get cart fail', error: error.message });
    }
});


router.delete('/cart/:username', async (req, res) => {
    const { username } = req.params;
    const sql = 'DELETE FROM cart WHERE cust_username = ?';
    try {
        await query(sql, [username]);
        res.send({ message: 'buy success' });
    } catch (error) {
        res.status(500).send({ message: 'buy fail', error: error.message });
    }
});

export default router;
