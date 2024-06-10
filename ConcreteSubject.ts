import { Subject, Observer } from './Observer';
import { Event } from './Event';

export class NewsSubject implements Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(event: Event): void {
        for (const observer of this.observers) {
            observer.update(event);
        }
    }
}
