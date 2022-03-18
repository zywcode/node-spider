import {Controller, Get, Query, Res} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {Response} from 'express';
import {ParserService} from '../service/parser.service';
import {Common} from "../common/common";
import * as url from "url";

@Controller('parser')
export class ParserController {
    constructor(private readonly parserService: ParserService, private readonly common: Common, private readonly httpService: HttpService) {
    }

    @Get('douyin')
    async douyin(@Res() res: Response, @Query('source') source: string) {
        console.log(source);
        let data = await this.parserService.getDouyinVideo(source);
        let result = {
            url: data && data.length ? data[0] : ''
        };
        console.log(source);
        source = result.url;
        let obj = url.parse(source);
        console.log(obj);
        const pathname = obj.pathname;
        const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
        res.setHeader('Content-Disposition', `attachment; filename=douyin.mp4`);
        console.log(new Date());
        let observable = this.httpService.request({
            method: 'get',
            url: source,
            responseType: 'stream'
        });
        console.log(observable);
        observable.subscribe((x) => {
            console.log(new Date());
            // console.log(x);
            x.data.pipe(res);
        });
        // return this.common.response(result);
    }
}
