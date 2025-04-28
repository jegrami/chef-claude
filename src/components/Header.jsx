import chefIcon from "../assets/chef-claude-icon.png"
export default function Header(){
    return (
        <>
        <header className="header">
            <img  src={chefIcon}/>
            <h1>Chef Icon</h1>
        </header>
        </>
    )
}