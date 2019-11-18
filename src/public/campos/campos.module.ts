import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CamposMiddleware } from './campos.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class CamposModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CamposMiddleware).forRoutes('public/campos')
  }
}
