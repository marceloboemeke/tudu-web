import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-flow: wrap;
`;

export const Title = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-weight: normal;
    font-size: 28pt;
    padding: 10px;
    padding-top: 30px;
    color: #ed6a5a;

`;

export const SmallCaption = styled.a`
    display: block;
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-weight: normal;
    font-size: 12pt;
    padding: 10px;
    color: #ed6a5a;

`;

export const Content = styled.div`
    display: flex;
    box-shadow: 0px .9px 9px rgba(0,0,0,.4);
    width: 25vw;
    border-radius: 10px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;

    &.new_theme {
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 40px;
        box-shadow: none;

        .form_button {
            padding: 10px 20px;
            border: none;
            border-radius: 10px;
            background-color: #ed6a5a;
            font-family: "Poppins";
            font-weight: lighter;
            color: #fff;
            width: 90%;
            text-align: center;
            transition: all linear 0.1s;

            &:hover {
                background-color: #c15346;
            }
        }
    }

    @media (max-width: 1700px) {
        width: 40vw;
    }

    @media (max-width: 1200px) {
        width: 60vw;
    }

    @media (max-width: 900px) {
        width: 90vw;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;