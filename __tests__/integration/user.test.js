import request from 'supertest'
import bcrypt from 'bcrypt'

import truncate from '../util/truncate'
import factory from '../util/factory'

import User from '../../src/app/models/User'
import app from '../../src/app'

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })
  describe('Controller', () => {
    it('deve ser possivel cadastrar um usuário', async () => {
      const user = await factory.attrs('User')
      const response = await request(app)
        .post('/users')
        .send(user)
      expect(response.body).toHaveProperty('id')
    })

    it('não deve ser possivel cadastrar dois usuarios com o mesmo email', async () => {
      const user = await factory.attrs('User')
      await request(app)
        .post('/users')
        .send(user)
      const response = await request(app)
        .post('/users')
        .send(user)

      expect(response.status).toBe(400)
    })
  })
  describe('Model', () => {
    it('a senha do usuario deve estar criptografada no banco', async () => {
      const user = await User.create({
        name: 'manolo',
        email: 'lll@sss.com',
        password: '123456'
      })

      const compareHash = await user.checkPassword('123456')
      expect(compareHash).toBe(true)
    })
  })
})
