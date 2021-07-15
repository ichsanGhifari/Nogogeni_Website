
const Homebutton=() =>{
    return(
        <>
            <div className='text-center text-white  w-4/12 mx-auto cursor-pointer '>
                <a href='/' className='button text-xl'>Read More</a>
            </div>
            <style jsx>{`
                .button {
                    transition: all 0.8s;
                    margin: 5px;
                    text-decoration: none;
                    display: inline-block;
                    height: 50px;
                    width: 150px;
                    line-height:50px;
                    text-align: center;
                }
                .button:hover {
                    box-shadow: 0 -3px white,0 3px white;
                }
            `}</style>
        </>
    )
}
export default Homebutton