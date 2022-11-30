import './App.css';

function Header(props) {
    return (
        <header className="topHeader">
            <img className="logo" src="./pic/logo.png"/>
            <div className="rightHeader">
                <input type="text"
                       placeholder="Search (ค้นหาหุ้น)"
                       className="inputSearch"
                       value={props.searchBox}
                       onChange={props.searchBoxChange}/>
                <a href="https://stockradars.co/info/" target="_blank">About</a>
                <a href="https://stockradars.news/" target="_blank">News</a>
                <a href="https://stockradars.co/link/" target="_blank">Link</a>
                <a href="https://stockradars.co/radars-school/" target="_blank">Radars School</a>
                <a href="https://stockradars.co/kss-open-account/?ref=stockradars" target="_blank">Trade With Us</a>
                <a href="https://stockradars.co/trade/#/login/" target="_blank">Login</a>
            </div>
        </header>
    )
}

export default Header


