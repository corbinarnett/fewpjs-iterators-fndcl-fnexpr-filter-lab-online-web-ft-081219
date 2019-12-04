// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, s) {
  return drivers.filter(driver => driver.startsWith(s))
}

function matchName(drivers, s) {
  return drivers.filter(driver => driver.name === s)
}