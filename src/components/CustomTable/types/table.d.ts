type columnType = {
    label : string;
    dataIndex : string;
    render? : Function;
    sort? : boolean;
}

export type dataType = {
  data?: any[];
  columns?: columnType[];
};
