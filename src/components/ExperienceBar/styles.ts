import styled from 'styled-components'

export const XPBarHeader = styled.header`
    display: flex;
    align-items: center;
`

export const XPBarSpan = styled.span`
    font-size: 1rem;
`

export const XPBarDiv = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: var(--gary-line);
    margin: 0 1.5rem;
    position: relative;
`

export const XPBarInternalDiv = styled.div`
    height: 4px;
    border-radius: 4px;
    background: var(--green);
`

export const XPBarCurrentXP = styled.span`
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`
