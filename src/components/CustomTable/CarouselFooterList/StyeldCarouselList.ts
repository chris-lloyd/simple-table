import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  min-width: 50px;

  /* Customize your scrollbar styles */
  scrollbar-width: thin;
  scrollbar-color: #007bff transparent;

  &::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 5px;
  }
`;

interface CarouselSlideProps {
  selected?: boolean;
}

const CarouselSlide = styled.div<CarouselSlideProps>`
  flex: 0 0 35px;
  height: 35px;
  background-color: ${(props) => (props.selected ? "#007bff" : "#f2f2f2")};
  color: ${(props) => (props.selected ? "#ffffff" : "#394a5b")};
  border: 1px solid #ccc;
  border-radius: 50%;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 3px;
`;

const CarouselButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 4px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  z-index: 1;
`;
export {
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselButton,
  NavButton,
};
