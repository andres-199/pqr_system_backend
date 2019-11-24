import { Controller, Get, Inject } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'

@Controller()
export class ProfesionalesController {
  private model
  private models
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {
    this.models = this.sequelize.models
    this.model = this.models.Profesional
  }
  @Get('crud')
  async findAll() {
    const params = {
      include: [
        {
          model: this.models.Usuario,
          as: 'Usuario',
          include: [{ model: this.models.Rol, as: 'Rol' }],
        },
      ],
    }
    return await this.model.findAll(params)
  }
}
