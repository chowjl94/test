




export const Home=() =>{





    return (
    <div className='bg-wood bg-no-repeat bg-left' >
        <div id = 'home-page' className='bg-transparent' > 
            <p className='flex justify-center'>what should i put here</p>       
        </div>

        <div id = 'products' className='flex flex-col lg:relative'>

            <header className='flex justify-center'>My Products</header>
            <div className= 'lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
                <div className = 'lg-block lg:inset-0 lg:right-0 lg:w-1/2 grid grid-cols-2 grid-rows-2 px-10 gap-4'>           
                        <img alt='' src='https://www.facebook.com/images/fb_icon_325x325.png' ></img>
                        <img alt='' src='https://www.facebook.com/images/fb_icon_325x325.png' ></img>
                        <img alt='' src='https://www.facebook.com/images/fb_icon_325x325.png' ></img>
                        <img alt='' src='https://www.facebook.com/images/fb_icon_325x325.png' ></img>
                </div>
            </div>  
        </div>

        <div id ='about-me'>
            <p className='flex justify-center'>More information about me</p>  
        </div>

        <div id ='contact-me'>
            <p className='flex justify-center'>Contact information</p> 

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