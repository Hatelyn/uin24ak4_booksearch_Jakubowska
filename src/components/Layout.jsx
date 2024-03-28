export default function Layout({children}) {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
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