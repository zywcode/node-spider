import { Puppeteer } from '../common/puppeteer';
export declare class ParserService {
    private readonly puppeteer;
    constructor(puppeteer: Puppeteer);
    getDouyinVideo(url: string): Promise<any>;
}
