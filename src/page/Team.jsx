import { MainContainer} from "../components/Glassmorphism/GlassElements"
import Navbar from "../components/Navbar"

const Team =()=>{
    return(
        <section className='h-screen bg-bgTeam bg-cover bg-no-repeat overflow-hidden'>
            <Navbar />
                <MainContainer className='p-10 m-auto max-w-xl'>
                    <div className='text-white flex flex-col gap-5' >
                        <h2  className='  text-center italic font-bold tracking-wider '>NOGOGENI ITS TEAM</h2>
                        <p className='text-justify'>Nogogeni ITS Team is one of the vehicle research team in Institut Teknologi Sepuluh Nopember that focuses in developing environmentally friendly energy-efficient vehicles to solve the world's problem that caused by vehicles' emission. We are currently developing two vehicles that run on ethanol fuel and electricity.</p>
                        <p className='text-justify'>After proved our vehicle’s efficiency by winning two annual competition, Kontes Mobil Hemat Energi (KMHE) and Shell Eco-Marathon (SEM) Asia, we are challenging ourself to compete in the Formula Society of Automotive Engineering (FSAE).</p>
                    </div>
                </MainContainer>
            <style jsx>{`
                p{
                    text-indent:30px;
                }
            `}</style>
        </section>
    )
}
export default Team