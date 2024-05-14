import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
            <h1>Ecommerce</h1>
            </Link>
            <div className='Categories'>
                <NavLink to = {`/category/lp`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>LP</NavLink>
                <NavLink to = {`/category/ep`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>EP</NavLink>
                <NavLink to = {`/category/mixtape`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mixtape</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar