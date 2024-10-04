import { v4 as Id } from 'uuid'

const goals = [
    {
      id: Id(),
      name: 'Learn JavaScript',
      description: 'Complete the JavaScript course on Udemy',
      starting: '2024-10-04',
      finishing: '2024-12-04',
      status: 'in progress',  // 'todo', 'completed', 'in progress'
      priority: 'high',       // 'low', 'medium', 'high'
      completed: false
    },
    {
      id: Id(),
      name: 'Build a website',
      description: 'Create a portfolio website using HTML, CSS, and JavaScript',
      starting: '2024-10-05',
      finishing: '2024-11-05',
      status: 'todo',
      priority: 'medium',
      completed: false
    }
  ];
  

class Goal {
    static getGoalsList() {
        return goals;
    }
    static getById(id){
        return goals.find(goal=>{return goal.id===id})
    }
    static addGoal(goal){
        const newGoal = {
            id:Id(),
            ...goal
        }
        goals.push(newGoal)
        return 
        newGoal
   
   
        
    }

}


    export default Goal