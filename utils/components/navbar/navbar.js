import Link from "next/link";
import "./navbar.css";
import { links } from "@/utils/data/links";

export default function Navbar() {
  // const [openLogin, setOpenLogin] = useState(false);
  // const [openRegister, setOpenRegister] = useState(false);
  // const { token, setToken } = useLoginContext();
  return (
    <nav className="container">
      <ul className="link-list">
        {links
          .filter((item) => !item.excluded)
          .map((item) => (
            <NavItem link={item} />
          ))}
      </ul>
      {/* {token ? (
        <button onClick={() => setToken(null)}>SignOut</button>
      ) : (
        <div className="row">
          <button onClick={() => setOpenRegister(true)} variant="outlined">
            Register
          </button>
          <Button onClick={() => setOpenLogin(true)} variant="outlined">
            Login
          </Button>
        </div>
      )} */}
      {/* {openLogin && <LoginModal setOpen={setOpenLogin} />}
      {openRegister && <RegistrationModal setOpen={setOpenRegister} />} */}
    </nav>
  );
}

function NavItem({ link }) {
  return (
    <li className="list-item">
      <Link
        className={`link 
        
        `}
        href={link.href}
      >
        {link.title}
      </Link>
    </li>
  );
}
