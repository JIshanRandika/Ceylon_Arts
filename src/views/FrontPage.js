import React from "react";
import Header from "../components/Header/Header.js";

import resumeData from "./resumeData.js";

class FrontPage extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                {/*<Navgationbar/>*/}
                <main ref="main">
                    <Header resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default FrontPage;
