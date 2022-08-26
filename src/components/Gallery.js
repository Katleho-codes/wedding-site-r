import React from "react";
import img1 from "./images/img1.jpg";
// import GLightbox from "glightbox";
// import ligthbox from "../components/lightbox";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

const Gallery = () => {
  return (
    <>
      <div className="container gallery my-5">
        <h1 className="text-center font-weight-bold my-4">Our memories</h1>
        <div className="row my-3">
          <div className="col-sm-4">
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-4">
            <img src={img2} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-4">
            <img src={img3} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-4">
            <img src={img4} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-4">
            <img src={img5} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-4">
            <img src={img6} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
