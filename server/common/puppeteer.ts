import {Injectable} from "@nestjs/common";
import * as puppeteer from 'puppeteer';

@Injectable()
export class Puppeteer {
    private browser;
    constructor() {
        this.initBroswer();
    }

    async initBroswer() {
        this.browser = await puppeteer.launch({headless: false}); // default is true
    }

    async newPage(url: string) {
        const page = await this.browser.newPage();
        await page.goto(url);
        await page.waitForSelector('video');
        const urlList = await page.$$eval(`video > source`, list => list.map((source: any) => source.src));
        console.log(urlList);
        return urlList;
    }
}
