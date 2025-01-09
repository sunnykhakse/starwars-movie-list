import React,{ChangeEvent, FC} from 'react';

interface SortOptionsDropdownProps {
    id: string;
    name: string;
    value: string;
    onChage: (value:string) => void;
}

const options = [
    {label: 'Episode', value: 'episode'},
    {label: 'Release Date', value: 'release_date'},
    {label: 'Rating', value: 'rating'},
]
const SortOptionsDropdown: FC<SortOptionsDropdownProps> = ({id, name, value, onChage}) => {
  return (
    <select className='movie_list_sort' onChange={(e) => onChage(e.target.value)}>
          <option>Sort by...</option>
          {options.map((option:any) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
  );
}

export default SortOptionsDropdown;
