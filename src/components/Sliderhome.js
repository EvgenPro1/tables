import React, {useState} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import photo1 from './img/1625156519317162.jpg'
import photo2 from './../assets/img/max/2J4A5118.jpg'
import photo3 from './../assets/img/max/2J4A5226.jpg'


import {initialTextDate} from "../store/initialDate";

const content = [
  {
    title: "Homekins Design",
    description:
      "With precision",
    button: "More Detail",
    link: "/#",
    image: photo1
  },
  {
    title: "Interior Expertise",
    description:
      "Stylish living",
    button: "More Detail",
    link: "/#",
    image: photo2
  },
  {
    title: "Land of Residence",
    description:
      "According lifestyle",
    button: "More Detail",
    link: "/#",
    image: photo3
  }
];

export default () => (



  <Slider className="slider-wrapper" autoplay={6000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button onClick={()=> window.open(item.link, "_self")}>
                    <span className="shine"></span>
                    <span>
                      {item.button}
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </Slider>
);
