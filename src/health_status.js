// const character1 = { name: 'маг', health: 90 };
// const character2 = { name: 'лучник', health: 40 };
// const character3 = { name: 'мечник', health: 10 };



export function healthStatus(character) {
    const health = character.health;

    if (health > 50) {
        return "healthy";
    } else if (health >= 15 && health <= 50) {
        return "wounded";
    } else {                  // health < 15
        return "critical";
    }
};

module.exports = healthStatus;

// console.log(healthStatus(character1));
// console.log(healthStatus(character2));
// console.log(healthStatus(character3));