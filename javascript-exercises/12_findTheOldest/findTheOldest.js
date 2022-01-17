const findTheOldest = (people) => {
  const age = (p) =>
    (p.yearOfDeath ?? new Date().getFullYear()) - p.yearOfBirth;

  return people.reduce((oldest, person) => {
    if (oldest === undefined) return person;
    return age(oldest) < age(person) ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
