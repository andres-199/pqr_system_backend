import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { FlowMiddleware } from './flow.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class FlowModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FlowMiddleware).forRoutes('public/flow')
  }
}
