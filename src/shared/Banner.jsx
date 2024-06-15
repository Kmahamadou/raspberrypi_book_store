// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Banner = ({banner, heading, subheading, btn1, btn2}) => {
    return (
        <div className='gradientBg rounded-xl rounded-tl-[80px] rounded-br-[80px] md:p-9 px-4 py-14'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>

                        {/* banner image */}
                        <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.2}}
                        >
                            <img src={banner} className='lg:h-[386px]' alt="Un élève qui s'offre une session de lecture" />
                        </motion.div>

                        {/* Banner content */}
                        <motion.div 
                        variants={fadeIn("up", 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.2}}
                        
                        className="md:w-3/5 mx-auto">
                            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
                            <p className='text-white text-2xl mb-8'>{subheading} </p>

                                <div className='space-x-5 space-y-4'>
                                    <button className='banner-Btn'>{btn1}</button>
                                    <button className='banner-Btn'>{btn2}</button>
                                </div>
                        </motion.div>
                    </div>
                </div>
    );
};

export default Banner;