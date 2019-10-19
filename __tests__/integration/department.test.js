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
  describe('Controlller', () => {})
})
