import Goal from '../models/goal.js';

const controllers = {
    getAllGoals: (req, res) => {
        const goals = Goal.getGoalsList();
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'My goals',
            body: 'includes/goal/goals_list',
            goals,
            token
        });
    },

    getDetails: (req, res) => {
        const goalId = req.params.id;
        const goal = Goal.getById(goalId); 
        const token = req.cookies.token;
        // Check if the goal was found
        if (!goal) {
            return res.status(404).send('Goal not found'); 
        }
    
        // Render the layout with the goal details
        res.status(200).render('layout', {
            title: goal.name,
            body: 'includes/goal/goal_details',
            goal, // Pass the goal object to the view
            token
        });
    },
    
    addGoalForm: (req, res) => {
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'Add a new Goal',
            body: 'includes/goal/addGoalForm',
            token
        });
    },
    addGoal: (req, res) => {
        const { name, description, starting, finishing, priority } = req.body;
     
        const addNewGoal = {
            name,
            description,
            starting,
            finishing,
            priority
        };
        Goal.addGoal(addNewGoal);
        res.status(200).redirect('/api/goals_list');
    },
    updateGoalForm: (req, res) => {
        const goalId = req.params.id;
        const goal = Goal.getById(goalId);
        const token = req.cookies.token;
        if (goal) {
            res.status(200).render('layout', {
                title: `Update Goal: ${goal.name}`,
                body: 'includes/goal/updateGoalForm', 
                goal,
                token
            });
        } else {
            res.status(404).render('404', {
                title: '404 Page',
                message: 'Goal not found'
            });
        }
    },

    updateGoal: (req, res) => {
        const { id } = req.params;
        const updatedGoal = {
            name: req.body.name,
            description: req.body.description,
            starting: req.body.starting,
            finishing: req.body.finishing,

            priority: req.body.priority
        };
        const goal = Goal.updateGoal(id, updatedGoal);
        if (goal) {
            res.redirect(`/api/goals_list`);
        } else {
            res.status(404).render('404', {
                title: '404 Page',
                message: 'Goal not found'
            });
        }
    },
    completeGoal: (req, res) => {
        const { id } = req.params;
        const goal = Goal.completeGoal(id); 
        if (goal) {
            res.status(200).redirect('/api/goals_list'); 
        } else {
            res.status(404).render('404', {
                title: '404 Page',
                message: 'Goal not found'
            });
        }
    },
    getCompletedGoals: (req, res) => {
        const completedGoals = Goal.getCompletedGoals(); 
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'Completed Goals',
            body: 'includes/goal/completed_goals',
            completedGoals,
            token
        });
    },
    deleteGoal: (req, res) => {
        const goalId = req.params.id; 
        const deleted = Goal.deleteGoal(goalId); 
        const token = req.cookies.token;
    
        if (deleted) {
            const redirectPage = req.body.redirect; 
    
            
            if (redirectPage === 'completed_goals') {
                const completedGoals = Goal.getCompletedGoals(); 
                res.status(200).render('layout', {
                    title: 'Completed Goals',
                    body: 'includes/goal/completed_goals', 
                    completedGoals ,
                    token
                });
            } else {
                const goals = Goal.getGoalsList(); 
                res.status(200).render('layout', {
                    title: 'Goals List',
                    body: 'includes/goal/goals_list', 
                    goals ,
                    token
                });
            }
        } else {
            res.status(404).send('Goal not found'); 
        }
    }
    
    
    
    
    
};

export default controllers;
