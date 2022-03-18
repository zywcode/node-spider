import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParserService } from './service/parser.service';
import { ParserController } from './controller/parser.controller';
import { Puppeteer } from './common/puppeteer';

@Module({
  imports: [],
  controllers: [ParserController],
  providers: [ParserService, Puppeteer],
})
export class AppModule {}
