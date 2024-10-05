import express from 'express';
import controllers from '../controllers/goal.js';

const router = express.Router();

const{getAllGoals,getDetails,addGoal,addGoalForm,updateGoal,updateGoalForm,completeGoal,getCompletedGoals,deleteGoal}=controllers
// routes
// List goals to complet
router.get('/goals_list',getAllGoals)
// Completed goals list
router.get('/completed_goals', getCompletedGoals);

router.get('/add-goal',addGoalForm)
router.post('/add-goal',addGoal)


router.get('/:id',getDetails)
// update goals
router.get('/:id/edit', updateGoalForm); // per mostrare il modulo di modifica
router.post('/:id/update', updateGoal); // per inviare l'aggiornamento

// complete goal
// Route per completare l'obiettivo
router.post('/:id/complete', completeGoal); // Cambiato da GET a POST per completare il goal

// delete goal

router.delete('/delete/:id',deleteGoal)








export default router;