
import Navbar from "./Navbar.tsx";
import Footer from "./Footer";

const MainLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen font-inter bg-gray-50 min-w-sm overflow-clip">
      <Navbar />

      <div className="flex-1 p-6">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
