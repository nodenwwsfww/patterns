import { Point } from '../geometry/Point/Point';
import { Cone } from '../geometry/Cone/Cone';
import { PointFactory } from '../factories/PointFactory';

describe('Point', () => {
    it('should correctly calculate distance between two points', () => {
        const p1 = new Point(0, 0, 0);
        const p2 = new Point(3, 4, 0);
        expect(p1.distance(p2)).toBe(5);
    });

    it('should correctly parse a point from a string', () => {
        const point = PointFactory.fromString('3,4,5');
        expect(point.x).toBe(3);
        expect(point.y).toBe(4);
        expect(point.z).toBe(5);
    });

    it('should correctly determine if three points are collinear', () => {
        const p1 = new Point(0, 0, 0);
        const p2 = new Point(1, 1, 1);
        const p3 = new Point(2, 2, 2);
        expect(Point.areCollinear(p1, p2, p3)).toBe(true);

        const p4 = new Point(1, 2, 3);
        expect(Point.areCollinear(p1, p2, p4)).toBe(false);
    });
});

describe('Cone', () => {
    const points = [
        new Point(0, 0, 3), // Apex
        new Point(0, 0, 0), // Center of base
        new Point(1, 0, 0), // Edge of base
    ];

    const cone = new Cone('1', points);

    it('should correctly calculate surface area', () => {
        const slantHeight = Math.sqrt(Math.pow(3, 2) + Math.pow(1, 2)); // 3 is the height, 1 is the radius
        const expectedArea = Math.PI * (1 + slantHeight);
        expect(cone.calculateArea()).toBeCloseTo(expectedArea, 4);
    });

    it('should correctly calculate volume', () => {
        const expectedVolume = (1 / 3) * Math.PI * Math.pow(1, 2) * 3; // 1 is the radius, 3 is the height
        expect(cone.calculateVolume()).toBeCloseTo(expectedVolume, 4);
    });

    it('should determine if the base is on a coordinate plane', () => {
        expect(cone.isBaseOnCoordinatePlane()).toBe(true);
    });

    it('should determine if it is a valid cone', () => {
        expect(cone.isCone()).toBe(true);
    });
});
