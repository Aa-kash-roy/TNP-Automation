import corestudentprofiles, { deleteMany, getMaxListeners } from "../Admin/Years/models.js"


export async function coreStudentProfileData(){
    try{
    const refresh = await corestudentprofiles.deleteMany({}) //refresh the table on each restart

    const studentProfile = await corestudentprofiles.create({
        enrollmentNumber: "BT18CSE031",
        
        studentInfo:{
            name: "Akash Kumar",
            cgpa: 9.4,
            semester: 5,
            branch: "CSE",
            passingYear: 2022,
            gender: 'F',
            email: "bt18cse031@iiitn.ac.in"

        },

        backlogs: 1,

        internship: {
            company: "Google",
            designation: "SDE Intern",
            internshipCompleted: "Completed",
            semester: 6
        },

        placement: {
            company: "Microsoft", 
            designation: "SDE Intern", 
            compensation: "10",
            isPlaced: "Pending"
        },
    })



    const studentProfile2 = await corestudentprofiles.create({
        enrollmentNumber: "BT18CSE032",
        
        studentInfo:{
            name: "Akash Kumar",
            cgpa: 9.4,
            semester: 5,
            branch: "CSE",
            passingYear: 2022,
            gender: 'M',
            email: "bt18cse032@iiitn.ac.in"

        },

        backlogs: 1,

        internship: {
            company: "Google",
            designation: "SDE Intern",
            internshipCompleted: "Pending",
            semester: 6
        },

        placement: {
            company: "Microsoft", 
            designation: "SDE Intern", 
            compensation: "10",
            isPlaced: "Placed"
        },

    })
}
catch(e){
    console.log(e);
}
}