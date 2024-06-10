export interface Event {
    getEventType(): string;
    getEventData(): string;
}

export class NewsEvent {
    private readonly type: string;
    private readonly data: string;

    constructor(type: string, data: string) {
        this.type = type;
        this.data = data;
    }

    getType(): string {
        return this.type;
    }

    getData(): string {
        return this.data;
    }
}

export class EventAdapter implements Event {
    private newsEvent: NewsEvent;

    constructor(newsEvent: NewsEvent) {
        this.newsEvent = newsEvent;
    }

    getEventType(): string {
        return this.newsEvent.getType();
    }

    getEventData(): string {
        return this.newsEvent.getData();
    }
}
