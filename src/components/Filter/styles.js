import styled from 'styled-components';

export const FilterItem = styled.li`
    &:last-child a {
        margin-right: 0;
    }

    &:first-child a {
        margin-left: 0;
    }

    &.active a {
        color: #ed6a5a;
    }

    a {
        display: inline-block;
        text-align: center;
        line-height: 55px;
        margin: 0 30px;
        text-decoration: none;
        color: #0B3954;
        font-family: "Poppins";
        font-size: 22pt;
        transition: all linear 0.1s;
        font-weight: bold;
        position: relative;
    }

    &:not(.active) a:hover {
        opacity: .3;
    }
`;