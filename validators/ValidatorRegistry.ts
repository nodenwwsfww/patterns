import { ShapeValidator } from './ShapeValidator';

export class ValidatorRegistry {
    private static validators: { [key: string]: ShapeValidator } = {};

    static registerValidator(figureType: string, validator: ShapeValidator): void {
        ValidatorRegistry.validators[figureType] = validator;
    }

    static getValidator(figureType: string): ShapeValidator | undefined {
        return ValidatorRegistry.validators[figureType];
    }
}
