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
        return goals.filter(goal => goal.completed === false)  // Filter uncompleted goals
    }

    static getCompletedGoals() {
        return this.goals.filter(goal => goal.completed === true); // Filter completed goals
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
          return null; 
      }

      static completeGoal(id) {
        const goal = this.getById(id);
        if (goal) {
            goal.completed = !goal.completed; // Invert from completed:true to completed :false
            return goal;
        }
        return null; // gol not found
    }
    static deleteGoal(id) {
        const index = this.goals.findIndex(goal => goal.id === id); // i find index from the object to delete
        if (index !== -1) {
            const deletedGoal = this.goals[index]; // save the eliminated goal
            this.goals.splice(index, 1); // Remove the goal from the array
            return { success: true, deletedGoal }; // return an object with the deleted goal
        }
        return { success: false, message: 'Goal not found' }; // Goal not found
    }
    
    
  }
  
  export default Goal;