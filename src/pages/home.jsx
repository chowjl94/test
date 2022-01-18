




export const Home=() =>{





    return (
    <div className='bg-wood bg-no-repeat bg-left' >
        <div id = 'home-page' className='bg-transparent' > 
        <header className='flex justify-center'>Mutou</header>
            <div><br></br></div>      
        </div>

        <div id = 'products' className='flex flex-col lg:relative'>

            <header className='flex justify-center'>My Products</header>
            <div className= 'lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
                
                <div className = 'lg gap-4'>
                    <img src="../images/logo.png" alt=''></img>       

                </div>
            </div>  
            <br></br>
        </div>
        

        <div id ='about-me'>
            <header className='flex justify-center'>About me</header>
            <br></br>
        </div>
        
        <div id ='contact-me'>
        <header className='flex justify-center'>Contact Info Contact Info</header>
        <br></br>  
        <br></br>
        <br></br>
        <br></br>
        <br></br> 
        <br></br>
        <br></br>
        </div>

        <div id = 'connect-with-me' className='inset-x-0 bottom-0'>
                <div class="space-x-1 border-solid border-4 border-light-blue-500">
                    <div className='flex justify-center'>
                        <p className='p-2 font-bold'>Connect with me : </p>
                        <a href='https://www.google.com/' rel="noopener noreferrer" target='_blank'>
                            <img className='rounded-full h-10 w-10 mr-2' src ='https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg' alt=''></img>
                        </a>

                        <a href='https://www.google.com/' rel="noopener noreferrer" target='_blank'>
                            <img className='rounded-full h-10 w-10 mr-2' src = 'https://www.facebook.com/images/fb_icon_325x325.png' alt=""/>
                        </a>
                    </div>
                </div>
            

        </div>


    </div>
    )
}