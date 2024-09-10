export type DashboardHeaderProps = {
    name: string;
    location: string;
}

export type CardOverviewProps = {
    label: string;
    value: string;
    iconType?: string;
}

export type MonthlyDataType = {
    month: string;
    year: number;
    value: number;
}

export type ChartHospitalizationProps = {
    data: MonthlyDataType[]
}

export type DoctorSpecialtyType = {
    specialty: string;
    numberOfDoctors: number;
    satisfactionRate: string;
    fill?: string;
}

export type ChartDocSpecialtiesProps = {
    data: DoctorSpecialtyType[]
}

export type HospitalDepartmentDataType = {
    department: string;
    patientsPerDay: number;
    averageWaitTime: string;
    averageWaitTimeNum?: number;
}

export type HospitalDepartmentDataTypeProps = {
    data: HospitalDepartmentDataType[]
}

export type ClinicalTrialsType = {
    name: string
    status: string
    startDate: string
    endDate: string
    totalPatients: number
}



export type DataTableCTTypes = {
    name: string,
    status: string,
    startDate: string,
    endDate: string,
    totalPatients: number
}

export type DataTableCTProps = {
    data: DataTableCTTypes[]
}
