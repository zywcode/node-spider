import {Injectable} from '@nestjs/common';
import {Puppeteer} from '../common/puppeteer';

@Injectable()
export class ParserService {

    constructor(private readonly puppeteer: Puppeteer) {
    }

    async getDouyinVideo(url: string): Promise<any> {
        return await this.puppeteer.newPage(url);
    }
}
