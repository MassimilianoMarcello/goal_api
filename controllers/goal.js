import Goal from '../models/goal.js';

const controllers = {
    getAllGoals: (req, res) => {
        const goals = Goal.getGoalsList();
        res.status(200).render('layout', {
            title: 'My goals',
            body: 'includes/goal/goals_list',
            goals
        });
    },
    getDetails: (req, res) => {
        const goalId = req.params.id;
        const goal = Goal.getById(goalId);
        res.status(200).render('layout', {
            title: goal.name,
            body: 'includes/goal/goal_details',
            goal
        });
    },
    addGoalForm: (req, res) => {
        res.status(200).render('layout', {
            title: 'Add a new Goal',
            body: 'includes/goal/addGoalForm'
        });
    },
    addGoal: (req, res) => {
        const {
            name,
            description,
            starting,
            finishing,
          
            priority,
            
        } = req.body;
        const addNewGoal = {
            name,
            description,
            starting,
            finishing,
          
            priority,
           
        };
        Goal.addGoal(addNewGoal);
        res.status(200).redirect('/api/goals_list');
    },
    updateGoalForm: (req, res) => {
        const goalId = req.params.id;
        const goal = Goal.getById(goalId);
        if (goal) {
            res.status(200).render('layout', {
                title: `Update Goal: ${goal.name}`,
                body: 'includes/goal/updateGoalForm', // crea un template per il modulo di aggiornamento
                goal
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
         
            priority: req.body.priority,
          
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
        const completedGoal = Goal.completeGoal(id); // Completa l'obiettivo
        if (completedGoal) {
            console.log('Completed Goal:', completedGoal);
            console.log('Completed Goals List:', Goal.getCompletedGoals());
            res.status(200).redirect('/api/goals_list'); // Reindirizza alla pagina dei goal
        } else {
            res.status(404).render('404', {
                title: '404 Page',
                message: 'Goal not found'
            });
        }
    },
    getCompletedGoals: (req, res) => {
        console.log('Fetching completed goals...');
        const completedGoalsList = Goal.getCompletedGoals();
        console.log('Completed Goals List:', completedGoalsList); 
        if (completedGoalsList.length === 0) {
            console.log('No completed goals found.');
        }
        res.status(200).render('layout', {
            title: 'Completed Goals',
            body: 'includes/goal/completed_goals', // Assicurati che il percorso sia corretto
            completedGoals: completedGoalsList
        });
    }
    
    

};

export default controllers;
