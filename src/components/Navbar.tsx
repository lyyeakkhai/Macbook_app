import {navbar, type NavbarType} from "../contansts";


export default function Navbar() {

    return (
        <nav className="">
            <img src="/logo.svg" alt="Apple logo"/>
            <ul className="">
                {navbar.map(({ label }: NavbarType) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>)
                )
                }
            </ul>
            
            <div className="flex-center gap-2">
                <button>
                    <img src="/search.svg" alt="search"/>
                </button>
                <button>
                    <img src="/cart.svg" alt="cart"/>
                </button>
            </div>
        </nav>
    )
}
