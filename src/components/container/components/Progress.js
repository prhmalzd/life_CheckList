import { useEffect } from 'react';
import './progress.css';

function Progress({progress}) {


  return (
    <div className="progress">
        <span className='progress__title'>تا اینجا {progress} تارو انجام دادین</span>
        <div className='progress__barContainer'>
            <span className='progress__barContainer__bar' style={{width: `${progress * 10/6}%`}}></span>
        </div>
    </div>
  );
}

export default Progress;
