import React, { Component } from 'react'
//import Carousel from 'react-bootstrap/Carousel'
import BlueMarbleContainer from '../blueMarvel/blueMarbleContainer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselComponent extends Component{
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        
        <Carousel showThumbs={false}>
          <BlueMarbleContainer/>
         </Carousel>
    //     <AliceCarousel>
    //         <BlueMarbleContainer/>
    //   </AliceCarousel>
      );
    }
  }

export default CarouselComponent