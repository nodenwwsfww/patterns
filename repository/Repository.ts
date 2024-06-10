import {Shape} from "../geometry/Shape/Shape";
import {Observer} from "../observer/ShapeObserver";
import {PointFactory} from "../factories/PointFactory";
import {Warehouse} from "../warehouse/Warehouse";

export class Repository {
    private static instance: Repository;
    private figures: Map<string, Shape> = new Map();
    private observers: Observer[] = [];

    private constructor() {}

    static getInstance(): Repository {
        if (!Repository.instance) {
            Repository.instance = new Repository();
        }
        return Repository.instance;
    }

    add(shape: Shape): void {
        this.figures.set(shape.id, shape);
        this.notifyObservers(shape);
    }

    remove(id: string): void {
        const shape = this.figures.get(id);
        if (shape) {
            this.figures.delete(id);
            Warehouse.getInstance().remove(id);
            this.notifyObservers(shape);
        }
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

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    private notifyObservers(shape: Shape): void {
        this.observers.forEach(observer => observer.update(shape));
    }
    // TODO:
    updateWarehouse(shape: Shape): void {
        const warehouse = Warehouse.getInstance();
        warehouse.update(
            shape.id,
            shape.calculateArea(),
            shape.calculateVolume(),
            shape.calculatePerimeter()
        );
    }
}
