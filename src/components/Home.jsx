import banner from '../assets/banner.png'
import Banner from '../shared/Banner'

const Home = () => {

        return (
            <>
            <div id='home' className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
               <Banner banner={banner} heading="Lire, car lire delivre" 
                    subheading="Découvrez la magie de la lecture: chaque livre est une aventure qui vous attend! 
                    Plongez dans des mondes fascinants, enrichissez votre esprit et laissez votre imagination s'envoler."  
                    btn1={"Lire"} 
                    btn2= {"Télécharger"}/>
            </div>

            </>
        );
}

export default Home;