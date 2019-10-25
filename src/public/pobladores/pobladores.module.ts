import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { PobladoresMiddleware } from './pobladores.middleware'
import { CommonModule } from '../../common/common.module'
import { CommonFunctionsController } from '../../common/common-functions.controller'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class PobladoresModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PobladoresMiddleware).forRoutes('public/pobladores')
  }
}
