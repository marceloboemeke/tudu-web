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

export const Subtitle = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-weight: normal;
    font-size: 20pt;
    padding: 10px;
    color: #ed6a5a;

`;

export const Content = styled.div`
    display: flex;
    box-shadow: 0px .9px 9px rgba(0,0,0,.4);
    width: auto;
    border-radius: 10px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
`;