import jwt from 'jsonwebtoken'
import { promisify } from 'util'

import authConfig from '../../config/auth'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Efetue login' })
  }
  const token = authHeader.split(' ')[1]
  try {
    const decode = await promisify(jwt.verify)(token, authConfig.secret)

    req.userId = decode.id

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Efetue login' })
  }
}
