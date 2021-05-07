const tasks = [ 

    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'}, 
  
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'}, 
  
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'}, 
  
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'}, 
  
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'}, 
  
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'}, 
  
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'}, 
  
  ]; 
  
  var result = 0; 

  tasks.map(elem =>{
    result +=  (elem.category == 'Frontend')?  elem.timeSpent : 0;
  }); 

  console.log("Времы на фронт:" + result);

  var result = 0; 

  tasks.map(elem =>{
    result +=  (elem.type == 'bug')?  elem.timeSpent : 0;
  }); 

  console.log("Время на bug: " + result);

  var result = 0; 

  tasks.map(elem =>{
    result +=  (elem.title.includes("UI")) ?  1 : 0;
  }); 

  console.log("Количество задач со словом UI: " + result);

  var result = {frontend:0,backend:0}; 

  tasks.map(elem =>{
    result.frontend +=  (elem.category == ("Frontend")) ?  1 : 0;
    result.backend +=  (elem.category == ("Frontend")) ?  0 : 1;
  }); 

  console.log(result);

  var result = tasks.filter((elem) => elem.timeSpent > 4); 
  console.log(result);