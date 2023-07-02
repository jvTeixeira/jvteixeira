import styled from "styled-components";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from "react";

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    .dropdown-label{
        display: inline-flex;
    }

    .icon{
        transition: transform 0.2s;
    }

    .dropdown-content{
        height: 0px;    
        width: 140px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        padding: 10px 0;
        background-color: #FAFAFA;
        position: absolute;
        top: 60px;
        border: solid 1px #000;
        border-top: 0px;
        transition: height 0.5s ease;
        }

    &:hover{
        .icon{
            transform: rotate(90deg);
        }
        .dropdown-content{
            height: 80px;
        }
    }
`

export function Dropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [onHover, setOnHover] = useState(true);

    return (
        <Container className="dropdown"
            onMouseEnter={() => {
                setIsDropdownOpen(true)
                setOnHover(true)
            }}
            onMouseLeave={() => {
                setIsDropdownOpen(false)
                setOnHover(false)
            }}
        >
            <div className="dropdown-label">
                Contact Me
                <ChevronRightIcon className="icon" />
            </div>
            {isDropdownOpen && (
                    <div className="dropdown-content">
                        <a href="https://wa.me/31995985251" target="_blank" rel="noopener">Whatsapp</a>
                        <a onClick={() => alert("navegar para a página do email")}>Email</a>
                    </div>
            )}
        </Container>
    );
}