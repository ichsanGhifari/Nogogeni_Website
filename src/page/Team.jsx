import { MainContainer } from "../components/Glassmorphism/GlassElements"
import Navbar from "../components/Navbar"

const Team =()=>{
    return(
        <section className='h-screen bg-bgTeam bg-cover bg-no-repeat overflow-hidden'>
            <Navbar />
                <div className='m-auto h-1/3 p-10 absolute inset-0 w-max glassmorphism'>
                    <MainContainer>
                        <h1>DUARRrr</h1>
                    </MainContainer>
                </div>
            <style jsx>{`
           
            `}</style>
        </section>
    )
}
export default Team