import { Link } from "react-router-dom";
// import { useMatch, useResolvedPath } from "react-router-dom";

import "./style.css";
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   IconButton,
// } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="navContent">
        <div className="navHome">
          <Link className="navTitle" to="/">
          ✹ vicky phung
          </Link>
        </div>

        {/* <Menu bg="white">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            bg="transparent"
            color="white"
            fontSize="28pt"
            border="none"
          ></MenuButton>
          <MenuList className="menuList">
            <MenuItem bg="transparent" border="none" fontSize="16pt">
              <CustomLink className="navLinks" to="/projects">
                Projects
              </CustomLink>
            </MenuItem>
          </MenuList>
        </Menu> */}
      </div>
    </nav>
  );
}

//useResolvedPath, provides an absolute path
//useMatch, finds path within directory
// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <div className={isActive ? "active" : ""}>
//       <Link className="listItem" to={to} {...props}>
//         {children}
//       </Link>
//     </div>
//   );
// }
