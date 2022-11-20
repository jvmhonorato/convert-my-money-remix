import { Link } from "@remix-run/react"

const Header = () => {
    return(
        <div className="p-4 bg-slate-200">
        <h1 className="max-w-4xl mx-auto">Welcome to Convert My Money</h1>
        <p>
            <Link to="/">Home</Link> {''} | {''} 
            <Link to="/juros">Juros</Link>{''} | {''} 
            <Link to="currencies"> Currencies</Link>
            </p>
        </div>
    )
}
export default Header