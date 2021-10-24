import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width:25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 2px solid var(--darkGrey);
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: 0.3ms;
    outline: none;
    cursor: pointer;

    :hover{
        background: transparent;
        color: var(--darkGrey);
    }
`;