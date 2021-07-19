import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-flow: wrap;
`;

export const Content = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
`;

export const FiltersArea = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;

    ul {
        list-style-type: none;
        display: flex;
        width: auto;
        height: 60px;
        flex-direction: row;
        align-items: center;
        margin: 0;
        padding: 20px 0 10px 0;
        justify-content: center;
        align-self: center;
        border-bottom: 3px solid #ed6a5a;
    }
`;

export const Title = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-weight: normal;
    font-size: 28pt;
    padding: 10px;
    color: #ed6a5a;

`;