import newplacements from "../Admin/NewPlacement/models.js"


export async function newPlacementData(){
    try{
        const refresh = await newplacements.deleteMany({}) //refresh the table on each restart

        const studentProfile = await newplacements.create({
            gender: ['F'],
            role: 'Intern',
            eligibleYears: ['3'],
            name: 'Google',
            ctc: "1200000",
            minCGPA: 9.5,
            maxBacklogs: 3,
            allowAll: false,
        })

        const studentProfile2 = await newplacements.create({
            gender: ['F', 'M'],
            role: 'Fulltime',
            eligibleYears: ['4'],
            name: 'Microsoft',
            ctc: "1500000",
            minCGPA: 9,
            maxBacklogs: 0,
            allowAll: true,
        })

        const studentProfile3 = await newplacements.create({
            gender: ['F', 'M'],
            role: 'Intern',
            eligibleYears: ['4'],
            name: 'Linkedin',
            ctc: "1500000",
            minCGPA: 9,
            maxBacklogs: 0,
            allowAll: true,
        })

    }
    catch(e){
        console.log(e)
    }

}