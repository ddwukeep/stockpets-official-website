const Logo = () => <svg className="logo-mark" viewBox="0 0 44 44" aria-hidden="true"><path d="M11 15 8 8l9 4a19 19 0 0 1 10 0l9-4-3 8a15 15 0 1 1-22-1Z"/><circle cx="17" cy="24" r="2"/><circle cx="27" cy="24" r="2"/><path className="logo-smile" d="m19 29 3 2 3-2"/></svg>

export default function Header() {
  return <header className="header"><a className="brand" href="#home" aria-label="StockPets home"><Logo/><span>StockPets</span></a><nav aria-label="Main navigation"><a href="#home">Home</a><a href="#pet">My pet</a><a href="#how">How it works</a><a href="#about">About</a></nav><div className="header-actions"><span className="market-live"><i/> Market calm</span><button className="connect" type="button">Connect</button></div></header>
}
