import React, {useState, useEffect} from "react";
import {
    Wrapper,
    Container,
    Body,
    Page,
    LinkTag,
    SocialContainer,
    Overlaybg
} from "../styles/Navigation.styles";
import {withRouter} from "react-router";
import NavButton from "./NavButton";
import {Link} from "react-router-dom";
import {initialIntDate, initialTextDate} from "../store/initialDate";
import ua from "../assets/img/flags/ua.svg"
import us from "../assets/img/flags/us.svg"
import ru from "../assets/img/flags/ru.svg"

const NavigationMenu = ({history, hasBackground, setBackground}) => {
    const [isOn, setState] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [linking, setLink] = useState("");
    const [language, setLanguage] = useState(initialTextDate.ua);


    useEffect(() => {
        !!linking &&
        setTimeout(() => {
            switch (linking) {
                case "home":
                    history.push("/");
                    setState(false);
                    setLink("");
                    break;
                case "about":
                    history.push("/about");
                    setState(false);
                    setLink("");
                    break;
                case "work":
                    history.push("/work");
                    setState(false);
                    setLink("");
                    break;
                case "news":
                    history.push("/news");
                    setState(false);
                    setLink("");
                    break;
                case "contact":
                    history.push("/contact");
                    setState(false);
                    setLink("");
                    break;
                default:
                    setLink("");
            }
            setBackground(false);
            window.scrollTo(0, 0);
        }, 0);
    }, [linking, history, setBackground]);

    useEffect(() => {
        shouldAnimate &&
        !isOn &&
        setTimeout(() => {
            setShouldAnimate(false);
        }, 0);
    }, [shouldAnimate, isOn]);

    const closeHandler = () => {
        setShouldAnimate(true);
        setState(!isOn);
    };

    const setLinkHandler = text => {
        setShouldAnimate(true);
        setLink(text);
    };

    useEffect(() => {
        const header = document.getElementById("header");
        const LogoLink = document.querySelectorAll(".logo-link");
        const totop = document.getElementById("scroll-to-top")
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky + 0) {
                header.classList.add("sticky");
                LogoLink.forEach(item => item.classList.add("white"));
                totop.classList.add("show");
            } else {
                header.classList.remove("sticky");
                LogoLink.forEach(item => item.classList.remove("white"));
                totop.classList.remove("show");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <header>
            <div id='header'/>
            <div className='logo'>
                <Link to='/' className="img-fluid logo-link logo-text"
                >i<span className='uppercase'>x-wood</span>
                </Link>
                <Link to='/' className="img-fluid logo-link nav-menu">
                    <span className='uppercase'>{language.linkMain}</span>
                </Link>
                <Link to='/' className="img-fluid logo-link nav-menu">
                    <span className='uppercase'>{language.linkAbout}</span>
                </Link>
                <Link to='/' className="img-fluid logo-link nav-menu">
                    <span className='uppercase'>{language.linkProducts}</span>
                </Link>
                <Link to='/' className="img-fluid logo-link nav-menu">
                    <span className='uppercase'>{language.linkRetail}</span>
                </Link>
                <Link to='/' className="img-fluid logo-link nav-menu">
                    <span className='uppercase'>{language.linkContacts}</span></Link>
                <div className="flags-block">
                    <div className = 'flags-item'><img src={ua} alt="" height='30px' width='50px'
                                                       onClick={()=>setLanguage(initialTextDate.ua)}/></div>
                    <div className = 'flags-item'><img src={us} alt="" height='30px' width='50px'
                                                       onClick={()=>setLanguage(initialTextDate.eng)}/></div>
                    <div className = 'flags-item'><img src={ru} alt="" height='30px' width='50px'
                                                       onClick={()=>setLanguage(initialTextDate.ru)}/></div>

            </div>
                <div className='callus logo-link'>
          <span>Call Us: {initialIntDate.phoneHeader}</span>
        </div>
            </div>
            <Wrapper open={isOn} shouldAnimate={shouldAnimate}>
                <Overlaybg open={isOn} shouldAnimate={shouldAnimate} onClick={closeHandler}/>
                <Container
                    open={isOn}
                    onClick={closeHandler}
                    hasBackground={hasBackground}>
                    <NavButton open={isOn}/>
                </Container>
                <Body className='midwrpr' open={isOn} shouldAnimate={shouldAnimate}>
                    <div className='conPage'>
                        <Page className='mainBtn' variant="home" onClick={() => setLinkHandler("home")}>
                            <LinkTag>Home</LinkTag>
                        </Page>
                        <Page className='mainBtn' variant="about" onClick={() => setLinkHandler("about")}>
                            <LinkTag>About</LinkTag>
                        </Page>
                        <Page className='mainBtn' variant="work" onClick={() => setLinkHandler("work")}>
                            <LinkTag>Projects</LinkTag>
                        </Page>
                        <Page className='mainBtn' variant="about" onClick={() => setLinkHandler("news")}>
                            <LinkTag>News</LinkTag>
                        </Page>
                        <Page className='mainBtn' variant="about" onClick={() => setLinkHandler("contact")}>
                            <LinkTag>Contact</LinkTag>
                        </Page>
                    </div>

                    <div className='info'>
                        <span>(+6221) 000 888 999</span>
                        <span className='link'>support@homekins.com</span>
                        <span>129 Park street, New York 10903</span>
                    </div>

                </Body>
                <SocialContainer className='soc-icon' open={isOn}>
                    <span>Follow us:</span>
                    <span className='socicon'><i className="fa fa-facebook-f"></i></span>
                    <span className='socicon'><i className="fa fa-linkedin"></i></span>
                    <span className='socicon'><i className="fa fa-twitter"></i></span>
                    <span className='socicon'><i className="fa  fa-instagram"></i></span>
                </SocialContainer>
            </Wrapper>
        </header>
    );
};

export default withRouter(NavigationMenu);
