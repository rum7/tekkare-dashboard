import { useEffect, useState } from 'react'
import './App.css'
import { DashboardHeader } from './components/DashboardHeader'
import { CardOverview } from './components/CardOverview'
import { ChartHospitalization } from './components/ChartHospitalization'
import { ChartDocSpecialties } from './components/ChartDocSpecialties'
import { ChartHospitalDepartments } from './components/ChartHospitalDepartments'
import { DataTableCT } from './components/clinicalTrials/DataTableCT'

import { getHospitalData, getHospitalName, getFormatOverview } from './api/getHospitalData'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card } from './components/ui/card'

function App() {    
    const hospitalName: string[] = getHospitalName()
    const [hospitalPicked, setHospitalPicked] = useState<string>(hospitalName[0])
    const [hospitalData, setHospitalData] = useState([getHospitalData(0)])
    const [overviewData, setOverviewData] = useState(getFormatOverview(0))

    useEffect(() => {
        const hospitalIndex = hospitalName.indexOf(hospitalPicked)
        setHospitalData([getHospitalData(hospitalIndex)])
        setOverviewData(getFormatOverview(hospitalIndex))
    }, [hospitalPicked])
    

    return (
    <>
        <Card className='p-4 bg-[#FBFBFB] items-center'>
            <div className='flex justify-between px-6 mb-4'>
                <DashboardHeader name={hospitalData[0].name} location={hospitalData[0].location} />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Select a hospital</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Hospital list</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={hospitalPicked} onValueChange={(value) => setHospitalPicked(value)}>
                            {hospitalName.map((name: string, index: number) => (
                                <DropdownMenuRadioItem
                                    key={index}
                                    className="capitalize"
                                    value={name}                                                                
                                >
                                    {name}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-5'>
                {overviewData[0].map((data, index) => (                
                    <CardOverview 
                        key={index}
                        label={data.label} 
                        value={String(data.value)} 
                        iconType={String(data.iconType)}
                    />
                ))}
            </div>

            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-4'>
                <ChartHospitalization data={hospitalData[0].monthlyHospitalizations} />
                <ChartDocSpecialties data={hospitalData[0].doctorSpecialties}/>
                <ChartHospitalDepartments data={hospitalData[0].hospitalDepartments} />
            </div>
            
            <div className='grid gap-4 grid-cols-1'>
                <DataTableCT data={hospitalData[0].clinicalTrials} />
            </div>
        </Card>

        <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,1),rgba(255,255,255,0))] opacity-50"></div>

            {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        </div>

    </>
    )
}

export default App