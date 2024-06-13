import Banner from "../shared/Banner";
import NewsletterImg from '../assets/newsletter.png'

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        <Banner banner={NewsletterImg} heading="Rester informer sur les dernieres publications"
            subheading="Rester informer sur les dernieres publications"  
             btn1={"Lire"} 
             btn2= {"Télécharger"}/>
        </div>  
    );
};

export default Newsletter;