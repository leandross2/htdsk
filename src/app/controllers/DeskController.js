import Desk from '../models/Desk'
import User from '../models/User'

class ControllerDesks {
  async store(req, res) {
    const deskExist = await Desk.findOne({
      where: {
        description: req.body.description,
        department_id: req.body.department_id
      }
    })

    if (deskExist) {
      return res.status(400).json({ error: 'Desk já cadastrado' })
    }

    const desk = await Desk.create(req.body)

    return res.json(desk)
  }

  async index(req, res) {
    const spots = await Desk.findAll({
      include: [
        {
          model: User,
          required: false,
          as: 'user',
          attributes: ['name']
        }
      ]
    })

    return res.json(spots)
  }
}

export default new ControllerDesks()
