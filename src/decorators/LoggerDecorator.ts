interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

class AlertLogger implements Logger {
    log(message: string): void {
        alert(message);
    }
}

class LoggerDecorator implements Logger {
    protected logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    log(message: string): void {
        this.logger.log(message);
    }
}

class TimestampLogger extends LoggerDecorator {
    log(message: string): void {
        const timestamp = new Date().toISOString();
        super.log(`[${timestamp}] ${message}`);
    }
}

export {AlertLogger, ConsoleLogger, TimestampLogger};
export type { Logger };

