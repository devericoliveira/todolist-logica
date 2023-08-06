const getTasks = () => {
  const tasks = require('./database');
  return tasks;
}

const setTask = (task) => {
  if(!task || typeof task !== 'object') {
    return;
  }
  
  const tasks = getTasks();
  tasks.push(task);
}

const deleteTask = (id) => {
  const tasks = getTasks();
  
  const callback = (task) => {
    if(task.id === id) {
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
     }
  }

  tasks.forEach(task => callback(task));
}

const searchTask = (status) => {
  const isStatus = ['Pendente', 'Concluído'].includes(status)
  const tasks = getTasks();

  if(!isStatus) {
    return;
  }
  
  return tasks.filter(task => task.status === status);
}