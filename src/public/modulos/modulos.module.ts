import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { ModulosMiddleware } from './modulos.middleware'
import { CommonModule } from '../../common/common.module'
import { CommonFunctionsController } from '../../common/common-functions.controller'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ModulosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModulosMiddleware).forRoutes('public/modulos')
  }
}
