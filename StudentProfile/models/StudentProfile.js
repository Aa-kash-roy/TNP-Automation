const mongoose = require("mongoose");
const { Schema } = mongoose;

const maxUrlNameLength = 64;
const maxAdressLength = 64;
const maxNameLength = 64;
const maxCompanyLength = 32;
const maxDesignationLength = 64;

const Url = new Schema({
    name: {
        type: String,
        maxlength: maxUrlNameLength
    },
    link: {
        type: String
    }
})

const StudentInfo = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: maxNameLength
    },
    mobile: {
        type: String,
        maxlength: 10
    },
    cgpa: {
        type: Number
    },
    address: {
        type: String,
        maxlength: maxAdressLength
    },
    branch: {
        type: String,
        required: true,
    },
    semester:{
        type: Number,
        required: true,
        validate: {
            validator: y => y >=1 && y <= 8,
            message: props => `${props.value} is an invalid year value`
        }
    },
    passingYear: {
        type: Number,
        required: true
    },
    personalMail: {
        type: String
    }
})

const StudentSocial = new Schema ({
    linkedin: {
        type: Url
    },
    github: {
        type: Url
    },
    website: {
        type: Url
    }
})

const StudentInternships = new Schema({
    company: {
        type: String,
        maxlength: maxCompanyLength
    },
    designation: {
        type: String,
        maxlength: maxDesignationLength
    }
})

const StudentDetails = new Schema({
    enrollmentNumber:{
        type: String,
        required: true,
        unique: true
    },
    studentInfo: {
        type: StudentInfo,
        required: true
    },
    studentSocial: {
        type: StudentSocial,
        required: true
    },
    achievements: {
        type: [Url],
        required: true
    },
    publications: {
        type: [Url],
        required: true
    },
    internships: {
        type: [StudentInternships],
        required: true
    },
    isPlaced: {
        type: Boolean,
        required: true
    },
    applications: {
        type: [String],
        required: true
    },
    resume: {
        type: Buffer
    }
})

module.exports = mongoose.model("StudentProfileModel", StudentDetails);


