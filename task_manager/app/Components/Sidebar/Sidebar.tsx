"use client"
import React from 'react'
import styled from 'styled-components'
import { useGlobalState } from '../../Context/globalProvider';
import Image from 'next/image';
import menu from '../../Utils/menu.js';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function Sidebar() {

  const router = useRouter();
  const {theme} = useGlobalState();
  const handleClick = (link:string) => {
    router.push(link);
  }
  const pathname = usePathname();

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay">
          
        </div>
        <div className="image">
          <Image width={70} height={70} src="/avatar1.png" alt="profile"/>
        </div>
        <h1>
          <span>Adam</span>
          <span>Test</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item)=>{
          const link = item.link;
          return <li key={item.id} className={`nav-item ${pathname===link ? "active" : ""}`} onClick={()=>{
            handleClick(link)
          }}>
            {item.icon}
            <Link href={link}>
              {item.title}
            </Link>
          </li>
        })}
      </ul>
      <button></button>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
  width: ${(props)=>props.theme.sidebarWidth};
  position:relative;
  background-color: ${(props)=>props.theme.colorBg2};
  border: 2px solid ${(props)=>props.theme.borderColor2};
  border-radius: 2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props)=>props.theme.colorGrey3};

  .profile{
    margin: 1.5 rem;
    padding: 1rem 0.8rem;
    position: relative;

    border-radius: 1rem;
    cursor: pointer;

    font-weight: 500;
    color: ${(props)=>props.theme.colorGrey0};
    display: flex;
    align-items: center;
  }

  .profile-overlay{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 0;
    border-radius: 1rem;
    background: ${(props)=>props.theme.colorBg3};
    transition: all 0.55s linear;
    opacity: 0.2;
    border: 2px solid ${(props)=>props.theme.borderColor2};
  }
`

export default Sidebar
