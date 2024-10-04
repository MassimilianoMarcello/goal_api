import Goals from '../models/goal.js';

const controllers ={
getAllGoals:(req,res)=>{
    const goals = Goals.getGoalsList()
    res.status(200).render('layout',{
        title:"My goals",
        body:"includes/goal/goals_list",
        goals
    })
},
}

export default controllers