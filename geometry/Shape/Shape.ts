import {Point} from "../Point/Point";

export class Shape {
  constructor(private _id: string, private _points: Point[]) {}

  get id() {
    return this._id;
  }

  get points() {
    return this._points;
  }
}