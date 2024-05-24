import { Cone } from "../geometry/Cone/Cone";
import { Point } from "../geometry/Point/Point";

export class ConeFactory {
  static createCone(id: string, points: Point[]): Cone {
    return new Cone(id, points);
  }
}