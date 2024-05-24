import { Cone } from './Cone';
import { Point } from '../Point/Point';

describe('Cone', () => {
  it('should calculate the area correctly', () => {
    const cone = new Cone('1', [new Point(0, 0), new Point(0, 5)]);
    expect(cone.calculateArea()).toBeCloseTo(78.53981633974483);
  });

  it('should calculate the volume correctly', () => {
    const cone = new Cone('1', [new Point(0, 0), new Point(0, 5)]);
    expect(cone.calculateVolume()).toBeCloseTo(26.179938779914945);
  });

  it('should throw an error if less than 2 points are provided', () => {
    expect(() => new Cone('1', [new Point(0, 0)])).toThrow();
  });
});