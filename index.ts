import { NewsSubject } from './NewsSubject';
import { NewsObserver } from './NewsObserver';
import { NewsEvent } from './NewsEvent';

import { NewsType } from './NewsType';
import { NewsFactory } from "./NewsFactory";
import { NewsEventAdapter } from "./NewsEventAdapter";

const factory = new NewsFactory();

const sportsNews = factory.createNews(NewsType.Sports);
const politicsNews = factory.createNews(NewsType.Politics);

const newsSubject = new NewsSubject();
const newsObserver = new NewsObserver();

newsSubject.addObserver(newsObserver);

const sportsEvent = new NewsEvent(sportsNews.getTitle(), sportsNews.getContent());
const politicsEvent = new NewsEvent(politicsNews.getTitle(), politicsNews.getContent());

const adaptedSportsEvent = new NewsEventAdapter(sportsEvent);
const adaptedPoliticsEvent = new NewsEventAdapter(politicsEvent);

newsSubject.notifyObservers(adaptedSportsEvent);
newsSubject.notifyObservers(adaptedPoliticsEvent);
