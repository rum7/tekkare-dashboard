import './App.css'
import { DashboardHeader } from './components/DashboardHeader'
import { CardOverview } from './components/CardOverview'
import { ChartHospitalization } from './components/ChartHospitalization'
import { ChartDocSpecialties } from './components/ChartDocSpecialties'
import { ChartHospitalDepartments } from './components/ChartHospitalDepartments'

function App() {

    return (
    <>
        <DashboardHeader name='Hôpital Saint-Jean' location='Paris, France' />
        
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-5'>
            <CardOverview label='totalPatients' value='12345' iconType='users' />
            <CardOverview label='satisfactionRate' value='89%' iconType='heart' />
            <CardOverview label='totalTreatments' value='8765' iconType='pill' />
            <CardOverview label='numberOfDoctors' value='150' iconType='stethoscope' />
            <CardOverview label='numberOfNurses' value='300' iconType='clipboard' />
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <ChartHospitalization />
            <ChartDocSpecialties />
            <ChartHospitalDepartments />
        </div>
        
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
    </>
    )
}

export default App