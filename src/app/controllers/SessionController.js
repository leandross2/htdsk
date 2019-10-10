import jwt from 'jsonwebtoken'
import User from '../models/User'

import authConfig from '../../config/auth'

class SessionController {
  async store(req, res) {
    console.log('STORE!!!!!!')
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(400).json({ error: 'EMAIL Usuário invalido' })
    }
    console.log(await user.checkPassword(password))

    if (await user.checkPassword(password)) {
      return res.status(400).json({ error: 'SENHA Usuário invalido' })
    }
    const { id, name } = user

    return res.json({
      id,
      name,
      email,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

export default new SessionController()
