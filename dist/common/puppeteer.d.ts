export declare class Puppeteer {
    constructor();
    initBroswer(): Promise<void>;
    newPage(url: string): Promise<any[]>;
}
