import Navbar from "../../components/common/Navbar";
import Hero from "../../components/home/Hero";
import Statistics from "../../components/home/Statistics";
import FeaturedPizzas from "../../components/home/FeaturedPizzas";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Offers from "../../components/home/Offers";
import Reviews from "../../components/home/Review";
import DownloadApp from "../../components/home/DownloadApp";
import Footer from "../../components/home/Footer";

function Home(){
    return(
        <div>
            <Navbar/>
            <Hero />
            <Statistics />
            <FeaturedPizzas />
            <WhyChooseUs />
            <Offers />
            <Reviews />
            <DownloadApp />
            <Footer />
            
        </div>
    );
}
export default Home;