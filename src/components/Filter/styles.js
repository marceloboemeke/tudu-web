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

        @media (max-width: 1700px) {
            font-size: 20pt;
            margin: 0 30px;
        }

        @media (max-width: 1200px) {
            font-size: 18pt;
            margin: 0 25px;
        }

        @media (max-width: 900px) {
            font-size: 16pt;
            margin: 0 20px;
        }

        @media (max-width: 600px) {
            font-size: 12pt;
            margin: 0 17px;
        }

        @media (max-width: 400px) {
            font-size: 10pt;
            margin: 0 15px;
        }
    }

    &:not(.active) p:hover {
        opacity: .3;
    }
`;