import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <a href="#" className="logoIcon">Logo</a>
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
                Bye-bye
            </footer>
        </>
    )
}
