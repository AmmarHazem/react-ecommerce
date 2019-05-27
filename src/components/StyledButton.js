import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color : ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
    border : none;
    border-radius : 3px;
    padding : 3px 7px;
    border : 1px solid ${props => props.color ? props.color : 'var(--lightBlue)'};
    color : ${props => props.color ? props.color : 'var(--lightBlue)'};
    transition : all 0.3s ease-in-out;

    &:hover
    {
        background-color : ${props => props.color ? props.color : 'var(--lightBlue)'};
        color : white;
    }

    &:focus
    {
        outline : none;
    }
`
