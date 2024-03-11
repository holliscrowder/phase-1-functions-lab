// Code your solution in this file!

const scuberHq = 42;

function distanceFromHqInBlocks(street) {
  return Math.abs(street - scuberHq);
}

function distanceFromHqInFeet(street) {
  const blocks = distanceFromHqInBlocks(street) * 264;
  return blocks;
}

function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(destination - start);
  const feet = blocks * 264;
  return feet;
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination);
  if (feet < 400) {
    return 0;
  }
  if (feet < 2000) {
    return (feet - 400) * 0.02;
  }
  if (feet < 2500) {
    return 25;
  }
  return "cannot travel that far";
}
