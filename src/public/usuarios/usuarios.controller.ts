import { Controller, Inject, Post, Body } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'

@Controller()
export class UsuariosController {
  private model
  private models
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {
    this.models = this.sequelize.models
    this.model = this.models.Usuario
  }

  @Post('login')
  async findAll(@Body() data) {
    const username = data.username
    const password = data.password
    const params = {
      where: { username, password },
      include: [
        { model: this.models.Rol, as: 'Rol' },
        { model: this.models.Profesional, as: 'Profesional' },
      ],
    }
    return await this.model.findOne(params)
  }
}
