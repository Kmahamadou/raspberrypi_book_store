
// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";


const Activity = () => {

    const activities = [
        {
            name:"Concours de lecture", 
            host:"Ecole organisatrice", 
            description:"Le concours de lecture comporte deux activités: lecture et rédaction",
            green:"/assets/rectangle18.png",
        },
        {
            name:"Concours de lecture", 
            host:"Ecole organisatrice", 
            description:"Le concours de lecture comporte deux activités: lecture et rédaction",
            green:"/assets/rectangle18.png"
        },
        {
            name:"Concours de lecture", 
            host:"Ecole organisatrice", 
            description:"Le concours de lecture comporte deux activités: lecture et rédaction",
            green:"/assets/rectangle18.png"
        },
    ]


    return (
        <div id="activities" className="md:px-14 p-4 max-w-s mx-auto py-16">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Les activités de lecture</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4">
                    Des concours de lecture, de rédaction, 
                    et bien d'autres sont organisé par les écoles 
                    pour encourager les apprenants. 
                </p>

                {/*  */}
                <motion.div
                        variants={fadeIn("up", 0.35)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.7}}
                
                
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                    {
                        activities.map((activity, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                            <h3 className="text-3xl font-bold text-center text-primary">{activity.name}</h3>
                            <p className="mt-5 text-center text-secondary text-2xl font-bold">{activity.host}</p>
                            <p className="text-tartiary text-center my-5">{activity.description}</p>
                            <ul className="mt-4 space-y-2 px-4">
                                <li className="flex gap-3 items-center">
                                    <img src={activity.green} alt="" className="w-4 h-4" />
                                    Caracteristique ...
                                </li>
                                <li className="flex gap-3 items-center">
                                    <img src={activity.green} alt="" className="w-4 h-4" />
                                    Caracteristique ...
                                </li>
                                <li className="flex gap-3 items-center">
                                    <img src={activity.green} alt="" className="w-4 h-4" />
                                    Caracteristique ...
                                </li>
                                <li className="flex gap-3 items-center">
                                    <img src={activity.green} alt="" className="w-4 h-4" />
                                    Caracteristique ...
                                </li>
                                <li className="flex gap-3 items-center">
                                    <img src={activity.green} alt="" className="w-4 h-4" />
                                    Caracteristique ...
                                </li>
                            </ul>
                            <div className="w-full mx-auto mt-8 flex items-center justify-center">
                                <button className="btnPrimary">Inscription</button>
                            </div>
                        </div>)
                    }
                </motion.div>
                <div></div>
            </div>
        </div>
    );
};

export default Activity;