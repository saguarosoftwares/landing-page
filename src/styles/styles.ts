import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Poppins Sans SemiBold";
        src: url("/fonts/Poppins/Poppins-SemiBold.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Poppins Sans Regular";
        src: url("/fonts/Poppins/Poppins-Regular.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Poppins Sans Regular', sans-serif;
    }


    body {
        // background-color: #eee0d2;

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: transparent;
        overflow-x: hidden;
    }

    a:hover {
        color: #FFFFFF;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #FFFFFF 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Poppins Sans SemiBold', serif;
        color: #D39381;
        font-size: 54px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #FFFFFF;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #FFFFFF;

        :hover {
            color: #FFFFFF;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
