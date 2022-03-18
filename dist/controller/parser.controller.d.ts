import { HttpService } from "@nestjs/axios";
import { Response } from 'express';
import { ParserService } from '../service/parser.service';
import { Common } from "../common/common";
export declare class ParserController {
    private readonly parserService;
    private readonly common;
    private readonly httpService;
    constructor(parserService: ParserService, common: Common, httpService: HttpService);
    douyin(res: Response, source: string): Promise<void>;
}
