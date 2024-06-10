import { News, SportsNews, PoliticsNews, TechnologyNews } from './News';
import { NewsType } from './NewsType';
import {AbstractFactory, NewsConstructor} from "./AbstractFactory";

export class NewsFactory implements AbstractFactory {
    private newsMap: Map<NewsType, NewsConstructor>;

    constructor() {
        this.newsMap = new Map<NewsType, NewsConstructor>([
            [NewsType.Sports, SportsNews],
            [NewsType.Politics, PoliticsNews],
            [NewsType.Technology, TechnologyNews]
        ]);
    }

    createNews(type: NewsType): News {
        const NewsClass = this.newsMap.get(type);
        if (!NewsClass) {
            throw new Error('Unknown news type');
        }
        return new NewsClass();
    }
}
