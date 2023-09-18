import React from "react";
import styled from "styled-components";

/**
 * @param {Object} props
 * 
 * Layout Properties
 * @param {number} props.width
 * @param {number} props.height
 * @param {string} [props.padding]
 * @param {string} [props.margin]
 * @param {string} [props.border]
 * @param {number} [props.borderradius]
 * @param {string} [props.backgroundcolor]
 * 
 * Image Properties
 * @param {number} [props.imagewidth]
 * @param {number} [props.imageheight]
 * @param {number} [props.imageopacity]
 * @param {number} [props.imagepath]
 * @param {number} [props.imagedescription]
 * 
 * Functional Properties
 * @param {boolean} [props.disabled]
 * @param {(event: React.FormEvent) => void} [props.onClick]
 */
const IconBtnAtom = ({ imagepath, imagedescription, ...otherProps }) => {
    return (
        <StIconWrapper {...otherProps} >
            <img src={imagepath} alt={imagedescription} />
        </StIconWrapper>
    );
};

const StIconWrapper = styled.button`
    /* Layout Properties */
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderradius}px;
    background-color: ${(props) => props.backgroundcolor};

    display: flex;
    
    /* Functional Properties */
    cursor: pointer;

    img {
        width: ${(props) => props.imagewidth}px;
        height: ${(props) => props.imageheight}px;
        flex-shrink: 0;
        opacity: ${(props) => props.imageopacity};
    }
`;

export default IconBtnAtom;
