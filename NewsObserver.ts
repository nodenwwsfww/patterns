import { Observer } from './abstract/Observer';
import { Event } from './abstract/Event';
import { logger } from './utils/logger';

export class NewsObserver implements Observer {
    update(event: Event): void {
        logger.info(`NewsObserver: Received event - Type: ${event.getEventType()}, Data: ${event.getEventData()}`);
    }
}
