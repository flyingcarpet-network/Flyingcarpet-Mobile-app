/*
 * This function is used to estimate how long it will take to complete a task given the ETH budget.
 */

export default function estimateTimeToDone(businessType, ethCostAdjusted) {
  // This function returns an object containing the number of units of time and the type of unit of time, e.g:
  //   {
  //      number: 3,
  //      units: 'hours'
  //   }

  // This is card-coded for now, but this should probably need to be dynamic in the future ...
  switch (businessType.toLowerCase()) {
    case 'agriculture':
      return createString(2 / ethCostAdjusted);
    case 'infrastructure':
      return createString(6 / ethCostAdjusted);
    default:
      return createString(Infinity);
  }
}

function createString(time) {
  // This function creates the number + units string representing the estimate of long the task will take
  if (time === Infinity)
    return { number: Infinity, units: 'days' };
  else if (time < (1 / 24)) {
    const mins = Math.round(time * 1440);
    return { number: mins, units: 'minute' + addSCharacterIfNotOne(mins) };
  } else if (time < 1) {
    const hours = Math.round(time * 24);
    return { number: hours, units: 'hour' + addSCharacterIfNotOne(hours) };
  } else {
    const days = Math.round(time);
    return { number: days, units: 'day' + addSCharacterIfNotOne(days) };
  }
}

function addSCharacterIfNotOne(number) {
  // This function is used to add an "s" to the end of a word if the number argument is NOT equal to one (e.g. "days" vs "day")
  return (number !== 1) ? 's' : '';
}
