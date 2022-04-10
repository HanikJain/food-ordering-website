import classes from "./Carousel.module.css";
import Carousel from "react-elastic-carousel";
const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]

export default function CarouselItem(props){
    if(props.children) 
    return (
        <Carousel breakPoints = {breakPoints}>
          {props.children}
        </Carousel>
    );
    return null;

}