// FooterBar.js
import React from 'react';
import styled from 'styled-components';

import ImgBtn from '../../atomic/button/icon.button';


/**
 * 
 * @param {Object} props 
 * @param {number} [props.zindex]
 */
function FooterBar(props) {
    return (
        <FooterWrapper {...props} >
            <FooterContent>
                <ImgBtn
                    margin='0 0 0 0'
                    padding='0 0 0 0'
                    border='none'
                    backgroundcolor='transparent'

                    imagepath='/icons/github_ico.png'
                    imagedescription='GitHub'
                    imageopacity={0.5}
                />
                <ImgBtn
                    margin='0 0 0 0'
                    padding='0 0 0 0'
                    border='none'
                    backgroundcolor='transparent'

                    imagepath='/icons/notion_ico.png'
                    imagedescription='Notion'
                    imageopacity={0.5}
                />
                <ImgBtn
                    margin='0 0 0 0'
                    padding='0 0 0 0'
                    border='none'
                    backgroundcolor='transparent'

                    imagepath='/icons/linkedin_ico.png'
                    imagedescription='Linkedin'
                    imageopacity={0.5}
                />
                <FooterAllRightsNotice>
                    @2023 All Rights Reserved by minseok, lee
                </FooterAllRightsNotice>
            </FooterContent>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    /* Layout Props */
    display: flex;
    width: 100vw;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;

    position: absolute;
    bottom: 0;

    /* Style Props */
    background-color: transparent;
    // background-color: #503e3e;
`
const FooterContent = styled.div`
    /* Layout Props */
    display: flex;
    width: 1080px;
    padding: 0px 10px;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
    align-self: stretch;

    /* Style Props */
    color: #ffffff;
    background-color: transparent; 
`

const FooterAllRightsNotice = styled.div`
    /* Style Props */
    opacity: 0.5;
`

export default FooterBar;
