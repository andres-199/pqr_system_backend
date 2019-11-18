import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PqrsMiddleware } from './pqrs.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class PqrsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PqrsMiddleware).forRoutes('public/pqrs')
  }
}
