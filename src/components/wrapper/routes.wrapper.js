import styled from 'styled-components';

export function RoutesWrapper({ children }) {
    return (
        <StRoutesWrapper>
            {children}
        </StRoutesWrapper>
    );
}

const StRoutesWrapper = styled.div`
    /* Layout Props */
    display: flex;
    width: 100vw;
    height: 100vh; /* 오타 수정: 100dvh -> 100vh */

    align-items: center;
    flex-shrink: 0;
    justify-content: center;

    /* Style Props */
    background-color: #000000;
    position: relative;
    overflow: hidden; /* 가로 및 세로 스크롤바 비활성화 */

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        opacity: 0.3;
        pointer-events: none;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/background.png');
    }
`;
