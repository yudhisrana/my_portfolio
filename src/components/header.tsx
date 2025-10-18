import { MenuNavbar, SocialMediaIcon } from "@/data";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <nav className="border-secondary/20 mx-auto flex max-w-6xl items-center justify-between rounded-full border bg-[#1f1f1f] px-6 py-4">
        {/* logo */}
        <h1 className="text-secondary font-bold">DYR</h1>

        {/* menu navbar */}
        <ul className="hidden space-x-6 md:flex">
          {MenuNavbar.map((menu, id) => (
            <li key={id}>
              <a href={menu.href} className="text-secondary">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* social media */}
        <div className="hidden items-center space-x-4 md:flex">
          {SocialMediaIcon.map((media, index) => {
            const Icon = media.icon;
            return (
              <a key={index} href={media.href} className="text-secondary">
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
