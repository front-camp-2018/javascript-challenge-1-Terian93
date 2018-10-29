/* eslint-disable-next-line */
export const sortByWeight = arr => {

  const arrWithPriority = []; 
  const result = [];

  arr.forEach( element => {
    let priorityNumber = 0;
    const base = 10;
    const elementSplited = element.split('');
    elementSplited.forEach( digit => {
      priorityNumber += parseInt(digit, base);
    });
    arrWithPriority.push({
      'priority': priorityNumber,
      'value': element
    });
  });
  
  arrWithPriority.sort( (a, b) => {
    let comparison = 0;
    if (a.priority > b.priority) {
      comparison = 1;
    } else if (a.priority < b.priority) {
      comparison = -1;
    }
    return comparison;
  });

  for (let index = 0; index < arr.length; index++) {
    result.push( arrWithPriority[index].value );
  }

  return result;
};
