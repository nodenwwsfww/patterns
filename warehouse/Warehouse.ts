export class Warehouse {
    private static instance: Warehouse;
    private data: Map<string, { area: number; volume: number; perimeter: number }> = new Map();

    private constructor() {}

    static getInstance(): Warehouse {
        if (!Warehouse.instance) {
            Warehouse.instance = new Warehouse();
        }
        return Warehouse.instance;
    }

    update(id: string, area: number, volume: number, perimeter: number): void {
        this.data.set(id, { area, volume, perimeter });
    }

    remove(id: string): void {
        this.data.delete(id);
    }

    get(id: string): { area: number; volume: number; perimeter: number } | undefined {
        return this.data.get(id);
    }
}
