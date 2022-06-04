import styled from 'styled-components'

export const CdContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-wight: 600;
    color: var(--title);
`

export const CdCouter = styled.div`
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

export const CdTwoDots = styled.span`
    font-size: 6.25rem;
    margin: 0 0.5rem;
`

export const CdNubers = styled.span`
    flex: 1;
`

export const CdButton = styled.button`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 0;
    border-radius: 5px;

    background: var(--blue);
    color: var(--white);

    font-size: 1.25rem;
    font-wight: 600;

    :not(:disabled):hover{
        background: var(--blue-dark);
    }

    transition: background-color 0.2s;

    :disabled{
        background: var(--white);
        color: var(--text);
        cursor: not-allowed;
    }
`

export const CdBtnActive = styled(CdButton)`
    background: var(--white);
    color: var(--title);

    :not(:disabled):hover{
        background: var(--red);
        color: var(--white);
    }
`
