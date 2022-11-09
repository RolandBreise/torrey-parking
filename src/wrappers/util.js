
const holidays = [
  "2022-11-24",

]

// export function today(){
//   //let today = new Date().toISOString().split('T')[0];
//   let today = new Date().toLocaleDateString().split('T')[0];
//   return (today);
// }

export function today() { // return today's date formatted as a string per AWSDate format
  let date = new Date().toLocaleDateString().split('/'); // get today's date-time, split into month, day, year
  if (date[0].length < 2){
      date[0] = "0"+date[0];
  }
  if (date[1].length < 2){
      date[1] = "0"+date[1];
  }
  return (date[2]+"-"+date[0]+"-"+date[1])
}

export function nowHours() { // return now's hours

  let time = new Date().toLocaleTimeString('en-US', { hour12: false }).split(':'); // get now time, split into hours, mins, seconds
  return(parseInt(time[0]));
}

export function nowMinutes() { // return now's minutes

  let time = new Date().toLocaleTimeString('en-US', { hour12: false }).split(':'); // get now time, split into hours, mins, seconds
  return(parseInt(time[1]));
}

export function beforeReleaseTime(){
  if(nowHours() < 10 && nowMinutes() < 30){
    return true;
  }else{
    return false;
  }
}

export function canRelease(date){
  var jsDate = new Date(date);
  
  if(holidays.find((d) => d == date)){
    return false; 
  }else if(jsDate.getUTCDay() == 0 || jsDate.getUTCDay() == 6){
      return false;
  }else if(date<today()){
    return false;
  }else if(date == today() && !beforeReleaseTime()){
      return false;
  }else{
    return true;
  }
  
  
}

export function findPoints(releases){
  const result = releases.filter(item => item.date <= today());

  return (result.length*2);
}
