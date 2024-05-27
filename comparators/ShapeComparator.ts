import { Shape } from '../geometry/Shape/Shape';

export class ShapeComparator {
    static byId(a: Shape, b: Shape): number {
        return a.id.localeCompare(b.id);
    }

    static byName(a: Shape, b: Shape): number {
        return a.name.localeCompare(b.name);
    }

    static byX(a: Shape, b: Shape): number {
        return a.points[0].x - b.points[0].x;
    }

    static byY(a: Shape, b: Shape): number {
        return a.points[0].y - b.points[0].y;
    }

    static byZ(a: Shape, b: Shape): number {
        return a.points[0].z - b.points[0].z;
    }
}