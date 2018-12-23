const getSleepHours = (day) => {
    switch(day){
           case 'monday':
           return 8;
           case 'tuesday':
           return 6;
           case 'wednesday':
           return 7;
           case 'thursday':
           return 9;
           case 'friday':
           return 4;
             case 'saturday':
           return 6;
           case 'sunday':
           return 10;
        
            
  
      }
    
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 7; 
    return idealHours * 7;
  }
  
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
      }else if(actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed! ' );
      }else{
      console.log('You need some rest! You need ' + idealSleepHours - actualSleepHours + ' hours 		more sleep!' );
      }
  
  }
  
  
  calculateSleepDebt();