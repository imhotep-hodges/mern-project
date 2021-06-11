import mongodb from 'mongodb';

const ObjectId = mongodb.ObjectID

let grades

export default class usersDAO {
    static async injectDB(conn) {
      if (grades) {
        return
      }
      try {
        grades = await conn.db(process.env.TRAINING_NS).collection("grades")
      } catch (e) {
        console.error(
          `Unable to establish a collection handle in usersDAO: ${e}`,
        )
      }
    }
  
    static async getGrades({
      filters = null,
      page = 0,
      gradesPerPage = 10,
    } = {}) {
      let query
      if (filters) {
        if ("student_id" in filters) {
          query = { $text: { $search: filters["student_id"] } }
        } else if ("scores" in filters) {
          query = { "scores": { $eq: filters["scores"] } }
        } else if ("class_id" in filters) {
          query = { "class_id": { $eq: filters["class_id"] } }
        }
      }
  
      let cursor
      
      try {
        cursor = await grades
          .find(query)
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`)
        return { gradesList: [], totalNumGrades: 0 }
      }
  
      const displayCursor = cursor.limit(gradesPerPage).skip(gradesPerPage * page)
  
      try {
        const gradesList = await displayCursor.toArray()
        const totalNumGrades = await grades.countDocuments(query)
  
        return { gradesList, totalNumGrades }
      } catch (e) {
        console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`,
        )
        return { gradesList: [], totalNumGrades: 0 }
      }
    }
    static async getGradesByID(id) {
      try {
        const pipeline = [
          {
              $match: {
                  _id: new ObjectId(id),
              },
          },
                {
                    $lookup: {
                        from: "scores",
                        let: {
                            id: "$_id",
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$student_id", "$$id"],
                                    },
                                },
                            },
                            {
                                $sort: {
                                    date: -1,
                                },
                            },
                        ],
                        as: "scores",
                    },
                },
                {
                    $addFields: {
                        scores: "$scores",
                    },
                },
            ]
        return await grades.aggregate(pipeline).next()
      } catch (e) {
        console.error(`Something went wrong in getGradesByID: ${e}`)
        throw e
      }
    }
  
    static async getScores() {
      let scores = []
      try {
        scores = await grades.distinct("scores")
        return scores
      } catch (e) {
        console.error(`Unable to get scores, ${e}`)
        return scores
      }
    }
  }
