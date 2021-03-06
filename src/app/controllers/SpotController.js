import { Op } from 'sequelize'
import { isBefore, isAfter } from 'date-fns'

import workHours from '../../config/dateTime'
import Desk from '../models/Desk'
import User from '../models/User'

class SpotController {
  async store(req, res) {
    const dateNow = new Date()
    if (
      isBefore(dateNow, workHours.startOfDay) ||
      isAfter(dateNow, workHours.endOfDay)
    ) {
      return res.json({ error: 'Escritorio fechado' })
    }

    const spot = await Desk.findByPk(req.params.id)
    if (!spot) {
      return res.status(400).json({ error: 'Lugar não encontrado!' })
    }

    if (spot.status) {
      return res.status(400).json({ error: 'Lugar ocupado!' })
    }

    const userCheckined = await Desk.findOne({
      where: {
        status: req.userId
      }
    })

    if (userCheckined) {
      return res
        .status(400)
        .json({ error: 'Você precisa fazer checkout do seu lugar' })
    }

    spot.status = req.userId

    await spot.save()

    return res.status(200).json({ ok: true })
  }

  async index(req, res) {
    const spots = await Desk.findAll({
      where: {
        status: {
          [Op.ne]: null
        }
      },
      include: [
        {
          model: User,

          as: 'user',
          attributes: ['name']
        }
      ]
    })
    return res.json(spots)
  }

  async delete(req, res) {
    const spot = await Desk.findOne({ where: { status: req.userId } })

    if (!spot) {
      return res.status(400).json({ error: 'Você ainda não fez checkin' })
    }

    if (spot.status !== req.userId) {
      return res
        .status(400)
        .json({ error: 'Você não pode fazer checkout deste lugar' })
    }

    spot.status = null

    spot.save()

    return res.json({ ok: true })
  }
}

export default new SpotController()
