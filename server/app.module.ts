import {Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HttpModule} from "@nestjs/axios";
import { ParserService } from './service/parser.service';
import { ParserController } from './controller/parser.controller';
import { Puppeteer } from './common/puppeteer';
import {Common} from "./common/common";

@Module({
  imports: [HttpModule],
  controllers: [ParserController],
  providers: [ParserService, Puppeteer, Common],
})
export class AppModule {}
