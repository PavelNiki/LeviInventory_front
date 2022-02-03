import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../store/reducers/rootReducer";
import category from "../store/actions/category/category";
import roomAction from "../store/actions/room/room";

const Test = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return <Button>click</Button>;
};
export default Test;
