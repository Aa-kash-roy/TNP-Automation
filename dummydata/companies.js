import companyprofiles from "../CompanyProfile/models/CompanyProfile.js"

export async function companyProfileData(){
    try{
    const refresh = await companyprofiles.deleteMany({})
    const companyProfile = await companyprofiles.create({
        name: "Microsoft",
        id: "10222",
        logo: "/img/microsoft.png",
        companySocial:{
            linkedin: {
                name: "Microsoft Linkedin",
                link: "LINKEDIN LINK"
            },
            website: {
                name: "www.microsoft.com"
            }
        },
        placementData: [
            {year:2016, students:7, ctc:5},
            {year:2017, students:8, ctc:7},
            {year:2018, students:9, ctc:6},
            {year:2019, students:10, ctc:9},
            {year:2020, students:11, ctc:10}
        ]
    })

    const companyProfile2 = await companyprofiles.create({
        name: "Some Dummy Company Name",
        id: "10223",
        logo: "/img/linkedin.png",
        companySocial:{
            linkedin: {
                name: "LINKEDIN",
                link: "LINKEDIN LINK"
            },
            website: {
                name: "WEBSITE"
            }
        },
        placementData: [
            {year:1111, students:2222, ctc:1},
            {year:2222, students:3333, ctc:2}
        ]
    })

    const companyProfile3 = await companyprofiles.create({
        name: "Google",
        id: "10224",
        logo: "/img/google.png",
        companySocial:{
            linkedin: {
                name: "LINKEDIN",
                link: "LINKEDIN LINK"
            },
            website: {
                name: "WEBSITE"
            }
        },
        placementData: [
            {year:1111, students:2222, ctc:1},
            {year:2222, students:3333, ctc:2}
        ]
    })
}
catch (e){
    console.log(e)
}
}