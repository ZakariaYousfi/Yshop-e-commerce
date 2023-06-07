
import dynamic from "next/dynamic";

const App = dynamic(() => import("../admin/App"), { ssr: false });

const Admin = () => {
  return <App />;
};

export default Admin;