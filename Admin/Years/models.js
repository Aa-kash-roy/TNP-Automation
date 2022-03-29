const mongoose = require("mongoose");
const { Schema } = mongoose;

const maxNameLength = 64;
const maxCompanyLength = 32;
const maxDesignationLength = 64;



const StudentInfo = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: maxNameLength
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    cgpa: {
        type: Number,
        required: true
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
    gender: {
        type: String,
        required: true,
        validate: {
            validator: g => g === 'M' || g === 'F',
            message: props => `Gender must be either M or F`
        }
    },
    email: {
        type: String,
        required: true
    }
})

//TO DO: ADD FIELD FOR OFFER LETTER, INTERNSHIP COMPLETION CERTIFICATE, INTERNSHIP ASSESSMENT FORM
//TO DO: LOOK INTO DATE TYPE
const StudentInternship = new Schema({
    internshipCompleted: {
        type: Boolean,
        required: true
    },
    company: {
        type: String,
        maxlength: maxCompanyLength,
    },
    designation: {
        type: String,
        maxlength: maxDesignationLength,
    },
    semester: {
        type: Number,
    },
    offerLetter: {
        type: Buffer
    },
    internshipCompletion: {
        type: Buffer
    },
    internshipAssessment: {
        type: Buffer
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
})


//TO DO: ADD FIELD FOR OFFER LETTER
const StudentPlacement = new Schema({
    isPlaced: {
        type: Boolean,
        required: true
    },
    company: {
        type: String,
        maxlength: maxCompanyLength
    },
    designation: {
        type: String,
        maxlength: maxDesignationLength
    },
    compensation: {
        type: Number,
    },
    offerLetter: {
        type: Buffer
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
    backlogs: {
        type: Number,
        required: true
    },
    internship: {
        type: StudentInternship,
        required: true
    },
    placement: {
        type: StudentPlacement,
        required: true
    }
})

module.exports = mongoose.model("corestudentprofiles", StudentDetails);


