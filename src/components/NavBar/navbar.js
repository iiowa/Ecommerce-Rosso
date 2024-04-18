import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Ecommerce</h1>
            <div>
                <button class="btn btn-primary">1</button>
                <button class="btn btn-primary">2</button>
                <button class="btn btn-primary">3</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar