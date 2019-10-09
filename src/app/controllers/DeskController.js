import Desk from '../models/Desk'

class ControllerDesks {
  async store(req, res) {
    // const deskExist = await Desk.findOne({
    //   where: {
    //     description: req.body.description,
    //     department_id: req.body.department_id
    //   }
    // })
    // if (deskExist) {
    //   return res.status(400).json({ error: 'Desk já cadastrado' })
    // }

    const desk = await Desk.create(req.body)
    return res.json(desk)
  }

  async index(req, res) {
    const desks = await Desk.findAll()
    res.json(desks)
  }
}

export default new ControllerDesks()
