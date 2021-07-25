import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-flow: wrap;

    .girl_home {
        height: 80vh;
        position: absolute;
        left: 10vw;
        bottom: 0;
        z-index: 6;

        @media (max-width: 1000px) {
            left: 2vw;
            height: 70vh;
        }

        @media (max-width: 700px) {
            display: none;
        }
    }
`;

export const ComposedTitle = styled.div`
    position: absolute;
    top: calc(10vh + 90px);
    left: 35vw;
    text-align: center;
    z-index: 7;

    p {
        display: block;
        width: 100%;
        text-align: center;
        font-family: "Poppins";
        color: #ed6a5a;
        margin: 0;
        padding-left: 0;
        line-height: 115%;
    }

    p.subtitle {
        font-weight: bold;
        font-size: 3.55rem;
    }

    p.title {
        font-weight: normal;
        font-size: 3rem;
    }

    #home_button {
        box-sizing: border-box;
        width: 100%;
        line-height: 50px;
        text-align: center;
        margin: 30px 0 0 0;
        font-size: 17pt;
        background-color: #ed6a5a;
        color: #fff;
    }

    #home_button:hover {
        background-color: transparent;
        color: #ed6a5a;
    }

    @media (max-width: 1000px) {
        left: 50vw;
        transform: translateX(-50%);
        width: 100vw;

        #home_button {
            width: 50%;
            margin-top: 20px;
        }
    }

    @media (max-width: 700px) {
        p.subtitle {
            font-weight: bold;
            font-size: 2.3rem;
        }

        p.title {
            font-weight: normal;
            font-size: 1.95rem;
        }
    }

    @media (max-width: 500px) {
        #home_button {
            width: 80%;
        }

        p.subtitle {
            font-weight: bold;
            font-size: 2rem;
        }

        p.title {
            font-weight: normal;
            font-size: 1.69rem;
        }
    }

    @media (max-width: 400px) {
        p.subtitle {
            font-weight: bold;
            font-size: 1.6rem;
        }

        p.title {
            font-weight: normal;
            font-size: 1.35rem;
        }
    }
`;

export const Content = styled.div`
    width: 100vw;
    height: calc(100vh - 90px);
    position: absolute;
    left: 0;
    bottom: 0;
    background-size: cover;
    background-position: bottom left;
    z-index: 5;

    @media (max-width: 1000px) {
        background-position: bottom right;
    }
`;