export interface News {
    getTitle(): string;
    getContent(): string;
}

export class SportsNews implements News {
    getTitle(): string {
        return "Sports News";
    }
    getContent(): string {
        return "Content of Sports News";
    }
}

export class PoliticsNews implements News {
    getTitle(): string {
        return "Politics News";
    }
    getContent(): string {
        return "Content of Politics News";
    }
}

export class TechnologyNews implements News {
    getTitle(): string {
        return "Technology News";
    }
    getContent(): string {
        return "Content of Technology News";
    }
}
