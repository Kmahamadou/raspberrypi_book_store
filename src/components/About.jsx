import aboutImg from '../assets/aboutImg.png'
import aboutImg2 from '../assets/math.png'


// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10">
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.7}}
                
                className="md:w-1/2">
                    <img src={aboutImg} alt="" />
                </motion.div>

                {/* about content */}
                <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.7}}
                
                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Une bibliothèque virtuelle <span className='text-secondary'>pour les passionés de lecture.</span> 
                    </h2>
                    <p className='text-tartiary text-lg mb-7'>
                    Lire, car lire delivre. Lire, car lire delivre. Lire, car lire delivre. Lire, car lire delivre. 
                    Lire, car lire delivre. Lire, car lire delivre. Lire, car lire delivre. 
                    </p>
                    <button className='btnPrimary'>Nous contacter</button>
                </motion.div>
            </div>

            {/* second part */}

            <div id='about' className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <motion.div 
                        variants={fadeIn("down", 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.7}}
                
                className="md:w-1/2">
                    <img src={aboutImg2} alt="" />
                </motion.div>

                {/* about content */}
                <motion.div 
                        variants={fadeIn("up", 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.7}}
                
                
                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Apprendre <span className='text-secondary'>à votre rythme.</span> 
                    </h2>
                    <p className='text-tartiary text-lg mb-7'>
                    Lire, car lire delivre. Lire, car lire delivre. Lire, car lire delivre. Lire, car lire delivre. 
                    Lire, car lire delivre. Lire, car lire delivre. Lire, car lire delivre. 
                    </p>
                    <button className='btnPrimary'>Nous contacter</button>
                </motion.div>



            </div>
        </div>
    );
};


export default About;