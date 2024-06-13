import logo from '../assets/logo.png'
import Facebook from '../assets/fb.png'
import Linkedin from '../assets/linkedin.png'

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 py-6 max-w-screen-2xl mx-auto text-white">
            <div className='my-12 flex flex-col md:flex-row gap-10'> 
                <div className='md:w-1/2 space-y-8'>
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                        <img src={logo} alt="logo"  className='w-24 inline-block items-center'/>
                        {/* <span className='text-white'>Lire</span> */}
                    </a>
                    <p className='md:w-1/2'>
                    A simple paragraph. A simple paragraph.A simple paragraph.A simple paragraph.
                    A simple paragraph.A simple paragraph.A simple paragraph.
                    </p>

                    <div>
                        <input type="email" name='email' id='email' placeholder='Votre addresse email'
                        className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                        <input type="submit" value="S'inscrire" className='bg-secondary py-2 px-4 
                        rounded-md ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all' />
                    </div>
                </div>

                {/*  */}
                <div className='md:w-1/2 flex flex-col text-center md:justify-center md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-6 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-4'>
                            <a href="/" className='block hover:text-gray-300'>Overview</a>
                            <a href="/" className='block hover:text-gray-300'>Feature</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-4'>
                            <a href="/" className='block hover:text-gray-300'>Overview</a>
                            <a href="/" className='block hover:text-gray-300'>Feature</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-4'>
                            <p className='hover:text-gray-300'>(+223) 60 69 03 43</p>
                            <p className='hover:text-gray-300'>Sotuba ACI</p>
                            <p className='hover:text-gray-300'>Rue des Armées</p>
                            <p className='hover:text-gray-300'>Bamako / Mali</p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p>BKO-TECHNOLOGIES, 2024. Tous droits reservés.</p>
                <div className='flex items-center space-x-5'>
                    <img className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' src={Linkedin} alt="" />
                    <img className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' src={Facebook} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;