const UserData = require('../models/UserData');


/*
|--------------------------------------------------------------------------
| Get User Data
|--------------------------------------------------------------------------
*/

const getUserData = async (req, res) => {
  try {

    /*
     * The JWT created by authController contains:
     *
     * {
     *   userId: "MongoDB user ID"
     * }
     *
     * Therefore we use req.user.userId.
     */

    const userId = req.user.userId;


    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authenticated user ID is missing.'
      });
    }


    /*
     * Find the user-specific data document.
     */

    let userData = await UserData.findOne({
      userId
    });


    /*
     * Create an empty user-data document
     * if one does not exist yet.
     */

    if (!userData) {
      userData = await UserData.create({
        userId
      });
    }


    /*
     * Return the user's data.
     */

    return res.status(200).json({
      success: true,

      data: {
        savedCourses: userData.savedCourses,

        savedCareers: userData.savedCareers,

        savedExams: userData.savedExams,

        savedRoadmaps: userData.savedRoadmaps,

        recentCareers: userData.recentCareers,

        recentCourses: userData.recentCourses,

        recentExams: userData.recentExams,

        recentColleges: userData.recentColleges,

        recentRoadmaps: userData.recentRoadmaps,

        quizHistory: userData.quizHistory,

        roadmapProgress: userData.roadmapProgress
      }
    });

  } catch (error) {

    console.error(
      'Get user data error:',
      error
    );

    return res.status(500).json({
      success: false,
      message: 'Unable to retrieve user data.'
    });
  }
};


/*
|--------------------------------------------------------------------------
| Update User Data
|--------------------------------------------------------------------------
*/

const updateUserData = async (req, res) => {
  try {

    /*
     * Get the authenticated user's ID
     * directly from the verified JWT.
     *
     * Never trust a userId sent from Angular.
     */

    const userId = req.user.userId;


    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authenticated user ID is missing.'
      });
    }


    const {
      savedCourses,
      savedCareers,
      savedExams,
      savedRoadmaps,

      recentCareers,
      recentCourses,
      recentExams,
      recentColleges,
      recentRoadmaps,

      quizHistory,
      roadmapProgress
    } = req.body;


    const updateData = {};


    /*
     * Saved Courses
     */

    if (Array.isArray(savedCourses)) {
      updateData.savedCourses = savedCourses;
    }


    /*
     * Saved Careers
     */

    if (Array.isArray(savedCareers)) {
      updateData.savedCareers = savedCareers;
    }


    /*
     * Saved Exams
     */

    if (Array.isArray(savedExams)) {
      updateData.savedExams = savedExams;
    }


    /*
     * Saved Roadmaps
     */

    if (Array.isArray(savedRoadmaps)) {
      updateData.savedRoadmaps = savedRoadmaps;
    }


    /*
     * Recent Careers
     */

    if (Array.isArray(recentCareers)) {
      updateData.recentCareers = recentCareers;
    }


    /*
     * Recent Courses
     */

    if (Array.isArray(recentCourses)) {
      updateData.recentCourses = recentCourses;
    }


    /*
     * Recent Exams
     */

    if (Array.isArray(recentExams)) {
      updateData.recentExams = recentExams;
    }


    /*
     * Recent Colleges
     */

    if (Array.isArray(recentColleges)) {
      updateData.recentColleges = recentColleges;
    }


    /*
     * Recent Roadmaps
     */

    if (Array.isArray(recentRoadmaps)) {
      updateData.recentRoadmaps = recentRoadmaps;
    }


    /*
     * Quiz History
     */

    if (Array.isArray(quizHistory)) {
      updateData.quizHistory = quizHistory;
    }


    /*
     * Roadmap Progress
     */

    if (
      roadmapProgress &&
      typeof roadmapProgress === 'object' &&
      !Array.isArray(roadmapProgress)
    ) {
      updateData.roadmapProgress = roadmapProgress;
    }


    /*
     * Update the user's MongoDB document.
     *
     * returnDocument: 'after'
     * returns the updated document.
     */

    const userData = await UserData.findOneAndUpdate(
      {
        userId
      },

      {
        $set: updateData
      },

      {
        returnDocument: 'after',

        upsert: true,

        runValidators: true,

        setDefaultsOnInsert: true
      }
    );


    /*
     * Return the updated user data.
     */

    return res.status(200).json({
      success: true,

      message: 'User data updated successfully.',

      data: {
        savedCourses: userData.savedCourses,

        savedCareers: userData.savedCareers,

        savedExams: userData.savedExams,

        savedRoadmaps: userData.savedRoadmaps,

        recentCareers: userData.recentCareers,

        recentCourses: userData.recentCourses,

        recentExams: userData.recentExams,

        recentColleges: userData.recentColleges,

        recentRoadmaps: userData.recentRoadmaps,

        quizHistory: userData.quizHistory,

        roadmapProgress: userData.roadmapProgress
      }
    });

  } catch (error) {

    console.error(
      'Update user data error:',
      error
    );

    return res.status(500).json({
      success: false,
      message: 'Unable to update user data.'
    });
  }
};


/*
|--------------------------------------------------------------------------
| Export Controllers
|--------------------------------------------------------------------------
*/

module.exports = {
  getUserData,
  updateUserData
};