import styled from "styled-components";

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