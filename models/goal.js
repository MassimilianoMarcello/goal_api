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
        name: 'Running',
        description: 'Go at the canal and retourn',
        starting: '2024-10-04',
        finishing: '2024-12-04',
        status: 'in progress',  // 'todo', 'completed', 'in progress'
        priority: 'high',       // 'low', 'medium', 'high'
        completed: true
      },
      {
        id: Id(),
        name: 'Guitar Lesson',
        description: 'Go to the music school',
        starting: '2024-10-04',
        finishing: '2024-12-04',
        status: 'in progress',  // 'todo', 'completed', 'in progress'
        priority: 'low',       // 'low', 'medium', 'high'
        completed: false
      },
      {
        id: Id(),
        name: 'Learn how to paint',
        description: 'Watch a video tutorial',
        starting: '2024-10-04',
        finishing: '2024-12-04',
        status: 'in progress',  // 'todo', 'completed', 'in progress'
        priority: 'medium',       // 'low', 'medium', 'high'
        completed: false
      },
    {
      id: Id(),
      name: 'Learn Next js',
      description: 'Use udemy course',
      starting: '2024-10-05',
      finishing: '2024-11-05',
      status: 'todo',
      priority: 'medium',
      completed: true
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
    static deleteGoal(id) {
        const index = this.goals.findIndex(goal => goal.id === id); // Trova l'indice del goal da eliminare
        if (index !== -1) {
            const deletedGoal = this.goals[index]; // Salva il goal eliminato
            this.goals.splice(index, 1); // Rimuove il goal dall'array
            return { success: true, deletedGoal }; // Restituisce un oggetto con il goal eliminato
        }
        return { success: false, message: 'Goal not found' }; // Restituisce un messaggio se non trovato
    }
    
    
  }
  
  export default Goal;