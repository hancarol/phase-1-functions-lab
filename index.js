// function distanceFromHqInBlocks(block) {
//   if (block >= 42) {
//     return block - 42;
//   } else {
//     return 42 - block;
//   }
// }
// distanceFromHqInBlocks();
// function distanceFromHqInFeet(inFeet) {
//   let distanceInFeet = distanceFromHqInBlocks(inFeet);
//   return distanceInFeet * 264;
// }
// distanceFromHqInFeet();

// function distanceTravelledInFeet(start, destination) {
//   return Math.abs(start - destination) * 264;
// }
// distanceTravelledInFeet();

// function calculatesFarePrice(start, destination) {
//   let distance = distanceTravelledInFeet(start, destination);
//   if (distance <= 400) {
//     return 0;
//   } else if (distance > 400 && distance <= 2000) {
//     return (distance - 400) * 0.02;
//   } else if (distance > 2000 && distance < 2500) {
//     return 25;
//   } else {
//     return "cannot travel that far";
//   }
// }
function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    return 42 - distance;
  } else {
    return distance - 42;
  }
}

function distanceFromHqInFeet(distance) {
  const block = distanceFromHqInBlocks(distance);
  return block * 264;
}

function distanceTravelledInFeet(first, second) {
  return Math.abs(first - second) * 264;
}

function calculatesFarePrice(first, second) {
  const distanceInFeet = distanceTravelledInFeet(first, second);
  if (distanceInFeet < 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
