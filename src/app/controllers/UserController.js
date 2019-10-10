import User from '../models/User'

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } })

    if (userExist) {
      return res.status(400).json({ error: 'Usuário já cadastrado' })
    }
    const {
      id,
      name,
      email,
      department_id,
      updatedAt,
      createdAt
    } = await User.create(req.body)

    return res.json({
      id,
      name,
      email,
      department_id,
      updatedAt,
      createdAt
    })
  }
}

export default new UserController()
