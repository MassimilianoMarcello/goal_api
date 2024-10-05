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
    static goals = goals; 
   
  
  
    static getGoalsList() {
        return goals.filter(goal => goal.completed === false)
    }

    static getCompletedGoals() {
        return this.goals.filter(goal => goal.completed === true); // Filtra i goal completati
    }
    
  
     
  
      static getById(id) {
          return goals.find(goal => goal.id === id);
      }
  
      static addGoal(goal) {
          const newGoal = {
              id: Id(),
              ...goal,
              completed: false 
          };
          goals.push(newGoal);
          return newGoal;
      }
  
      
  
      static updateGoal(id, updatedData) {
          const goal = this.getById(id);
          if (goal) {
              goal.name = updatedData.name || goal.name;
              goal.description = updatedData.description || goal.description;
              goal.starting = updatedData.starting || goal.starting;
              goal.finishing = updatedData.finishing || goal.finishing;
              goal.priority = updatedData.priority || goal.priority;
              return goal;
          }
          return null; // Goal non trovato
      }

      static completeGoal(id) {
        const goal = this.getById(id);
        if (goal) {
            goal.completed = !goal.completed; // Inverte lo stato da true a false e viceversa
            return goal;
        }
        return null; // Obiettivo non trovato
    }
  }
  
  export default Goal;