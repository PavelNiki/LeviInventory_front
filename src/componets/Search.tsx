import { FC } from "react";
import { Input } from "antd";
interface SearchProps {
  placeholder?: string;
  event?: () => void;
}
const CustomSearch: FC<SearchProps> = ({ placeholder, event }) => {
  return (
    <Input
      placeholder={placeholder}
      allowClear
      style={{ width: 300 }}
      onChange={event}
    />
  );
};
