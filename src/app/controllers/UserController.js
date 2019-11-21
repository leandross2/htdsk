import * as Yup from 'yup'

import User from '../models/User'

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'request invalida' })
    }

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

  async index(req, res) {
    const users = await User.findAll()

    if (!users) {
      return res.status(400).json('nenhum usuário cadastrado')
    }
    const usersFilered = users.map(
      ({ id, name, email, department_id, createdAt, updatedAt }) => {
        return { id, name, email, department_id, createdAt, updatedAt }
      }
    )
    return res.json(usersFilered)
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string()
        .min(6)
        .when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        )
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'request invalida' })
    }
    const { email, oldPassword } = req.body
    const { id } = req.params
    const user = await User.findByPk(id)

    if (!user) {
      return res.status(400).json({ error: 'usuário nao encontrado' })
    }
    if (user.email !== email) {
      const userExist = User.findOne({ where: { email } })

      if (userExist) {
        return res.status(400).json({ error: 'email já cadastrado' })
      }
    }
    if (oldPassword && user.checkPassword(oldPassword)) {
      return req.status(400).json({ error: 'senha atual invalida' })
    }

    return res.status(200)
  }
}

export default new UserController()
