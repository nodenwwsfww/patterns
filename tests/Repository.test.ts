import { PointFactory } from '../factories/PointFactory';
import { Rectangle } from '../geometry/Rectangle/Rectangle';
import { Cone } from '../geometry/Cone/Cone';
import {Repository} from '../repository/Repository';
import { ShapeComparator } from '../comparators/ShapeComparator';


describe('Repository', () => {
    let repo: Repository;

    beforeEach(() => {
        repo = Repository.getInstance();
        repo['figures'].clear(); // Clear the repository for a clean state in each test
    });

    it('should add and retrieve shapes by ID', () => {
        const rect = new Rectangle('1', [
            PointFactory.create(0, 0),
            PointFactory.create(0, 2),
            PointFactory.create(2, 2),
            PointFactory.create(2, 0),
        ]);

        repo.add(rect);
        expect(repo.getById('1')).toBe(rect);
    });

    it('should remove shapes by ID', () => {
        const rect = new Rectangle('1', [
            PointFactory.create(0, 0),
            PointFactory.create(0, 2),
            PointFactory.create(2, 2),
            PointFactory.create(2, 0),
        ]);

        repo.add(rect);
        repo.remove('1');
        expect(repo.getById('1')).toBeUndefined();
    });

    it('should find all shapes in the first quadrant', () => {
        const rect1 = new Rectangle('1', [
            PointFactory.create(0, 0),
            PointFactory.create(0, 2),
            PointFactory.create(2, 2),
            PointFactory.create(2, 0),
        ]);
        const rect2 = new Rectangle('2', [
            PointFactory.create(1, 1),
            PointFactory.create(1, 3),
            PointFactory.create(3, 3),
            PointFactory.create(3, 1),
        ]);

        repo.add(rect1);
        repo.add(rect2);

        const shapesInFirstQuadrant = repo.findAllInFirstQuadrant();
        expect(shapesInFirstQuadrant).toContain(rect2);
        expect(shapesInFirstQuadrant).not.toContain(rect1);
    });

    it('should sort shapes by ID', () => {
        const rect1 = new Rectangle('1', [
            PointFactory.create(0, 0),
            PointFactory.create(0, 2),
            PointFactory.create(2, 2),
            PointFactory.create(2, 0),
        ]);
        const rect2 = new Rectangle('2', [
            PointFactory.create(1, 1),
            PointFactory.create(1, 3),
            PointFactory.create(3, 3),
            PointFactory.create(3, 1),
        ]);

        repo.add(rect2);
        repo.add(rect1);

        const sortedShapes = repo.sort(ShapeComparator.byId);
        expect(sortedShapes[0].id).toBe('1');
        expect(sortedShapes[1].id).toBe('2');
    });

    it('should sort shapes by name', () => {
        const rect = new Rectangle('1', [
            PointFactory.create(0, 0),
            PointFactory.create(0, 2),
            PointFactory.create(2, 2),
            PointFactory.create(2, 0),
        ]);
        const cone = new Cone('2', [
            PointFactory.create(0, 0, 3),
            PointFactory.create(0, 0, 0),
            PointFactory.create(1, 0, 0),
        ]);

        repo.add(cone);
        repo.add(rect);

        const sortedShapes = repo.sort(ShapeComparator.byName);
        expect(sortedShapes[0].name).toBe('Cone');
        expect(sortedShapes[1].name).toBe('Rectangle');
    });

    it('should sort shapes by X coordinate of the first point', () => {
        const rect1 = new Rectangle('1', [
            PointFactory.create(2, 0),
            PointFactory.create(2, 2),
            PointFactory.create(4, 2),
            PointFactory.create(4, 0),
        ]);
        const rect2 = new Rectangle('2', [
            PointFactory.create(1, 1),
            PointFactory.create(1, 3),
            PointFactory.create(3, 3),
            PointFactory.create(3, 1),
        ]);

        repo.add(rect1);
        repo.add(rect2);

        const sortedShapes = repo.sort(ShapeComparator.byX);
        expect(sortedShapes[0].points[0].x).toBe(1);
        expect(sortedShapes[1].points[0].x).toBe(2);
    });

    it('should sort shapes by Y coordinate of the first point', () => {
        const rect1 = new Rectangle('1', [
            PointFactory.create(0, 2),
            PointFactory.create(0, 4),
            PointFactory.create(2, 4),
            PointFactory.create(2, 2),
        ]);
        const rect2 = new Rectangle('2', [
            PointFactory.create(1, 1),
            PointFactory.create(1, 3),
            PointFactory.create(3, 3),
            PointFactory.create(3, 1),
        ]);

        repo.add(rect1);
        repo.add(rect2);

        const sortedShapes = repo.sort(ShapeComparator.byY);
        expect(sortedShapes[0].points[0].y).toBe(1);
        expect(sortedShapes[1].points[0].y).toBe(2);
    });

    it('should sort shapes by Z coordinate of the first point', () => {
        const cone1 = new Cone('1', [
            PointFactory.create(0, 0, 2), // Apex
            PointFactory.create(0, 0, 0), // Center of base
            PointFactory.create(1, 0, 0),
        ]);
        const cone2 = new Cone('2', [
            PointFactory.create(0, 0, 3), // Apex
            PointFactory.create(0, 0, 0), // Center of base
            PointFactory.create(1, 0, 0),
        ]);

        repo.add(cone2);
        repo.add(cone1);

        const sortedShapes = repo.sort(ShapeComparator.byZ);
        expect(sortedShapes[0].points[0].z).toBe(2);
        expect(sortedShapes[1].points[0].z).toBe(3);
    });
});
