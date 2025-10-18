import { MenuNavbar } from "@/data";
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
            <a
              href={menu.href}
              className="text-secondary hover:text-primary"
              onClick={toggleMenu}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
