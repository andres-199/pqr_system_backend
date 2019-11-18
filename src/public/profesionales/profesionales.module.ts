import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProfesionalesMiddleware } from './profesionales.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ProfesionalesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProfesionalesMiddleware).forRoutes('public/profesionales')
  }
}
