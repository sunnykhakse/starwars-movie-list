import React, { FC, ChangeEvent } from 'react';
import './SearchBox.css';

interface SearchBoxProps{
    id: string;
    name: string;
    type?: string;
    value: string;
    placeholder?: string;
    className?:string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox:FC<SearchBoxProps> = ({id, value, ...props}) => {

    return(
        <input {...props} />
    )
}

export default SearchBox;