import React, { useEffect, useState } from "react";
import { TableFooterStyled } from "../StyleComponentTable";
import CarouselFooterList from "../CarouselFooterList";

const CustomFooter = ({
  pageIndex,
  range,
  setCurrentPageIndex,
}: {
  pageIndex: number;
  range: number;
  setCurrentPageIndex: Function;
}) => {
  const [listRange, setListRange]: any = useState([]);
  useEffect(() => {
    let rangeArr = [];
    for (let i = 0; i < range; i++) {
      rangeArr.push(i + 1);
    }
    setListRange(rangeArr);
  }, [range]);

  return (
    <TableFooterStyled>
      <CarouselFooterList
        items={listRange}
        pageIndex={pageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
    </TableFooterStyled>
  );
};

export default CustomFooter;
