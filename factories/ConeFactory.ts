import { ShapeFactory } from './ShapeFactory';
import { Shape } from '../geometry/Shape/Shape';
import { PointFactory } from './PointFactory';
import { Cone } from '../geometry/Cone/Cone';

export class ConeFactory implements ShapeFactory {
  create(id: string, points: string[]): Shape {
    const pointObjects = points.map(PointFactory.fromString);
    return new Cone(id, pointObjects);
  }
}
