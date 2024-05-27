export class Point {
  private observers: (() => void)[] = [];

  constructor(private _x: number, private _y: number, private _z: number = 0) {}

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
    this.notifyObservers();
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
    this.notifyObservers();
  }

  get z(): number {
    return this._z;
  }

  set z(value: number) {
    this._z = value;
    this.notifyObservers();
  }

  distance(other: Point): number {
    return Math.sqrt(
        (this._x - other._x) ** 2 + (this._y - other._y) ** 2 + (this._z - other._z) ** 2
    );
  }

  static areCollinear(p1: Point, p2: Point, p3: Point): boolean {
    const v1 = [p2._x - p1._x, p2._y - p1._y, p2._z - p1._z];
    const v2 = [p3._x - p1._x, p3._y - p1._y, p3._z - p1._z];
    const crossProduct = [
      v1[1] * v2[2] - v1[2] * v2[1],
      v1[2] * v2[0] - v1[0] * v2[2],
      v1[0] * v2[1] - v1[1] * v2[0],
    ];
    return crossProduct.every(component => component === 0);
  }

  subscribe(observer: () => void): void {
    this.observers.push(observer);
  }

  private notifyObservers(): void {
    this.observers.forEach(observer => observer());
  }
}
