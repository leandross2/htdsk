import { Op } from 'sequelize'

import Desk from '../models/Desk'
import User from '../models/User'

class SpotController {
  async update(req, res) {
    const spot = await Desk.findByPk(req.params.id)

    if (spot.status) {
      return res.status(400).json({ error: 'Lugar ocupado!' })
    }

    spot.status = req.body.userId

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
    /**
     * TODO
     * FIXME: somente quem está no lugar pode alterar o status
     */

    const { id } = req.params

    const spot = await Desk.findByPk(id)

    if (!spot) {
      return res.status(400).json({ error: 'Lugar não encontrado' })
    }

    spot.status = null

    spot.save()

    return res.json(spot)
  }
}

export default new SpotController()
