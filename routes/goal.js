import express from 'express';
import controllers from '../controllers/goal.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

const{getAllGoals,getDetails,addGoal,addGoalForm,updateGoal,updateGoalForm,completeGoal,getCompletedGoals,deleteGoal}=controllers
// routes
// List goals to complet
router.get('/goals_list',getAllGoals)
// Completed goals list
router.get('/completed_goals',verifyToken, getCompletedGoals);

router.get('/add-goal',verifyToken,addGoalForm)
router.post('/add-goal',addGoal)


router.get('/:id',verifyToken,getDetails)
// update goals
router.get('/:id/edit',verifyToken, updateGoalForm); // shows the modification form
router.post('/:id/update',verifyToken, updateGoal); // to sent update

// complete goal
// Route per completare l'obiettivo
router.post('/:id/complete', completeGoal); 

// delete goal

router.delete('/delete/:id',deleteGoal)








export default router;