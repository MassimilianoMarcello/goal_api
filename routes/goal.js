import express from 'express';
import controllers from '../controllers/goal.js';

const router = express.Router();

const{getAllGoals,getDetails,addGoal,addGoalForm,updateGoal,updateGoalForm}=controllers
// routes

router.get('/goals_list',getAllGoals)

router.get('/add-goal',addGoalForm)
router.post('/add-goal',addGoal)


router.get('/:id',getDetails)
// update goals
router.get('/:id/edit', updateGoalForm); // per mostrare il modulo di modifica
router.post('/:id/update', updateGoal); // per inviare l'aggiornamento

// complete goal




export default router;