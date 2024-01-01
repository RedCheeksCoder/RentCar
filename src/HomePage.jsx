import BookForm from "./BookForm";
import Header from "./Header";
import Headline from "./Headline";
import Steps from "./Steps";
import PickCar from "./PickCar";
import Banner from "./Banner";
import WhyChoose from "./WhyChoose";
import Footer from "./Footer";
import Testimonies from "./Testimonies";
import FAQ from "./FAQ";
import AppDownload from "./AppDownload";

function HomePage() {
  return (
    <div>
      <Header />
      <Headline />
      <BookForm />
      <Steps />
      <PickCar />
      <Banner />
      <WhyChoose />
      <Testimonies />
      <FAQ />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default HomePage;
