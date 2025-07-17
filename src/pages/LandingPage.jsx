import  Header  from "./../components/Header";
import  Hero  from "./../components/Hero";
import  Footer from "./../components/Footer";

export default function LandingPage(props) {
  return (
    <>
      <Header handleClick={props.handleClick} />
      <Hero handleClick={props.handleClick} />
      <Footer></Footer>
    </>
  );
}
