import {Controller, Get, Query} from '@nestjs/common';
import {ParserService} from '../service/parser.service';

@Controller('parser')
export class ParserController {
    constructor(private readonly parserService: ParserService) {
    }

    @Get('douyin')
    async douyin(@Query('source') source: string): Promise<string> {
        let result = await this.parserService.getDouyinVideo(source);
        return result && result.length ? result[0] : '';
    }
}
