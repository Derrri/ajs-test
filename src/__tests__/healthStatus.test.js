const healthStatus = require('../health_status');

describe('healthStatus', () => {
    it('should return "healthy" when health is greater than 50', () => {
        const character = { name: 'маг', health: 90 };
        expect(healthStatus(character)).toBe('healthy');
    });

    it('should return "wounded" when health is between 15 and 50', () => {
        const character = { name: 'лучник', health: 40 };
        expect(healthStatus(character)).toBe('wounded');
    });

    it('should return "critical" when health is less than 15', () => {
        const character = { name: 'мечник', health: 10 };
        expect(healthStatus(character)).toBe('critical');
    });
});