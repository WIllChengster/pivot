import React, {useState} from 'react';
import '../assets/css/box.css'

export default () => {

    

    const [initPos, setInitPos] = useState({
        x: 0,
        y: 0,
        cur_x: 0,
        cur_y: 0,
    })
    const [move, setMove] = useState({
        x: 0,
        y: 0,
        cur_x: 0,
        cur_y: 0,
    })

    const drag = (event) => {
        // const rect = event.target.getBoundingClientRect();
        setMove({
            cur_x: event.clientX,
            cur_y: event.clientY,
        })
    }

    const findPos = (event) => {
        // event.attachEventHandler(dragStart, )
        const rect = event.target.getBoundingClientRect();
        // console.log(rect)
        console.log(event.clientX, event.clientY);

        setInitPos({
            x: rect.x,
            y: rect.y,
            cur_x: event.clientX,
            cur_y: event.clientY,
        })
        
        event.target.addEventListener('mousemove', drag)
    }

    const drop = (event) => {
        console.log(event.target.getBoundingClientRect())
        console.log(event.target)
        event.target.removeEventListener('mousemove', drag)
    }


    
    return(
        <div className="box-container" onMouseDown={e => findPos(e)} onMouseUp={e => drop(e)} >

        </div>
    )
}