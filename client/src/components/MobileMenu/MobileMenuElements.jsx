import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const MenuContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;   
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    padding-top: 8px;
`;

export const MobileWrapper = styled.div`
    color: #fff;
`;

export const MobileDropdown = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 0;

    @media screen and (mad-width 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const MobileLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #15cdfc;
        transition: 0.2s ease-in-out;
    }
`;

export const MobileBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const MobileRoute = styled(LinkR)`
    border-radius: 50px;
    background: #15cdfc;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;