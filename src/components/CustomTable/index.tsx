import React, { useState } from "react";
import {
  MainTable,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./StyleComponentTable";
import { columnType, dataType } from "./types/table";
import { useTablePagination } from "../../hook/useTablePagination";
import CustomFooter from "./Footer";
import {
  AiOutlineSortDescending,
  AiOutlineSortAscending,
} from "react-icons/ai";
import { StyledInput } from "./SearchTable/StyledInput";

// need to check sorting function
const StyledTableComponent = ({ data = [], columns = [] }: dataType) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [dataState, setDataState] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const { pageIndex, range, sliceTableData, refreshTable } = useTablePagination(
    {
      tableData: dataState,
      currentPageIndex: currentPageIndex,
      itemsPerPage: 10,
    }
  );
  const extractedObject = columns.reduce((result: any, obj: any) => {
    result[obj.dataIndex] = "none";
    return result;
  }, {});

  const [sortState, setSortState] = useState(extractedObject);

  const sortOperation = (dataIndex: string) => {
    if (sortState[dataIndex] === "none") {
      setSortState((currValue: any) => ({ ...currValue, [dataIndex]: "asc" }));
      const sorting = dataState.sort((a:any, b:any) =>
        a[dataIndex].localeCompare(b[dataIndex])
      );
      setDataState(sorting);
    }
    if (sortState[dataIndex] === "asc") {
      setSortState((currValue: any) => ({ ...currValue, [dataIndex]: "desc" }));
      const sorting = dataState.sort((a:any, b:any) =>
        b[dataIndex].localeCompare(a[dataIndex])
      );
      setDataState(sorting);
    }
    if (sortState[dataIndex] === "desc") {
      setSortState((currValue: any) => ({ ...currValue, [dataIndex]: "none" }));
      setDataState(dataState);
    }
    refreshTable();
  };

  const searchTableHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (!e.target.value) {
      setDataState(data);
    } else {
      const searchData = data.filter((dataItem: any) => {
        let countOccurence = 0;
        const valuesArr = Object.values(dataItem);
        const jointString = valuesArr.join("");
        const splitJointString = jointString.split("");
        const uniqueArray = [...new Set(splitJointString)];
        const splitSearchText = e.target.value.split("");
        const uniqueArray2 = [...new Set(splitSearchText)];

        uniqueArray.some((item) => {
          const test = splitSearchText
            .toString()
            .toLowerCase()
            .includes(item.toString().toLowerCase());
          test && countOccurence++;
        });

        const getPercentage = (countOccurence / uniqueArray2.length) * 100;

        return getPercentage >= 70;
      });
      setDataState(searchData);
      setCurrentPageIndex(1);
    }

    return refreshTable();
  };
  return (
    <>
      <StyledInput
        placeholder="Search Table ..."
        value={inputValue}
        onChange={searchTableHandler}
      />
      <div style={{ display: "grid", justifyItems: "center" }}>
        <MainTable>
          <TableHeader>
            <tr>
              {columns.map((columItem: columnType, index: number) => {
                const sortIconType = () => {
                  if (sortState[columItem.dataIndex] === "none") {
                    return (
                      <AiOutlineSortAscending
                        onClick={() => sortOperation(columItem.dataIndex)}
                        size={20}
                      />
                    );
                  }
                  if (sortState[columItem.dataIndex] === "asc") {
                    return (
                      <AiOutlineSortDescending
                        color="#007bff"
                        onClick={() => sortOperation(columItem.dataIndex)}
                        size={20}
                      />
                    );
                  }
                  if (sortState[columItem.dataIndex] === "desc") {
                    return (
                      <AiOutlineSortAscending
                        color="#007bff"
                        onClick={() => sortOperation(columItem.dataIndex)}
                        size={20}
                      />
                    );
                  }
                };

                return (
                  <TableHeaderCell key={index}>
                    {columItem.label} {columItem.sort && sortIconType()}
                  </TableHeaderCell>
                );
              })}
            </tr>
          </TableHeader>
          <TableBody>
            {sliceTableData.map((dataItem: any, dataIndex: number) => {
              return (
                <TableRow key={dataIndex}>
                  {columns.map(
                    (columItem: columnType, columItemIndex: number) => (
                      <React.Fragment key={`${dataIndex}-${columItemIndex}`}>
                        {!columItem.render && (
                          <TableCell key={columItemIndex}>
                            {dataItem[columItem.dataIndex]}
                          </TableCell>
                        )}
                        {columItem.render && (
                          <TableCell key={columItemIndex}>
                            {columItem.render(dataItem)}
                          </TableCell>
                        )}
                      </React.Fragment>
                    )
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </MainTable>
        <CustomFooter
          pageIndex={pageIndex}
          range={range}
          setCurrentPageIndex={setCurrentPageIndex}
        />
      </div>
    </>
  );
};

export default StyledTableComponent;
