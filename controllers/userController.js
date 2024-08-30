const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const resume = req.file ? req.file.path : null;

        if (!name || !email || !resume) {
            return res.status(400).json({ message: 'Please fill in all fields and upload a resume.' });
        }

        const newUser = new User({ name, email, resume });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
