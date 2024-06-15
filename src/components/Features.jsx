import experiment from '../assets/experiment.png'
import reading from '../assets/reading.png'
import science from '../assets/science.png'

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";


const Features = ({banner, heading, subheading, btn1, btn2}) => {
    return (
        <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='features'>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:true, amount:0.3}}
                
                className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
                        Livres par categorie                    </h3>
                    <p className="text-base text-primary">
                    Les domaines couverts par le bibliothèque. Les domaines couverts par le bibliothèque. Les domaines couverts par le bibliothèque. Les domaines couverts par le bibliothèque...
                    </p>
                </motion.div>

                {/* Feature cards */}
                <motion.div 
                        variants={fadeIn("up", 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.2}}


                className="w-full lg:w-3/4">
                    <div className='grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-12 gap-8'>

                    <div className='bg-[rgba(255,255,255, 0.4)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div>
                            <img src={reading} alt="Feature img" />
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Litterature</h5>
                        </div>
                    </div>


                    <div className='bg-[rgba(255,255,255, 0.4)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div>
                            <img src={science} alt="Feature img" />
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Sciences</h5>
                        </div>
                    </div>

                    <div className='bg-[rgba(255,255,255, 0.4)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div>
                            <img src={experiment} alt="Feature img" />
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Experimentation</h5>
                        </div>
                    </div>
                    </div>
                </motion.div>
            </div>           
        </div>
    );
};

export default Features;