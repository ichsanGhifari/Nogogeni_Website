import { MainContainer} from "../components/Glassmorphism/GlassElements"
import Navbar from "../components/Navbar"

const Team =()=>{
    return(
        <section className='h-screen bg-bgTeam bg-cover bg-no-repeat overflow-hidden'>
            <Navbar />
                <div className='m-auto h-1/3 absolute inset-0 w-max'>
                    <MainContainer className='p-10'>
                        <div >
                            <h2  className='non-blur text-white  text-center italic font-bold tracking-wider '>NOGOGENI ITS TEAM</h2>
                        </div>
                    </MainContainer>
                </div>
            <style jsx>{`
            `}</style>
        </section>
    )
}
export default Team