import { Module } from '@nestjs/common'
import { CamposModule } from './campos/campos.module'
import { EjecucionesModule } from './ejecuciones/ejecuciones.module'
import { EstadosModule } from './estados/estados.module'
import { PqrsModule } from './pqrs/pqrs.module'
import { PrediosModule } from './predios/predios.module'
import { ProductosAGestionarModule } from './productos_a_gestionar/productos_a_gestionar.module'
import { ProfesionalesModule } from './profesionales/profesionales.module'
import { TiposPqrModule } from './tipos-pqr/tipos-pqr.module'

@Module({
  imports: [
    CamposModule,
    EjecucionesModule,
    EstadosModule,
    PqrsModule,
    PrediosModule,
    ProductosAGestionarModule,
    ProfesionalesModule,
    TiposPqrModule,
  ],
})
export class PublicModule {}
