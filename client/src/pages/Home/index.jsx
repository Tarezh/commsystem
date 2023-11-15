import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from '../Sidebar/Sidebar'
import MailListComponent from '../MailList/MailListComponent'
function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
	return (
		<>
		{/* <Navbar/> */}
		<Sidebar user = {user}/>
		<Navbar user = {user}/>
		<MailListComponent/>
		</>);
}

export default Home;
