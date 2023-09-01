import React, { useEffect, useState } from "react";

export const useTablePagination = ({
  tableData,
  itemsPerPage = 10,
  currentPageIndex,
}: {
  tableData: any[];
  itemsPerPage: number;
  currentPageIndex: number;
}) => {
  const copyTableData = [...tableData];
  const [sliceTableData, setSliceTableData]: any = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [range, setRange] = useState(1);
  const [isRefresh, setIsRefresh] = useState(false);

  const incrementPageIndex = () => setPageIndex((index) => index + 1);
  const decrementPageIndex = () => setPageIndex((index) => index - 1);

  const refreshTable = () => setIsRefresh(!isRefresh);

  useEffect(() => {
    const range = Math.ceil(copyTableData.length / itemsPerPage);
    setRange(range);

    const startIndex = (pageIndex - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sliceData = copyTableData.slice(startIndex, endIndex);
    setSliceTableData(sliceData);

    setPageIndex(currentPageIndex);
  }, [tableData, itemsPerPage, pageIndex, currentPageIndex, isRefresh]);

  return {
    range,
    pageIndex,
    sliceTableData,
    incrementPageIndex,
    decrementPageIndex,
    refreshTable
  };
};
