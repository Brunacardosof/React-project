import { Link } from 'react-router-dom'

//ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import BrazilIcon from '../../assets/brazil.svg'
import UsaIcon from '../../assets/usa.svg'
import FacebookIcon from '../../assets/facebook.svg'
import InstagramIcon from '../../assets/instagram.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import TwitterIcon from '../../assets/twitter.svg'

function Footer () {
    return (
        <Footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                    <img src={Logo} />
                    <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>

                    </div>
                    

                </div>
              
            </div>
        </Footer>
    )
}

export default Footer