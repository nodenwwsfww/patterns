export interface EventAdapter {
    getEventType(): string;
    getEventData(): string;
}