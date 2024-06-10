import { News } from '../News';
import { NewsType } from '../NewsType';

export type NewsConstructor = new () => News;

export interface AbstractFactory {
    createNews(type: NewsType): News;
}
