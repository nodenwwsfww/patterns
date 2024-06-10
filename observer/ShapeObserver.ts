import {Shape} from "../geometry/Shape/Shape";
import {Warehouse} from "../warehouse/Warehouse";

export interface Observer {
    update(shape: Shape): void;
}

export class ShapeObserver implements Observer {
    update(shape: Shape): void {
        const warehouse = Warehouse.getInstance();
        warehouse.update(
            shape.id,
            shape.calculateArea(),
            shape.calculateVolume(),
            shape.calculatePerimeter()
        );
    }
}
