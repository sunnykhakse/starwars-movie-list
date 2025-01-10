import React,{FC} from 'react';
import './LoadingSpinner.css'

interface LoadingSpinnerProps {
    label?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({label = 'Loading...'}) => {
  return (
    <div className='loading_spinner_wrapper'>
        <div className='loader'></div>
        <span>{label}</span>
    </div>
  );
}

export default LoadingSpinner;
