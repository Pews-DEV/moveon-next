import styled from 'styled-components'

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-wight: 600;
    color: var(--title);
`

export const CountdownCouter = styled.div`
    flex: 1;

    display: flex;
    align-itens: center;

    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 64px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    > span:first-child{
        border-right: 1px solid #f0f1f3;
    } 

    > span:last-child{
        border-left: 1px solid #f0f1f3;
    } 
`

export const CountdownTwoDots = styled.span`
    font-size: 6.25rem;
    margin: 0 0.5rem;
`

export const CountdownNubers = styled.span`
    flex: 1;
`
