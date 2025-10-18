import { MenuNavbar, SocialMediaIcon } from "@/data";
import { ListTree, X } from "lucide-react";
import { useState } from "react";
import MenuMobile from "@/components/menu-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <nav className="border-secondary/20 mx-auto flex max-w-6xl items-center justify-between rounded-full border bg-[#1f1f1f] px-6 py-4">
        {/* logo */}
        <h1 className="text-secondary font-bold">DYR</h1>

        {/* menu navbar */}
        <ul className="hidden space-x-6 md:flex">
          {MenuNavbar.map((menu, id) => (
            <li key={id}>
              <a href={menu.href} className="text-secondary hover:text-primary">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* social media */}
        <div className="flex items-center gap-4">
          {SocialMediaIcon.map((media, index) => {
            return (
              <a key={index} href={media.href} className="text-secondary">
                <media.icon size={22} />
              </a>
            );
          })}

          {/* toggle menu mobile */}
          <button className="text-secondary md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <ListTree size={24} />}
          </button>
        </div>

        {/* menu mobile */}
        <MenuMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
