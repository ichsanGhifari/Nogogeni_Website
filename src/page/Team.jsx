import { MainContainer} from "../components/Glassmorphism/GlassElements"
import Lines from "../components/Lines"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer/Index"
const Team =()=>{
    return(
        <section className='h-screen bg-bgTeam bg-cover bg-no-repeat overflow-hidden bg-center object-fill'>
            <Navbar />
            <div className='h-full my-auto flex'>
                <MainContainer className='md:p-10 p-5 m-auto max-w-xl w-2/3'>
                    <div className='text-white flex flex-col md:gap-5 gap-2' >
                        <h2  className='  text-center italic font-bold tracking-wider '>NOGOGENI ITS TEAM</h2>
                        <Lines color="white"/>
                        <div className='leading-snug'>
                            <p className='text-justify'>Nogogeni ITS Team is one of the vehicle research team in Institut Teknologi Sepuluh Nopember that focuses in developing environmentally friendly energy-efficient vehicles to solve the world's problem that caused by vehicles' emission. We are currently developing two vehicles that run on ethanol fuel and electricity.</p>
                            <p className='md:mt-5 mt-1 text-justify'>After proved our vehicle’s efficiency by winning two annual competition, Kontes Mobil Hemat Energi (KMHE) and Shell Eco-Marathon (SEM) Asia, we are challenging ourself to compete in the Formula Society of Automotive Engineering (FSAE).</p>
                        </div>
                        <Lines color="white" />
                    </div>
                </MainContainer>
            </div>
            <Footer />
            <style jsx>{`
                p{
                    text-indent:30px;
                }
            `}</style>
        </section>
    )
}
export default Team