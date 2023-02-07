import React from "react";
import styled from "styled-components";
// import { useLocation } from "react-router-dom";
import { useRouter } from 'next/router';
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
// import MenuItems from "../../components/MenuItems/MenuItems";
// import { SubMenuItems } from "../../components/SubMenuItems";
// import Dropdown from "../../components/Dropdown/Dropdown";
// import MenuLink from "./MenuLink";
import Link from 'next/link';
// import LinkExternal from "../../components/Link/Link";
import { sidelinks } from "./config";
import { PanelProps, PushedProps } from "./types";




interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile }) => {
  const { pathname } = useRouter()

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;


  return (
    <Container>
      {sidelinks.map((entry) => {
        // const isHttpLink = entry.href?.startsWith("http");
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        // const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              // initialOpenState={entry.initialOpenState}
              // className={calloutClass}
            >
              {isPushed &&
                 entry.items.map((item) => (
                   
                      <MenuEntry key={item.href} secondary isActive={item.href === pathname } onClick={handleClick}>

                          {pathname.startsWith("https") ? 

                         <a  href={item.href} target="_blank" rel="noopener noreferrer" >{item.label}</a>

                         :

                         <Link href={item.href}>{item.label}</Link>

                         }

                      </MenuEntry>
                     ))} 
            </Accordion>
          );
        }

        return (
          <MenuEntry key={entry.label} isActive={entry.href ===  pathname }  onClick={handleClick} >


             {pathname.startsWith("https") ? 

              <a href={entry.href} target="_blank" rel="noopener noreferrer" >
              <LinkLabel isPushed={isPushed}> {iconElement} {entry.label} </LinkLabel>
              </a>
             :
             <Link href={entry.href} >
             <LinkLabel isPushed={isPushed}> {iconElement} {entry.label} </LinkLabel>
             </Link>
            
              }
            
          </MenuEntry>
        );
      })}

    </Container>
  );
};

export default PanelBody;
