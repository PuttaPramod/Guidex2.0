const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true
    },

    /* =====================================================
       SAVED ITEMS
    ===================================================== */

    savedCourses: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    savedCareers: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    savedExams: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    savedRoadmaps: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    /* =====================================================
       RECENTLY VIEWED ITEMS
    ===================================================== */

    recentCareers: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    recentCourses: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    recentExams: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    recentColleges: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    recentRoadmaps: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    /* =====================================================
       QUIZ HISTORY
    ===================================================== */

    quizHistory: {
      type: [mongoose.Schema.Types.Mixed],
      default: []
    },

    /* =====================================================
       ROADMAP PROGRESS
    ===================================================== */

    roadmapProgress: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  {
    timestamps: true
  }
);

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;