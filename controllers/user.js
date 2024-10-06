import User from '../models/user.js';
import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import matchPasswords from '../utils/matchPasswords.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import hashPassword from '../utils/hashPassword.js';

// Controllers
const controllers = {
    // Render login form
    getLoginForm: (req, res) => {
        res.status(200).render('layout', {
            title: 'Enter email and password ',
            body: 'includes/user/loginForm'
        });
    },

    // Render registration form
    getRegistrationForm: (req, res) => {
        res.status(200).render('layout', {
            title: 'Register with email and password ',
            body: 'includes/user/userRegistrationForm'
        });
    },

    login: (req, res) => {
        const { email, password } = req.body;

        // check if email exist

        const emailExist = User.getByEmail(email);
        if (!emailExist) {
            res.status(404).render('404', {
                title: 'User not found',
                message: 'User not found ,please register'
            });
        }

        // check if password is correct

        bcrypt.compare(password, emailExist.password, (err, isValid) => {
            if (err) {
                console.error(err);
            }
            if (isValid) {
                const token = jwt.sign(
                    { email: emailExist.email },
                    process.env.TOKEN_SECRET,
                    { expiresIn: '1h' } 
                );

                if (token) {
                    
                    res.cookie('token', token, { httpOnly: true });
                    res.status(200).redirect('/api/goals_list');
                }
            } else {
                res.status(409).render('404', {
                    title: 'invalid paassword or email',
                    message: 'Invalid password or email'
                });
            }
        });
    },

    register: (req, res) => {
        const { email, password, rePassword } = req.body;

        //  check if email exist
        const emailExist = User.getByEmail(email);
        if (emailExist) {
            res.status(409).render('404', {
                title: 'Mail already exist',
                message: 'Mail already exist'
            });
        }

        //  check password and mail valid
        const isValidPassword = validatePassword(password);
        const isValidMail = validateEmail(email);
        const doPasswordMatch = matchPasswords(password, rePassword);
        if (isValidMail && isValidPassword && doPasswordMatch) {
            const hashedPassword = hashPassword(password);
            const newUser = User.add({ email, password: hashedPassword });
            console.log(newUser);
            res.status(302).redirect('/user/login/');
        } else {
            res.status(400).render('404', {
                title: 'invalid mail or password',
                message: 'Invalid mail or password'
            });
        }
    },


    logout: (req, res) => {
        res.clearCookie('token');
        res.status(200).redirect('/api/goals_list');
    }
};

export default controllers;
