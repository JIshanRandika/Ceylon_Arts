import React from "react";
import {
    UncontrolledCarousel
} from "reactstrap";


class Header extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>
                <section id="header">

                    <div  className="rounded shadow-lg">
                        {

                            <UncontrolledCarousel items={resumeData.promotionSlideShow} />

                        }
                    </div>

                </section>


            </>
        );
    }
}

export default Header;
