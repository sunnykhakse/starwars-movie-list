import React, {ChangeEvent, FC} from 'react';
import SortOptionsDropdown from '../SortOptionsDropdown/SortOptionsDropdown';
import SearchBox from '../SearchBox/SearchBox';

interface MovieFilterProps {
    sortOption: string;
    searchKeyword: string;
    onSortChange: (val:string) => void;
    onSearchChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const MovieFilter: FC<MovieFilterProps> = ({sortOption,searchKeyword, onSortChange,onSearchChange}) => {
  return (
    <>
      <SortOptionsDropdown id='sort_by' name='sort_by' value={sortOption} onChage={onSortChange} />
        <SearchBox
          id="search" 
          name="search" 
          value={searchKeyword} 
          placeholder='Type to filter...' 
          className='movie_list_filter_input' 
          onChange={(e) => onSearchChange(e)} 
        />
    </>
  );
}

export default MovieFilter;
