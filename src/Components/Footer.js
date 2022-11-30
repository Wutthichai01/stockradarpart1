import './App.css';
function Footer (){
  return(
    <footer className="FooterContent">
        <div className="logoEnd">
          <img src="./pic/logo.footer.png" className="piclogoFooter" />
        </div>
        <div className="logoFooter">
          <a target="_blank" href="http://www.facebook.com/stockradars">
            <img className="img-fluid social-logo" src="./pic/Facebook.png" /></a>
          <a target="_blank" href="https://page.line.me/xzw6057k?openQrModal=true">
            <img className="img-fluid social-logo" src="./pic/Line.png" /></a>
          <a target="_blank" href="https://twitter.com/StockRadars">
            <img className="img-fluid social-logo" src="./pic/Twitter.png" /></a>
          <a target="_blank" href="https://www.instagram.com/stockradars/">
            <img className="img-fluid social-logo" src="./pic/Instagram.png" /></a>
        </div>
        <p className="textEnd m-0">
          ©2018 SiamSquared Technologies (Thailand) Co., Ltd. All Rights Reserved
        </p>
        <a target="_blank" href="https://line.me/R/ti/p/%40xzw6057k" className="lineChat">
          <img className="img-fluid img-back-to-top" src="./pic/Line-chat.png" />
        </a>
      </footer>
  )
}
export default Footer