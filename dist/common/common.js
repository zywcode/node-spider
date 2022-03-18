"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
const common_1 = require("@nestjs/common");
let Common = class Common {
    response(data, code, msg) {
        return {
            code: code || 0,
            data: data || {},
            msg: msg || ''
        };
    }
    base64(data) {
        let str = typeof data === 'string' ? data : JSON.stringify(data);
        return Buffer.from(str).toString('base64');
    }
};
Common = __decorate([
    (0, common_1.Injectable)()
], Common);
exports.Common = Common;
//# sourceMappingURL=common.js.map