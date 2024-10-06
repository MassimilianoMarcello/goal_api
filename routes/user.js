import express from 'express';
import controllers from '../controllers/user.js';

const router = express.Router();

const { getLoginForm, getRegistrationForm, register, login, logout } =
    controllers;

// routes

// login
router.get('/login', getLoginForm);
router.post('/login', login);
// logout

router.post('/logout', logout);

// register
router.get('/register', getRegistrationForm);
router.post('/register', register);

export default router;
