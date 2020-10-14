import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; 

const GlobalStyle = createGlobalStyle`
    ${reset};

    #root{
        width:100vh;
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        aligh-items:center;
    }
    a{
        text-decoration: none;
        color:inherit;
    }

    h1{
        font-size: 160px;
        text-align:center;
    }

    h2{
        font-size:50px;
        text-align:center;
    }

    .askingInput{
        margin-top:20px;
        all: unset;
        margin-left:250px;
        font-size:50px;
        text-align: center;
    }

    .name{
        color:grey;
    }

    body{
        color: white;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width:100%;
        height:100vh;
        background: url(https://source.unsplash.com/random/1600x900);
        background-size:cover;
    }

    .clockCon{}

    .todoCon{
        margin-top:5px;
        padding-top:20px;
        border-top:3px solid white;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }

    .input{
        all: unset;
        font-size:20px;
        text-align: center;
    }
    
    .btn{
        background-color: transparent;
        border: 2px solid black;
        border-radius: 0.6em;
        align-self: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1;
        margin:3px;
        text-decoration: none;
        text-align: center;
 

    }
        
`;

export default GlobalStyle;