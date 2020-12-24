import Header from "./Header";
import Menubar from "./Menubar";
import Contents from "./Contents";
import styles from './styles.module.css';

const Layout = props => (
	<div>
		<div className={styles.left}>
			<Menubar />
		</div>
		<div className={styles.top}>
			<Header />
		</div>
		<div className={styles.mid}>
			<Contents />
		</div>
	</div>
);

export default Layout;
