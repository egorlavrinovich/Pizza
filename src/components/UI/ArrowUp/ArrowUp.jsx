import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import Svg from '../svg/svg';
const ArrowUp = ({observeelement}) => {
    const [styl,setstyle] = useState('hidden')
    const SaveObserve = useRef()
    useEffect(()=>{SaveObserve.current = new IntersectionObserver(ex)
        SaveObserve.current.observe(observeelement.current)},[])
    function ex(entries) {
       if(entries[0].isIntersecting)setstyle('hidden')
       else setstyle('active')
    }
    return (
        <div className={classNames("ArrowUP",styl) } onClick={()=>{window.scrollTo(0,0)}}>
            <Svg svg={'arrowUP'}/>
        </div>
    );
};

export default ArrowUp;