import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90px;
    box-shadow: 0px .8px 24px rgba(0,0,0,.4);
    background: #fff;
    display: flex;
`;

export const LeftSide = styled.div`
    width: 30%;
    height: 90px;
    display: flex;
    align-items: center;
    padding-left: 60px;

    img {
        height: 45px;
        display: inline-block;
    }
`;

export const RightSide = styled.div`
    width: 70%;
    height: 90px;
    padding-right: 60px;
    display: flex;
    justify-content: flex-end;

    .menu_bar {
        height: 90px;
        display: block;
        padding: 25px 5px;
        box-sizing: border-box;

        @media (min-width: 801px) {
            display: none;
        }
    }

    ul {
        list-style-type: none;
        display: flex;
        width: 100%;
        height: 90px;
        flex-direction: row;
        align-items: center;
        margin: 0;
        justify-items: self-end;
        justify-content: flex-end;

        &.open {
            @media (max-width: 800px) {
                height: calc(100vh - 90px);
            }
        }

        @media (max-width: 800px) {
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            height: 0;
            background: #f5f5f5;
            z-index: 10;
            flex-direction: column;
            justify-content: flex-start;
            box-sizing: border-box;
            padding: 0;
            overflow: hidden;
            transition: height linear 0.2s;
        }
    }

    ul li {
        @media (max-width: 800px) {
            display: block;
            width: 100%;
            height: 90px;
            text-align: right;
            box-sizing: border-box;
            font-size: 17pt;
            line-height: 90px;
        }
    }

    ul li p, ul li a {
        display: inline-block;
        padding: 0 10px;
        text-align: center;
        line-height: 55px;
        margin: 0 5px;
        text-decoration: none;
        color: #ed6a5a;
        font-family: "Poppins";
        font-size: 14pt;
        transition: all 0.2s;
        font-weight: normal;
        position: relative;
        cursor: pointer;

        &:hover {
            color: #9B392D;

            @media (max-width: 800px) {
                color: #fff;
                background-color: #ed6a5a;
            }
        }

        @media (max-width: 800px) {
            font-size: 20pt !important;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0 !important;
            display: block !important;
            line-height: 90px !important;
            margin: 0 !important;
        }
    }

    ul li:last-child p, ul li:last-child a {
        margin-right: 0;
    }

    ul li p img, ul li a img {
        height: 30px;
        align-self: center;
        display: flex;
    }

    ul li p span, ul li a span {
        width: 20px;
        height: 20px;
        background-color: #0b3954;
        position: absolute;
        top: -5px;
        right: 5px;
        display: flex;
        flex-direction: column;
        align-content: top;
        justify-content: center;
        font-size: 9pt;
        color: #fff;
        font-family: "Poppins";
        font-weight: bold;
        padding: 0;
        margin: 0;
    }

    span {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #0b3954;

        @media (max-width: 800px) {
            display: none;
        }
    }
`;