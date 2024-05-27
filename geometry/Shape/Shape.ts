import { Point } from '../Point/Point';
import {Repository} from '../../repository/Repository';

export abstract class Shape {
  protected constructor(public id: string, public name: string, public points: Point[]) {
    this.subscribeToPointChanges();
  }

  abstract calculateArea(): number;
  abstract calculateVolume(): number;
  abstract calculatePerimeter(): number;

  private subscribeToPointChanges(): void {
    this.points.forEach(point => {
      point.subscribe(() => this.notifyChange());
    });
  }

  protected notifyChange(): void {
    Repository.getInstance().updateWarehouse(this);
  }
}
