const Layout = ({children}) =>{
    return (
        <>
        <header>
            <h2> My Website</h2>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <p>copyright 2026</p>
        </footer>
        </>
    )
}

export default Layout;