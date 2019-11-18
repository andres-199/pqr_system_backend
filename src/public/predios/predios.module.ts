import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PrediosMiddleware } from './predios.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class PrediosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PrediosMiddleware).forRoutes('public/predios')
  }
}
