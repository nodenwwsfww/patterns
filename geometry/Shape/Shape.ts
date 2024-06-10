import { Point } from '../Point/Point';
import { Repository } from '../../repository/Repository';

export abstract class Shape {
  protected constructor(public id: string, public name: string, public points: Point[]) {}

  abstract calculateArea(): number;
  abstract calculateVolume(): number;
  abstract calculatePerimeter(): number;

  protected notifyChange(): void {
    Repository.getInstance().updateWarehouse(this);
  }

  public updatePoint(index: number, newX: number, newY: number): void {
    if (index >= 0 && index < this.points.length) {
      this.points[index] = new Point(newX, newY);
      this.notifyChange();
    } else {
      throw new Error("Point index out of range");
    }
  }

  public updatePoints(newPoints: Point[]): void {
    if (newPoints.length === this.points.length) {
      this.points = newPoints;
      this.notifyChange();
    } else {
      throw new Error("Number of points must match the original");
    }
  }
}
