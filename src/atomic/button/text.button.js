import React from "react";
import styled from "styled-components";

/**
 * @param {Object} props
 * @param {number} props.width
 * @param {number} props.height
 * @param {number} [props.fontSize]
 * @param {string} [props.fontColor]
 * @param {string} props.text
 * @param {string} [props.backgroundColor]
 * @param {string} [props.border]
 * @param {number} [props.borderRadius]
 * @param {string} [props.padding]
 * @param {string} [props.margin]
 * @param {boolean} [props.disabled]
 * @param {(event: React.FormEvent) => void} [props.onClick]
 */
const TextButtonAtom = (props) => {
    return (
        <StTextButtonAtom
            type="submit"
            {...props}
        >
            {props.text}
        </StTextButtonAtom>
    );
};

const StTextButtonAtom = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.fontColor};
  border-radius: ${(props) => props.borderRadius}px;
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;

export default TextButtonAtom;
