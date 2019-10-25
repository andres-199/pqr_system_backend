import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { AuxiliaresMiddleware } from './auxiliares.middleware'
import { CommonModule } from '../../common/common.module'
import { CommonFunctionsController } from '../../common/common-functions.controller'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class AuxiliaresModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuxiliaresMiddleware).forRoutes('public/auxiliares')
  }
}
