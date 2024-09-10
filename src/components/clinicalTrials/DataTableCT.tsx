import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { columns } from "./columns"
import { DataTable } from "./datatable"
import { DataTableCTProps } from "@/typescript/typescript"

export const DataTableCT = ({ data }: DataTableCTProps) => {
    return (
        <Card className="shadow-none">
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