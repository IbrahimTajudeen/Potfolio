import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { join } from 'path';
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  
  
  app.useStaticAssets(join(__dirname, '..', 'src', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));

  //app.use('/public', express.static(join(__dirname, '..', 'public')));
  //app.use('/public', express.static(join(__dirname, 'public')));
  
  app.setViewEngine('ejs');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
