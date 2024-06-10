import { NewsSubject } from './ConcreteSubject';
import { NewsObserver } from './ConcreteObserver';
import { NewsEvent, EventAdapter } from './Event';
import { NewsType } from './NewsType';
import { NewsFactory } from "./NewsFactory";

const factory = new NewsFactory();

const sportsNews = factory.createNews(NewsType.Sports);
const politicsNews = factory.createNews(NewsType.Politics);

const newsSubject = new NewsSubject();
const newsObserver = new NewsObserver();

newsSubject.addObserver(newsObserver);

const sportsEvent = new NewsEvent(sportsNews.getTitle(), sportsNews.getContent());
const politicsEvent = new NewsEvent(politicsNews.getTitle(), politicsNews.getContent());

const adaptedSportsEvent = new EventAdapter(sportsEvent);
const adaptedPoliticsEvent = new EventAdapter(politicsEvent);

newsSubject.notifyObservers(adaptedSportsEvent);
newsSubject.notifyObservers(adaptedPoliticsEvent);
