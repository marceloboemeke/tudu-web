import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-flow: wrap;
    align-items: center;
`;

export const Title = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-weight: normal;
    font-size: 28pt;
    padding: 30px 10px;
    padding-top: 50px;
    color: #ed6a5a;
`;

export const FormContainer = styled.div`
    width: 30vw;
    height: auto;

    &.hidden {
        display: none;
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

export const Form = styled.div`
    display: flex;
    box-shadow: 0px .9px 9px rgba(0,0,0,.4);
    width: 100%;
    border-radius: 10px;
    padding: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
`;

export const DoneButtonForm = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.3;
    }

    p {
        font-size: 12pt;
        font-family: "Poppins";
        display: inline-block;
        line-height: 20px;
        height: 20px;
        vertical-align: middle;
        margin: 0;
        margin-right: 10px;
    }

    p.pink {
        color: #ed6a5a;
    }

    p.blue {
        color: #0b3954;
    }

    img {
        width: 20px;
        display: inline-block;
        vertical-align: middle;
    }
`;

export const Input = styled.div`
    width: 90%;
    box-sizing: border-box;
    margin-bottom: 30px;

    * {
        font-family: "Poppins";
        color: #ed6a5a;
    }
    
    label, input, textarea {
        display: block;
        box-sizing: border-box;
        font-size: 16pt;
    }

    input, textarea {
        padding: 10px;
        width: 100%;
        background-color: #FEFCFD;
        color: #0b3954;
    }

    input {
        border: none;
        border-bottom: 2px solid #ed6a5a;
    }

    textarea {
        border: 2px solid #ed6a5a;
        border-radius: 5px;
        resize: none;
        height: 100px;
    }

    &.half_input {
        width: 49%;

        input {
            font-size: 14pt;
        }

        @media (max-width: 600px) {
            width: 100%;
            display: block;
        }
    }

    input::-webkit-calendar-picker-indicator {
        width: 25px;
        height: 25px;
        background: url(${props => props.imgURL});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    label {
        /* margin-bottom: -10px; */
    }

    input, input:focus, input:active,
    textarea, textarea:focus, textarea:active {
        outline: none;
    }
`;

export const InputContainer = styled.div`
    width: 90%;
    box-sizing: border-box;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;

    .form_button {
        padding: 5px 20px;
        border: 2px solid #ed6a5a;
        border-radius: 5px;
        display: inline-block;
        background-color: #FEFCFD;
        font-family: "Poppins";
        font-weight: lighter;
        font-size: 14pt;
        color: #ed6a5a;
        margin: 5px;
        cursor: pointer;
        transition: all linear 0.2s;
        text-decoration: none;

        &:hover {
            background-color: #ed6a5a;
            color: #ffffff;
        }
    }
`;