import { Routes } from 'nest-router'
import { CamposModule } from './campos/campos.module'
import { ContratosModule } from './contratos/contratos.module'
import { EjecucionesModule } from './ejecuciones/ejecuciones.module'
import { EstadosModule } from './estados/estados.module'
import { PqrsModule } from './pqrs/pqrs.module'
import { PrediosModule } from './predios/predios.module'
import { ProductosAGestionarModule } from './productos_a_gestionar/productos_a_gestionar.module'
import { ProfesionalesModule } from './profesionales/profesionales.module'
import { RolesModule } from './roles/roles.module'
import { TiposPqrModule } from './tipos-pqr/tipos-pqr.module'
import { UsuariosModule } from './usuarios/usuarios.module'
import { FlowModule } from './flow/flow.module'

export const publicRoutes: Routes = [
  { path: 'campos', module: CamposModule },
  { path: 'contratos', module: ContratosModule },
  { path: 'ejecuciones', module: EjecucionesModule },
  { path: 'estados', module: EstadosModule },
  { path: 'pqrs', module: PqrsModule },
  { path: 'predios', module: PrediosModule },
  {
    path: 'productos_a_gestionar',
    module: ProductosAGestionarModule,
  },
  { path: 'profesionales', module: ProfesionalesModule },
  { path: 'roles', module: RolesModule },
  { path: 'tipos_pqr', module: TiposPqrModule },
  { path: 'usuarios', module: UsuariosModule },
  { path: 'flow', module: FlowModule },
]
