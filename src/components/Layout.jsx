import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link to="/" className="logoIcon"><Home fontSize="large" /></Link>
                    
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="search">More books</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Copyright 2024
            </footer>
        </>
    )
}
