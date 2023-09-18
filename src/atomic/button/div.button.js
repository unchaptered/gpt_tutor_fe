import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

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
 * Text Properties
 * @param {number} [props.fontSize]
 * @param {string} [props.fontcolor]
 * @param {string} [props.fontFamily]
 * @param {string} [props.fontWeight]
 * @param {string} [props.fontlineheight]
 * @param {string} [props.textalign]
 * @param {string} props.text
 * 
 * Functional Properties
 * @param {boolean} [props.disabled]
 * @param {string} [props.to]
 * @param {(event: React.FormEvent) => void} [props.onClick]
 */
const DivBtn = ({ to, text, ...otherProps }) => {

    const navigate = useNavigate();  // 😊
    const handleClick = () => {
        if (to) {
            navigate(to);  // 😊
        }
    }

    return (
        <StDivBtn
            onClick={handleClick}
            {...otherProps}
        >
            {text}
        </StDivBtn>
    );
};

const StDivBtn = styled.div`
  /* Layout Properties */
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius}px;
  background-color: ${(props) => props.backgroundcolor};
  
  /* Text Properties */
  color: ${(props) => props.fontcolor};
  font-size: ${(props) => props.fontSize}px;
  text-align: ${(props) => props.textalign};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.fontlineheight};
  
  /* Functional Properties */
  cursor: pointer;
`;

export default DivBtn;
