import Desk from '../models/Desk'
import User from '../models/User'

class SpotController {
  async update(req, res) {
    const spot = await Desk.findByPk(req.param.id)

    if (spot.status) {
      return res.status(400).json({ error: 'Lugar ocupado!' })
    }

    spot.status = req.body.userIdname

    await spot.save()

    return res.status(200).json({ ok: true })
  }

  async index(req, res) {
    const spots = await Desk.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name']
        }
      ]
    })
    return res.json(spots)
  }
}

export default new SpotController()
