const express = require('express');
const user_route = express();

const bodyParser = require('body-parser');

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

user_route.set('view engine', 'ejs');
user_route.set('views', './views');

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name);
  }
});

const upload = multer({ storage: storage });

const userController = require('../controllers/userController');

// Authentication middleware
const isLogin = async (req, res, next) => {
  try {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log(error.message);
  }
};

const isLogout = async (req, res, next) => {
  try {
    if (req.session.user) {
      res.redirect('/dashboard');
    } else {
      next();
    }
  } catch (error) {
    console.log(error.message);
  }
};

user_route.get('/', isLogout, userController.loadLogin);
user_route.post('/', userController.login);

user_route.get('/register', isLogout, userController.registerLoad);
user_route.post('/register', upload.single('image'), userController.register);

user_route.get('/dashboard', isLogin, userController.loadDashboard);
user_route.get('/logout', isLogin, userController.logout);

user_route.get('/chat/:id', isLogin, userController.loadChat);
user_route.post('/save-chat', userController.saveChat);

module.exports = user_route;
