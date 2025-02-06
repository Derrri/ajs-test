const sortHeroesByHealth = require('../sortHeroesByHealth');

// Проверяет, правильно ли функция сортирует массив героев по убыванию здоровья
describe('sortHeroesByHealth', () => {
    test('should sort heroes by health in descending order', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];
        const sortedHeroes = sortHeroesByHealth(heroes);

        expect(sortedHeroes).toEqual([
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ]);
    });

    test('should not modify the original array', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];
        const heroesCopy = [...heroes]; // Копируем оригинальный массив
        sortHeroesByHealth(heroes);
        expect(heroes).toEqual(heroesCopy); // Проверяем, что оригинальный массив не изменился
    });

    // Проверяет, как функция обрабатывает нескольких героев с одинаковым уровнем здоровья
    test('should handle heroes with the same health', () => {
        const heroes = [
            { name: 'герой1', health: 50 },
            { name: 'герой2', health: 50 },
        ];
        const sortedHeroes = sortHeroesByHealth(heroes);

        expect(sortedHeroes).toEqual([
            { name: 'герой1', health: 50 },
            { name: 'герой2', health: 50 },
        ]);
    });
});
