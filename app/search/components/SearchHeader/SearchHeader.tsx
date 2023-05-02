import { FC } from "react";
import SearchBar from "@/app/components/SearchBar/SearchBar";

const SearchHeader: FC = () => {
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <SearchBar />
    </div>
  );
};

export default SearchHeader;
