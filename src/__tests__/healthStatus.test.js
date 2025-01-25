import { healthStatus } from '../health_status';

test('healthStatus', () => {
    const character1 = { name: 'маг', health: 90 };
    const character2 = { name: 'лучник', health: 40 };
    const character3 = { name: 'мечник', health: 10 };

    expect(healthStatus(character1)).toBe('healthy');   // Здоровье более 50 - зелёный/healthy
    expect(healthStatus(character2)).toBe('wounded');   // Здоровье от 15 до 50 - жёлтый/wounded
    expect(healthStatus(character3)).toBe('critical');  // Менее 15 - красный/critical
});