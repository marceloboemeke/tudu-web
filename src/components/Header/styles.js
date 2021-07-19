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
    }

    ul li a {
        display: inline-block;
        padding: 0 10px;
        text-align: center;
        line-height: 55px;
        margin: 0 5px;
        text-decoration: none;
        color: #ed6a5a;
        font-family: "Poppins";
        font-size: 14pt;
        transition: color 0.2s;
        font-weight: normal;
        position: relative;
        

        &:hover {
            color: #9B392D;
        }
    }

    ul li:last-child a {
        margin-right: 0;
    }

    ul li a img {
        height: 30px;
        align-self: center;
        display: flex;
    }

    ul li a span {
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
        background-color: #0b3954
    }
`;