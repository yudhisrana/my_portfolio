const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-[#1f1f1f] py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-secondary text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">Dipo Yudhis Rana</span>.{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
