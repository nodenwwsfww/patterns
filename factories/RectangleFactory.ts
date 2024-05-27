import { ShapeFactory } from './ShapeFactory';
import { Shape } from '../geometry/Shape/Shape';
import { PointFactory } from './PointFactory';
import { Rectangle } from '../geometry/Rectangle/Rectangle';

export class RectangleFactory implements ShapeFactory {
  create(id: string, points: string[]): Shape {
    const pointObjects = points.map(PointFactory.fromString);
    return new Rectangle(id, pointObjects);
  }
}
