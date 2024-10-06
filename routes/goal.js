import express from 'express';
import controllers from '../controllers/goal.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

const{getAllGoals,getDetails,addGoal,addGoalForm,updateGoal,updateGoalForm,completeGoal,getCompletedGoals,deleteGoal}=controllers
// routes
// List goals to complet
router.get('/goals_list',verifyToken,getAllGoals)
// Completed goals list
router.get('/completed_goals',verifyToken, getCompletedGoals);

router.get('/add-goal',verifyToken,addGoalForm)
router.post('/add-goal',verifyToken,addGoal)


router.get('/:id',verifyToken,getDetails)
// update goals
router.get('/:id/edit',verifyToken, updateGoalForm); // per mostrare il modulo di modifica
router.post('/:id/update',verifyToken, updateGoal); // per inviare l'aggiornamento

// complete goal
// Route per completare l'obiettivo
router.post('/:id/complete',verifyToken, completeGoal); // Cambiato da GET a POST per completare il goal

// delete goal

router.delete('/delete/:id',verifyToken,deleteGoal)








export default router;