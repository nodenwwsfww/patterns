import { FactoryRegistry } from './factories/FactoryRegistry';
import { RectangleFactory } from './factories/RectangleFactory';
import { ConeFactory } from './factories/ConeFactory';

import { ValidatorRegistry } from './validators/ValidatorRegistry';
import { RectangleValidator } from './validators/RectangleValidator';
import { ConeValidator } from './validators/ConeValidator';

export function registerFactories(): void {
    // Register factories
    FactoryRegistry.registerFactory('Rectangle', new RectangleFactory());
    FactoryRegistry.registerFactory('Cone', new ConeFactory());
}

export function registerValidators(): void {
    // Register validators
    ValidatorRegistry.registerValidator('Rectangle', new RectangleValidator());
    ValidatorRegistry.registerValidator('Cone', new ConeValidator());
}
