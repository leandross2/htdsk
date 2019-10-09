import User from '../models/User'

class UserController {
  async store(req, res) {
    console.log(req.body)
    const userExist = await User.findOne({ where: { email: req.body.email } })

    if (userExist) {
      return req.status(400).json({ error: 'Usuário já cadastrado' })
    }

    const user = User.create(req.body)
    return res.json(user)
  }
}

export default new UserController()
