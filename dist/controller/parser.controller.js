"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const parser_service_1 = require("../service/parser.service");
const common_2 = require("../common/common");
const url = require("url");
let ParserController = class ParserController {
    constructor(parserService, common, httpService) {
        this.parserService = parserService;
        this.common = common;
        this.httpService = httpService;
    }
    async douyin(res, source) {
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
            x.data.pipe(res);
        });
    }
};
__decorate([
    (0, common_1.Get)('douyin'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('source')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ParserController.prototype, "douyin", null);
ParserController = __decorate([
    (0, common_1.Controller)('parser'),
    __metadata("design:paramtypes", [parser_service_1.ParserService, common_2.Common, axios_1.HttpService])
], ParserController);
exports.ParserController = ParserController;
//# sourceMappingURL=parser.controller.js.map