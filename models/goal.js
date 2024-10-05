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
  

  const completedGoals = [];

  class Goal {
      static goals = goals; // Array di obiettivi
      static completedGoals = completedGoals; // Array di obiettivi completati
  
      static getGoalsList() {
          return this.goals;
      }
  
      static getCompletedGoals() {
          return this.completedGoals; // Restituisce l'array degli obiettivi completati
      }
  
      static getById(id) {
          return this.goals.find(goal => goal.id === id);
      }
  
      static addGoal(goal) {
          const newGoal = {
              id: Id(),
              ...goal,
              completed: false // Assicurati che i nuovi goal siano incompleti
          };
          this.goals.push(newGoal);
          return newGoal;
      }
  
      static completeGoal(id) {
          const goal = this.getById(id);
          if (goal) {
              goal.completed = true; // Modifica il campo completed a true
              this.completedGoals.push(goal); // Aggiungi l'obiettivo completato all'array
              this.goals = this.goals.filter(g => g.id !== id); // Rimuovi l'obiettivo dalla lista principale
              return goal;
          }
          return null; // Obiettivo non trovato
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
      
  }
  
  export default Goal;