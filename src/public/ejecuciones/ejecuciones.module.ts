import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { EjecucionesMiddleware } from './ejecuciones.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class EjecucionesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(EjecucionesMiddleware).forRoutes('public/ejecuciones')
  }
}
