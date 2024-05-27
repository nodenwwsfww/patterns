import { ShapeFactory } from './ShapeFactory';

export class FactoryRegistry {
    private static factories: { [key: string]: ShapeFactory } = {};

    static registerFactory(figureType: string, factory: ShapeFactory): void {
        FactoryRegistry.factories[figureType] = factory;
    }

    static getFactory(figureType: string): ShapeFactory | undefined {
        return FactoryRegistry.factories[figureType];
    }
}
