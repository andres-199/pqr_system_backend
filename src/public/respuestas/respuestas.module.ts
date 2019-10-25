import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { RespuestasMiddleware } from './terceros.middleware'
import { CommonModule } from '../../common/common.module'
import { CommonFunctionsController } from '../../common/common-functions.controller'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class RespuestasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RespuestasMiddleware).forRoutes('public/respuestas')
  }
}
