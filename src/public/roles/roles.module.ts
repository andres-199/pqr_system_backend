import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { RolesMiddleware } from './terceros.middleware'
import { CommonModule } from '../../common/common.module'
import { CommonFunctionsController } from '../../common/common-functions.controller'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class RolesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RolesMiddleware).forRoutes('public/roles')
  }
}
