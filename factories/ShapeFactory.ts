import { Shape } from '../geometry/Shape/Shape';

export interface ShapeFactory {
    create(id: string, points: string[]): Shape;
}
