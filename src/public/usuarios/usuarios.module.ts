import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { UsuariosMiddleware } from './usuarios.middleware'
import { CommonModule } from '../../common/common.module'
import { UsuariosController } from './usuarios.controller'

@Module({
  imports: [CommonModule],
  controllers: [UsuariosController, CommonFunctionsController],
})
export class UsuariosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsuariosMiddleware).forRoutes('public/usuarios')
  }
}
