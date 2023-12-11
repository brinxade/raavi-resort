import Footer from "components/Footer";
import Header from "components/Header";

function AppLayout(props) {
    return (
        <div className="layout app-layout">
            <Header hasWaterEffect={true}/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default AppLayout;