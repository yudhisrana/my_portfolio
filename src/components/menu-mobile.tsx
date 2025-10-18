import { MenuNavbar } from "@/data";
import { NavLink } from "react-router";
type MenuMobileProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MenuMobile = ({ isMenuOpen, toggleMenu }: MenuMobileProps) => {
  return (
    <div
      className={`absolute top-20 left-0 z-50 w-full px-4 transition-all duration-300 ease-in-out ${
        isMenuOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-5 opacity-0"
      } `}
    >
      <ul className="flex flex-col gap-4 rounded-lg bg-[#1f1f1f] p-4 text-lg">
        {MenuNavbar.map((menu, id) => (
          <li key={id}>
            <NavLink
              to={menu.href}
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "text-secondary hover:text-primary/90"
              }
              onClick={toggleMenu}
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
