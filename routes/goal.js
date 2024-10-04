import express from 'express';
import controllers from '../controllers/goal.js';

const router = express.Router();

const{getAllGoals,getDetails,addGoal,addGoalForm}=controllers
// routes

router.get('/goals_list',getAllGoals)

router.get('/add-goal',addGoalForm)
router.post('/add-goal',addGoal)


router.get('/:id',getDetails)

export default router;