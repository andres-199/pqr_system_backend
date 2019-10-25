import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { PreguntasMiddleware } from './terceros.middleware'
import { CommonModule } from '../../common/common.module'
import { CommonFunctionsController } from '../../common/common-functions.controller'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class PreguntasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreguntasMiddleware).forRoutes('public/preguntas')
  }
}
