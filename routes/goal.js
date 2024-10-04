import express from 'express';
import controllers from '../controllers/goal.js';

const router = express.Router();

const{getAllGoals}=controllers
// routes

router.get('/',getAllGoals)

export default router;