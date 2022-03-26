import corestudentprofiles, { deleteMany, getMaxListeners } from "../Admin/Years/models.js"


export async function coreStudentProfileData(){
    try{
    const refresh = await corestudentprofiles.deleteMany({}) //refresh the table on each restart

    const studentProfile = await corestudentprofiles.create({
        enrollmentNumber: "BT18CSE031",
        
        studentInfo:{
            name: "Akash Kumar",
            mobile: "1234567890",
            cgpa: 9.4,
            semester: 5,
            branch: "CSE",
            passingYear: 2022,
            gender: 'F'
        },

        backlogs: 1,

        internship: {
            company: "Google",
            designation: "SDE Intern",
            internshipCompleted: true,
            semester: 6
        },

        placement: {
            company: "Microsoft", 
            designation: "SDE Intern", 
            compensation: "10",
            isPlaced: true
        }
    })



    const studentProfile2 = await corestudentprofiles.create({
        enrollmentNumber: "BT18CSE032",
        
        studentInfo:{
            name: "Akash Kumar",
            mobile: "1234567890",
            cgpa: 9.4,
            semester: 5,
            branch: "CSE",
            passingYear: 2022,
            gender: 'M'
        },

        backlogs: 1,

        internship: {
            company: "Google",
            designation: "SDE Intern",
            internshipCompleted: true,
            semester: 6
        },

        placement: {
            company: "Microsoft", 
            designation: "SDE Intern", 
            compensation: "10",
            isPlaced: true
        }
    })
}
catch(e){
    console.log(e);
}
}