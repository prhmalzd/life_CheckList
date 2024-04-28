import { useState } from 'react';
import CheckListContainer from './components/CheckListsContainer';
import Progress from './components/Progress';
import './container.css';

function Container() {
  const [progress , setProgress] = useState(0)

  const changeTheProgressBar = (bool) => {
    
    let newProgress
    if (bool) {
      newProgress = progress + 1
    }
    else {
      newProgress = progress - 1
    }

    setProgress(newProgress)
  }


  return (
    <div className="container">
        <span className='container__title'>چک لیست زندگی</span>
        <CheckListContainer changeTheProgressBar={changeTheProgressBar}/>
        <Progress progress={progress}/>
    </div>
  );
}

export default Container;
