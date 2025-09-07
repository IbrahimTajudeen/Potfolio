import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'), // 👈 path to /src/public
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
