import Footer from "components/Footer";
import Header from "components/Header";

function AppHeroLayout(props) {
    return (
        <div className="layout app-layout">
            <Header hasHeroContainer={true}/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default AppHeroLayout;