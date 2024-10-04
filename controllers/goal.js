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
            status,
            priority,
            completed
        } = req.body;
        const addNewGoal = {
            name,
            description,
            starting,
            finishing,
            status,
            priority,
            completed: completed === 'no'
        };
        Goal.addGoal(addNewGoal);
        res.status(200).redirect('/api/goals_list');
    }
};

export default controllers;
