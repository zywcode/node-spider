import {Injectable} from "@nestjs/common";

@Injectable()
export class Common {
    response(data?: any, code?: number, msg?: string): any {
        return {
            code: code || 0,
            data: data || {},
            msg: msg || ''
        };
    }

    base64(data: any) {
        let str = typeof data === 'string' ? data : JSON.stringify(data);
        return Buffer.from(str).toString('base64');
    }
}
