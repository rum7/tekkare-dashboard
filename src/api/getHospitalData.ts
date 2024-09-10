import dataJSON from '@/data/data_exemple1.json'

export const getHospitalData = (hospitalIndex: number) => {
    const rawData = dataJSON
    return rawData[hospitalIndex]
}

export const getHospitalName = () => {
    return dataJSON.map(hospital => hospital.name)
}

export const getFormatOverview = (hospitalIndex: number) => {
    const rawData = dataJSON
    return [rawData[hospitalIndex]].map(data => {
        return [
            {
                iconType: "totalPatients",
                label: "Total patients",
                value: data.overview.totalPatients
            },
            {
                iconType: "satisfactionRate",
                label: "Satisfaction rate",
                value: data.overview.satisfactionRate
            },
            {
                iconType: "totalTreatments",
                label: "Total treatments",
                value: data.overview.totalTreatments
            },
            {
                iconType: "numberOfDoctors",
                label: "Number of doctors",
                value: data.overview.numberOfDoctors
            },
            {
                iconType: "numberOfNurses",
                label: "Number of nurses",
                value: data.overview.numberOfNurses
            },
        ]
    })
}