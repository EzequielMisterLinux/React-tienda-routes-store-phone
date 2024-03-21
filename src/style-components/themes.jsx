import styled from "styled-components";

export const colors = {
    primary: 'blue',

}

export const theme = {
    fg: '#BF4F74',
    bg: 'white'
};

export const invertTheme = ({fg, bg}) =>({
    fg: bg,
    bg: fg
    
});

export const ButtonVM = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.bg};
    background: ${props => props.theme.bg};
    font-size: 1em;
    margin: 1px ;
    padding: 15px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 2s;
    &:hover {
        transition: 2s;
    }
`