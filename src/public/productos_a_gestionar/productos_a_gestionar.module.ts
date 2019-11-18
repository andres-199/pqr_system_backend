import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { ProductosAGestionarMiddleware } from './productos_a_gestionar.middleware'
import { CommonModule } from '../../common/common.module'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ProductosAGestionarModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProductosAGestionarMiddleware)
      .forRoutes('public/productos_a_gestionar')
  }
}
