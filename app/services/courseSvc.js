const courseRepo = require('../repositories/courseRepo');

module.exports = {
    async getCourses(req) {
        try {
            const courses = await courseRepo.findAll();

            return courses;
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "courses not found",
                error: error.message
            }
        }
    },
    async getCourseById(req) {
        try {
            const { id } = req.params;

            const course = await courseRepo.findOne(id);

            return course;
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "course not found",
                error: error.message
            }
        }
    },
    async createCourse(req) {
        try {
            const {
                courseId,   
                title,
                description,
                img,
                instructor,
            } = req.body;

            const course = await courseRepo.create({
                courseId,       
                title,
                description,
                img,
                instructor,
                enroll: false,
                status: false,
            })

            return course;
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "failed to create course",
                error: error.message
            }
        }
    },
    async updateCourse(req) {
        try {
            const { id } = req.params;
            const {
                courseId,
                title,
                description,
                img,
                instructor,
            } = req.body;

            const course = await courseRepo.update(id, {
                courseId,
                title,
                description,
                img,
                instructor,
            })

            return course;
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "failed to update course",
                error: error.message
            }
        }
    },

    async enrollCourse(req) {
        try {
            const { id } = req.params;

            const course = await courseRepo.enroll(id, {
                enroll: true,
            })

            return course;
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "failed to enroll course",
                error: error.message
            }
        }
    },

    async unenrollCourse(req) {
        try {
            const { id } = req.params;

            const course = await courseRepo.unenroll(id, {
                enroll: false
            })

            return course;
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "failed to unenroll course",
                error: error.message
            }
        }
    },

    async completionStatus(req) {
        try {
            const { id } = req.params;

            const course = await courseRepo.completestatus(id, {
                completed: true,
            })

            return course;
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "failed to completed course",
                error: error.message
            }
        }
    },

    async deleteCourse(req) {
        try {
            const { id } = req.params;

            await courseRepo.delete(id);

            return "course deleted"
        } catch (error) {
            return {
                response: 500,
                status: "FAIL",
                message: "failed to delete to course",
                error: error.message
            }
        }
    }
}