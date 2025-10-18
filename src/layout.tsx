import Header from "@/components/header";
import Footer from "@/components/footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Amber Spotlight Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
        radial-gradient(
          circle at center,
          rgba(245, 158, 11, 0.12) 0%,
          rgba(245, 158, 11, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
        }}
      />
      {/* Your Content Here */}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
