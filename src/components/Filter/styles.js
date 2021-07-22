import styled from 'styled-components';

export const FilterItem = styled.li`
    &:last-child p {
        margin-right: 0;
    }

    &:first-child p {
        margin-left: 0;
    }

    &.active p {
        color: #ed6a5a;
    }

    p {
        display: inline-block;
        text-align: center;
        line-height: 55px;
        margin: 0 30px;
        color: #0B3954;
        font-family: "Poppins";
        font-size: 22pt;
        transition: all linear 0.1s;
        font-weight: bold;
        position: relative;
        cursor: pointer;
    }

    &:not(.active) p:hover {
        opacity: .3;
    }
`;