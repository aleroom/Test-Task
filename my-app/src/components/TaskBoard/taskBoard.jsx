import React from 'react';
import "./taskBoard.css";
import Button from '../Button/button';
import MyComponent from './textTB/textTB';



const TaskBoard = () => {
    return (
        <div className="task-board">
            <div className='taskBoard-content'>
                <div className='registering'>   
                    <span>registering</span>
                </div>

                <div className='taskBoard-left'>
                    <div className='taskBoard-left-fix'>
                        <img src="https://png.pngtree.com/png-clipart/20220620/original/pngtree-plastic-pushpin-pin-with-shadow-isolated-on-transparent-background-png-image_8111802.png" alt="" />
                        <span>nl 2-7 triple draw</span>
                    </div>

                    <div className='taskBoard-left-text'>
                        <MyComponent/>
                    </div>

                    <div className='taskBoard-left-data'>
                        <span>12:00 pm, 28 July</span>
                    </div>
                </div>

                <div className='taskBoard-right'>
                    <div>
                        <Button/>
                    </div>
                </div>

            </div>
            
            
        </div>
    );
}

export default TaskBoard;