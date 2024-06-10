import { Event } from './Event';

export interface Observer {
    update(event: Event): void;
}

export interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(event: Event): void;
}
