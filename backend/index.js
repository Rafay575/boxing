// index.js
import express from 'express';
import multer from 'multer';
import mysql from 'mysql';
import path from 'path';
import cors from "cors"
const app = express();
app.use(cors())
const port = 8000;

// Set up storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'formdata_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

// Middleware to parse JSON
app.use(express.json());

// POST route to handle form submission
app.post('/submit', upload.single('image'), (req, res) => {
    const { name, contactNumber, email, message } = req.body;
    const image = req.file ? req.file.filename : null;

    const sql = 'INSERT INTO submissions (name, contactNumber, email, message, image) VALUES (?, ?, ?, ?, ?)';
    const values = [name, contactNumber, email, message, image];

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.json({ success: true, message: 'Form data saved successfully.' });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
