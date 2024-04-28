import { useState } from 'react';
import './oneCheckList.css';
import { ImCheckmark } from "react-icons/im";

function OneCheckList({title , emoji, changeTheProgressBar}) {
    const [userClicked , setUserClicked] = useState(false)

    const clickFunction = () => {
        let clicked  = !userClicked
        setUserClicked(clicked)

        changeTheProgressBar(clicked)
    }


  return (
    <div className={`oneCheckList ${userClicked && "oneCheckListClicked"}`} onClick={clickFunction}>
        <span className='oneCheckList__title'>{title}</span>
        <span className='oneCheckList__emoji'>{emoji}</span>
        <div className={`oneCheckList__chackBox ${userClicked && "oneCheckList__chackBoxChecked"}`}>
            <ImCheckmark />
        </div>
        
    </div>
  );
}

export default OneCheckList;
