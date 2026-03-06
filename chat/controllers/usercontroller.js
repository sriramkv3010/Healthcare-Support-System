const User = require('../models/userModel');
const Chat = require('../models/chatModel');
const bcrypt = require('bcrypt');

const registerLoad = async (req, res) => {
    try {
        res.render('register');
    } catch (error) {
        console.log(error.message);
    }
};

const register = async (req, res) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            image: 'images/' + req.file.filename,
            password: passwordHash,
            role: req.body.role
        });

        await user.save();
        res.render('register', { message: 'Your Registration has been Completed!' });

    } catch (error) {
        console.log(error.message);
        res.render('register', { message: 'Registration failed: ' + error.message });
    }
};

const loadLogin = async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        console.log(error.message);
    }
};

const login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userData = await User.findOne({ email: email });
        if (userData) {
            const passwordMatch = await bcrypt.compare(password, userData.password);
            if (passwordMatch) {
                req.session.user = userData;
                res.redirect('/dashboard');
            } else {
                res.render('login', { message: 'Email or Password is incorrect!' });
            }
        } else {
            res.render('login', { message: 'Email or Password is incorrect!' });
        }

    } catch (error) {
        console.log(error.message);
    }
};

const logout = async (req, res) => {
    try {
        req.session.destroy();
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
};

const loadDashboard = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.redirect('/');
        }

        // For patients, find all doctors
        // For doctors, find all patients
        let users;
        if (req.session.user.role === 'patient') {
            users = await User.find({ role: 'doctor' });
        } else {
            users = await User.find({ role: 'patient' });
        }

        res.render('dashboard', {
            user: req.session.user,
            users: users
        });
    } catch (error) {
        console.log(error.message);
    }
};

const loadChat = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.redirect('/');
        }

        const userId = req.params.id;
        const userData = await User.findById(userId);

        // Get chat history between the two users
        const chats = await Chat.find({
            $or: [
                { sender_id: req.session.user._id, receiver_id: userId },
                { sender_id: userId, receiver_id: req.session.user._id }
            ]
        }).sort({ createdAt: 1 });

        res.render('chat', {
            user: req.session.user,
            receiver: userData,
            chats: chats
        });
    } catch (error) {
        console.log(error.message);
    }
};

const saveChat = async (req, res) => {
    try {
        const chat = new Chat({
            sender_id: req.body.sender_id,
            receiver_id: req.body.receiver_id,
            message: req.body.message
        });

        const newChat = await chat.save();
        res.status(200).send({ success: true, msg: 'Chat saved', data: newChat });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    registerLoad,
    register,
    loadLogin,
    login,
    logout,
    loadDashboard,
    loadChat,
    saveChat
};
