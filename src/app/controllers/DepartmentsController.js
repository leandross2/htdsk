import Department from '../models/Department'

class DepartmentController {
  async store(req, res) {
    const { name } = req.body
    const department = await Department.create({ name })
    return res.json(department)
  }
}

export default new DepartmentController()
