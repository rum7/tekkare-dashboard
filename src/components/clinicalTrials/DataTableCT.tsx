import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { columns } from "./columns"
import { DataTable } from "./datatable"

async function getData() {
    // Fetch data from your API here.
    return [
        {
            name: "Trial 1",
            status: "En cours",
            startDate: "2023-01-01",
            endDate: "2025-06-30",
            totalPatients: 234
        },
        {
            name: "Trial 2",
            status: "Terminé",
            startDate: "2023-01-01",
            endDate: "2023-06-30",
            totalPatients: 349
        },
        {
            name: "Trial 3",
            status: "Terminé",
            startDate: "2023-01-01",
            endDate: "2023-06-30",
            totalPatients: 1289
        },
        {
            name: "Trial 4",
            status: "En cours",
            startDate: "2023-01-01",
            endDate: "2024-12-30",
            totalPatients: 978
        }
    ]
    // return Data
}

const data = await getData()

export const DataTableCT = () => {
    return (
        <Card>
            <CardHeader className="flex flex-col items-start">
                <CardTitle>Clinical trials</CardTitle>
                <CardDescription>List of every trial currently pending or already finished</CardDescription>
            </CardHeader>
            <CardContent className="mt-0">
                <DataTable columns={columns} data={data} />            
            </CardContent>
        </Card>
    )
}