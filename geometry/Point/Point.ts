export class Point {
  constructor(private  _x: number, private _y: number) {}

  get(x) {
    return this.
  }
  distance(other: Point): number {
    const dx = other.x - this._x;
    const dy = other.y - this._y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}