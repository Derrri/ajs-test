function sortHeroesByHealth(heroes) {
  const arr = [...heroes];
  arr.sort((a, b) => b.health - a.health);
  return arr;
}

module.exports = sortHeroesByHealth;

// Пример использования
// const heroes = [
//   { name: 'мечник', health: 10 },
//   { name: 'маг', health: 100 },
//   { name: 'лучник', health: 80 },
// ];

// console.log(sortHeroesByHealth(heroes));