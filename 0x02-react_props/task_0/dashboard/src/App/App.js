import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "../styles.css";


export default function App() {
  return (
    <>
        <Notifications />
        <Header />
        <Login />
        <Footer />
    </>
  );
}