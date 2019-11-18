import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TiposPqrMiddleware } from './tipos-pqr.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class TiposPqrModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TiposPqrMiddleware).forRoutes('public/tipos_pqr')
  }
}
