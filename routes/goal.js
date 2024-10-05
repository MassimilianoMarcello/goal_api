import express from 'express';
import controllers from '../controllers/goal.js';

const router = express.Router();

const{getAllGoals,getDetails,addGoal,addGoalForm,updateGoal,updateGoalForm,completeGoal,getCompletedGoals}=controllers
// routes

router.get('/goals_list',getAllGoals)

router.get('/add-goal',addGoalForm)
router.post('/add-goal',addGoal)


router.get('/:id',getDetails)
// update goals
router.get('/:id/edit', updateGoalForm); // per mostrare il modulo di modifica
router.post('/:id/update', updateGoal); // per inviare l'aggiornamento

// complete goal
// Route per completare l'obiettivo
router.post('/:id/complete', completeGoal); // Cambiato da GET a POST per completare il goal

// Opzionale: puoi aggiungere una rotta per visualizzare gli obiettivi completati
router.get('/completed_goals', getCompletedGoals);






export default router;