import usersDAO from '/Users/larryh1981/Documents/mern project/backend/dao/usersDAO.js'


export default class userController {
    static async apiGetGrades(req, res, next) {
      const gradesPerPage = req.query.gradesPerPage ? parseInt(req.query.gradesPerPage, 10) : 20
      const page = req.query.page ? parseInt(req.query.page, 10) : 0
  
      let filters = {}
      if (req.query.scores) {
        filters.scores = req.query.scores
      } else if (req.query.class_id) {
        filters.class_id = req.query.class_id
      } else if (req.query.student_id) {
        filters.student_id = req.query.student_id
      }
  
      const { gradesList, totalNumGrades } = await usersDAO.getGrades({
        filters,
        page,
        gradesPerPage,
      })
  
      let response = {
        scores: gradesList,
        page: page,
        filters: filters,
        entries_per_page: gradesPerPage,
        total_results: totalNumGrades,
      }
      res.json(response)
    }
    static async apiGetGradesById(req, res, next) {
      try {
        let id = req.params.id || {}
        let grades = await userDAO.getGradesByID(id)
        if (!grades) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json(grades)
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
    }
  
    static async apiGetScores(req, res, next) {
      try {
        let scores = await userDAO.getScores()
        res.json(scores)
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
    }
  }