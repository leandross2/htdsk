import Department from '../models/Department'

class DepartmentController {
  async store(req, res) {
    const { name } = req.body
    const departmentExist = await Department.findOne({
      where: { description: name }
    })

    if (departmentExist) {
      res.status(400).json({ error: 'Departamento ja cadastrado' })
    }

    const department = await Department.create({ name })

    return res.json(department)
  }

  async index(req, res) {
    const department = await Department.findAll()
    return res.json(department)
  }
}

export default new DepartmentController()
