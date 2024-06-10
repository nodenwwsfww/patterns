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
