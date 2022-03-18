import {Injectable} from "@nestjs/common";
import * as puppeteer from 'puppeteer';

@Injectable()
export class Puppeteer {
    constructor() {
    }

    async initBroswer() {
    }

    async newPage(url: string) {
        const browser = await puppeteer.launch({headless: false}); // default is true
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector('video');
        const urlList = await page.$$eval(`video > source`, list => list.map((source: any) => source.src));
        console.log(urlList);
        return urlList;
    }
}
