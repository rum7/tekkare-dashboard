import './App.css'
import { DashboardHeader } from './components/ui/dashboardHeader'

function App() {

  return (
    <>
        <DashboardHeader name='Hôpital Saint-Jean' location='Paris, France' />

        <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
    </>
  )
}

export default App
