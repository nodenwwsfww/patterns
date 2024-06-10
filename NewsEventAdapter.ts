import {EventAdapter} from "./abstract/EventAdapter";
import {NewsEvent} from "./NewsEvent";

export class NewsEventAdapter implements EventAdapter {
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
