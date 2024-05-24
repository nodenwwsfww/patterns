import { Rectangle } from "../geometry/Rectangle/Rectangle";
import { Point } from "../geometry/Point/Point";

export class RectangleFactory {
  static createRectangle(id: string, points: Point[]): Rectangle {
    return new Rectangle(id, points);
  }
}