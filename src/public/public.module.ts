import { Module } from '@nestjs/common'
import { CamposModule } from './campos/campos.module'
import { EjecucionesModule } from './ejecuciones/ejecuciones.module'
import { EstadosModule } from './estados/estados.module'
import { PqrsModule } from './pqrs/pqrs.module'
import { PrediosModule } from './predios/predios.module'
import { ProductosAGestionarModule } from './productos_a_gestionar/productos_a_gestionar.module'
import { ProfesionalesModule } from './profesionales/profesionales.module'
import { RolesModule } from './roles/roles.module'
import { TiposPqrModule } from './tipos-pqr/tipos-pqr.module'
import { UsuariosModule } from './usuarios/usuarios.module'
import { ContratosModule } from './contratos/contratos.module'
import { FlowModule } from './flow/flow.module'

@Module({
  imports: [
    CamposModule,
    EjecucionesModule,
    EstadosModule,
    PqrsModule,
    PrediosModule,
    ProductosAGestionarModule,
    ProfesionalesModule,
    RolesModule,
    TiposPqrModule,
    UsuariosModule,
    ContratosModule,
    FlowModule,
  ],
})
export class PublicModule {}
