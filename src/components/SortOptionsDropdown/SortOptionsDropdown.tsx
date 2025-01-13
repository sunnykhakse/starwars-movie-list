import React,{ChangeEvent, FC} from 'react';

interface SortOptionsDropdownProps {
    id: string;
    name: string;
    value: string;
    className? : string;
    onChage: (value:string) => void;
}

const options = [
    {label: 'Episode asc', value: 'episode_asc'},
    {label: 'Episode desc', value: 'episode_desc'},
    {label: 'Release Date asc', value: 'release_date_asc'},
    {label: 'Release Date desc', value: 'release_date_desc'},
    {label: 'Rating asc', value: 'rating_asc'},
    {label: 'Rating desc', value: 'rating_desc'},
]
const SortOptionsDropdown: FC<SortOptionsDropdownProps> = ({id, name, value, className = '', onChage}) => {
  return (
    <select 
        id={id}
        name={name}
        className={`movie_list_sort ${value !== "" ? 'active' : ''} ${className}`} 
        onChange={(e) => onChage(e.target.value)}
        >
          <option value="">Sort by...</option>
          {options.map((option:any) => (
            <option key={option.value} value={option.value} selected={option.value === value}>{option.label}</option>
          ))}
        </select>
  );
}

export default SortOptionsDropdown;
