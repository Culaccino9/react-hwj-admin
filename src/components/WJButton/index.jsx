import React, { memo, useRef } from 'react';

import { ButtonDivStyled } from './style'

const WJButton = memo(() => {
    const btnRef = useRef()
    const aRef = useRef()
    // const boundingClientRect = aRef.current.getBoundingClientRect()
    // let btnStyle = null
    // let btnStyle = btnRef.current.style

    const aOver = e => {
        const boundingClientRect = aRef.current.getBoundingClientRect()
        // btnStyle = btnRef.current.style

        const x = e.clientX - boundingClientRect.left
        const y = e.clientY - boundingClientRect.top

        const xc = boundingClientRect.width / 2
        const yc = boundingClientRect.height / 2

        const dx = x - xc
        const dy = y - yc

        // btnStyle.setProperty('--rx', `${dy / -1}deg`)
        // btnStyle.setProperty('--ry', `${dx / 10}deg`)
        // console.log(e.target.parentElement);
        e.target.parentElement.style.setProperty('--rx', `${dy / -1}deg`)
        e.target.parentElement.style.setProperty('--ry', `${dx / 10}deg`)
    }
    const aLeave = e => {
        // btnStyle = btnRef.current.style
        // btnStyle.setProperty('--ty', '0')
        // btnStyle.setProperty('--rx', '0')
        // btnStyle.setProperty('--ry', '0')
        e.target.parentElement.style.setProperty('--ty', '0')
        e.target.parentElement.style.setProperty('--rx', '0')
        e.target.parentElement.style.setProperty('--ry', '0')
    }
    const aDown = e => {
        // btnStyle = btnRef.current.style
        // docStyle.setProperty('--tz', '-25px')
        e.target.parentElement.style.setProperty('--tz', '-25px')
    }
    const btnUp = e => {
        // btnStyle = btnRef.current.style
        // btnStyle.setProperty('--tz', '-12px')
        e.target.parentElement.style.setProperty('--tz', '-12px')
    }
    return (
        <ButtonDivStyled>
            <div className="wj-btn" ref={btnRef} onMouseUp={e => btnUp(e)}>
                <a href="/#" className="wj-a" ref={aRef}
                    onMouseOver={e => aOver(e)}
                    onMouseLeave={e => aLeave(e)}
                    onMouseDown={e => aDown(e)}
                >XXX集团CEO</a>
            </div>
        </ButtonDivStyled>
    );
});

export default WJButton;