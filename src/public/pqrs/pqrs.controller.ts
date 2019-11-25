import { Controller, Post, Body, Query, Inject } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
const nodemailer = require('nodemailer')

@Controller()
export class PqrsController {
  private model
  private models
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {
    this.models = this.sequelize.models
    this.model = this.models.Pqr
  }

  @Post()
  async create(@Body() data, @Query() queryParams) {
    const target = data.target.correo
    this.sendMail(target)
    return await this.model.create(data, queryParams)
  }

  private sendMail(target: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'btriana123456@gmail.com',
        pass: 'mauricio320',
      },
    })

    const mailOptions = {
      from: 'PQR System  <jeinnerTo@gmail.com>',
      to: target,
      subject: 'Notificación PQR System',
      text: `Tienes un nuevo PQR en tu bandeja de entrada, por favor ingresa al sistema PQR System y verifica para proceder`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  }
}
