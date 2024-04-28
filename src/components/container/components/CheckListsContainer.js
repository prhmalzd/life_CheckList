import OneCheckList from './OneCheckList';
import './checkListContainer.css';
import { checkListsInfo } from './checkListInfo';

function CheckListContainer({changeTheProgressBar}) {
  return (
    <div className="checkListContainer">
        {checkListsInfo.map(elem => {
            return <OneCheckList title={elem.title} emoji={elem.emoji} changeTheProgressBar={changeTheProgressBar}/>
        })}
    </div>
  );
}

export default CheckListContainer;
