import cv_image from "../assets/images/cv.jpg";
const Hero = (props) => {
  return (
    <div class="container is-flex is-align-items-center">
      <div className="column is-1"></div>
      <div className="column is-6 is-flex-column">
        <div className="is-flex is-flex-direction-column left-column">
          <h1 className="is-size-1 has-text-left has-text-weight-bold has-text-grey-darker">
            Build Professional<br></br> Resume
          </h1>
          <div className="has-text-grey-dark">
            Quickly create a standout CV that highlights your<br></br> skills —
            no hassle, all impact.
          </div>
          <button
            onClick={props.handleClick}
            className="button is-normal has-background-grey-darker"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="column is-6 is-justify-content-center">
        <img src={cv_image} alt="CV" />
      </div>
      <div className="column is-1"></div>
    </div>
  );
};

export default Hero;
