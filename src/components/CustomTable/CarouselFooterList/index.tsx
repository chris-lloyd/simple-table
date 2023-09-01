import React from "react";
import {
  CarouselContainer,
  CarouselSlide,
  CarouselTrack,
} from "./StyeldCarouselList";

const StyledCarousel = ({
  items,
  pageIndex,
  setCurrentPageIndex,
}: {
  items: any[];
  pageIndex: number;
  setCurrentPageIndex: Function;
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const slideWidth = 100; // Adjust as needed based on slide width and margins

  const trackStyle = {
    transform: `translateX(-${currentIndex * slideWidth}px)`,
  };
  const getDataHandler = (index: number) => {
    setCurrentPageIndex(index);
  };

  return (
    <div style={{ display: "grid" }}>
      <CarouselContainer>
        <CarouselTrack 
        // style={trackStyle}
        >
          {items.map((item: number, index: number) => (
            <CarouselSlide
              selected={pageIndex === item ? true : false}
              onClick={() => getDataHandler(item)}
              key={index}
            >
              {item}
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </div>
  );
};

export default StyledCarousel;
