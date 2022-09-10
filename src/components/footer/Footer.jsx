import "../Styles/footer.css";

import GithubIco from '../../Media/github-icon.svg';
const Footer = () => {
    return (
        <footer>
            <div className="footer-left">Made with ❤️ by Vean</div>
            <div className="footer-right">
                <a href="https://github.com/veanyxz"  target="_blank" rel="noreferrer">
                    <img src={GithubIco} className="github-icon" alt="Github redirect"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
