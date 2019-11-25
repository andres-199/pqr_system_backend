import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ContratosMiddleware } from './contratos.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ContratosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContratosMiddleware).forRoutes('public/contratos')
  }
}
