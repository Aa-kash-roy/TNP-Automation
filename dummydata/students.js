import StudentProfileModel, { deleteMany, getMaxListeners } from "../StudentProfile/models/StudentProfile.js"


export async function testStudentProfileData(){
    try{
    const refresh = await StudentProfileModel.deleteMany({}) //refresh the table on each restart

    const studentProfile = await StudentProfileModel.create({
        enrollmentNumber: "BT18CSE031",
        
        studentInfo:{
            name: "Akash Kumar",
            mobile: "1234567890",
            cgpa: 9.4,
            address: "11 street",
            semester: 5,
            branch: "CSE",
            passingYear: 2022,
            personalMail: "akshkmr@gmail.com"
        },

        studentSocial:{
            linkedin: {
                name: "Akash Kumar",
                link: "LINKEDIN LINK"
            },
            github: {
                name: "akash.github"
            },
            website: {
                name: "https://akashkumar.com"
            }
        },

        achievements: [
            {name: "ACM-ICPC Finalist"},
            {name: "Google Summer of Code 2020", link:"ACH2 LINK"},
            {name: "Codefchef 4 Star"},
            {name: "Secured 2nd Rank in Coding Competition"},
            {name: "Runner up at Smart India Hackathon"},
        ],

        publications: [
            {name: "News-App using Django", link: "PUB1 link"},
            {name: "Inventory Management System"},
            {name: "Rainfall Prediction using K-Neighbours Classification", link: "PUB3LINK"},
            {name: "Enhancing Privacy Preservation in Speech Data Publishing"},
            {name: "Touch Sensor for Projected Screen Using SDG"}
        ],

        internships: [
            {company: "Google", designation: "SDE Intern"},
            {company: "Microsoft", designation: "SDE Intern"},
        ],

        isPlaced: false
    })
}
catch(e){
    console.log(e);
}
}