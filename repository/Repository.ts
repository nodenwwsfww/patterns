import { Shape } from '../geometry/Shape/Shape';
import { Warehouse } from '../warehouse/Warehouse';
import { PointFactory } from '../factories/PointFactory';

export class Repository {
    private static instance: Repository;
    private figures: Map<string, Shape> = new Map();

    private constructor() {}

    static getInstance(): Repository {
        if (!Repository.instance) {
            Repository.instance = new Repository();
        }
        return Repository.instance;
    }

    add(shape: Shape): void {
        this.figures.set(shape.id, shape);
        this.updateWarehouse(shape);
    }

    remove(id: string): void {
        this.figures.delete(id);
        Warehouse.getInstance().remove(id);
    }

    getById(id: string): Shape | undefined {
        return this.figures.get(id);
    }

    findAllByName(name: string): Shape[] {
        return Array.from(this.figures.values()).filter((shape) => shape.name === name);
    }

    findAllInFirstQuadrant(): Shape[] {
        return Array.from(this.figures.values()).filter((shape) =>
            shape.points.every((point) => point.x > 0 && point.y > 0)
        );
    }

    findAllByAreaRange(min: number, max: number): Shape[] {
        return Array.from(this.figures.values()).filter((shape) => {
            const area = shape.calculateArea();
            return area >= min && area <= max;
        });
    }

    findAllByDistanceRange(min: number, max: number): Shape[] {
        return Array.from(this.figures.values()).filter((shape) => {
            const distance = shape.points[0].distance(PointFactory.create(0, 0));
            return distance >= min && distance <= max;
        });
    }

    sort(comparator: (a: Shape, b: Shape) => number): Shape[] {
        return Array.from(this.figures.values()).sort(comparator);
    }

    public updateWarehouse(shape: Shape): void {
        const warehouse = Warehouse.getInstance();
        warehouse.update(
            shape.id,
            shape.calculateArea(),
            shape.calculateVolume(),
            shape.calculatePerimeter()
        );
    }
}

