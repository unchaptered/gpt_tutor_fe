// NavigationBar.js
import React from 'react';

import styled from 'styled-components';
import DivBtn from '../../atomic/button/div.button';


/**
 * 
 * @param {Object} props 
 * @param {number} [props.zindex]
 */
function NavigationBar(props) {
    return (
        <NavigationWrapper
            {...props}
        >
            <NavigationContent>
                <DivBtn
                    fontcolor='#FFFFFF'
                    textalign='center'
                    fontFamily='Noto Sans KR'
                    fontSize={16}
                    fontWeight={300}
                    text='HOME'
                    to='/'
                    backgroundcolor='transparent'
                />
                <DivBtn
                    fontcolor='#FFFFFF'
                    textalign='center'
                    fontFamily='Noto Sans KR'
                    fontSize={16}
                    fontWeight={300}
                    text='QnA'
                    to='/qnas'
                    backgroundcolor='transparent'
                />
                <DivBtn
                    fontcolor='#FFFFFF'
                    textalign='center'
                    fontFamily='Noto Sans KR'
                    fontSize={16}
                    fontWeight={300}
                    text='Interview'
                    to='/interviews'
                    backgroundcolor='transparent'
                />
            </NavigationContent>
        </NavigationWrapper>
    );
}

const NavigationWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 70px;
    justify-content: center;
    align-items: center;
    gap: 23px;
    flex-shrink: 0;

    background-color: transparent;
    // background-color: #503e3e;
    position: absolute;

    z-index: ${(props) => props.zindex}
`
const NavigationContent = styled.div`
    display: flex;
    width: 1080px;
    height: 43px;
    padding: 0px 10px;
    align-items: flex-end;
    gap: 23px;
    flex-shrink: 0;
    
    background-color: transparent; 
`

export default NavigationBar;