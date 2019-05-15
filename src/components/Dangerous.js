import React, { Component } from 'react';





class Dangerous extends Component {
    state = {

    }

    myFunction = () => {
        this.setState({
            police: !this.state.police
        })
    }

    myFunction2 = () => {
        this.setState({
            firefighter: !this.state.firefighter
        })
    }

    myFunction3 = () => {
        this.setState({
            military: !this.state.military
        })
    }


    render() {
        return (
            <div className="container">
                <button className="btn-sm btn-warning" onClick={(e) => this.props.goToMain(e)}>Back</button>
                <div className="row">
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media2.giphy.com/media/81xwEHX23zhvy/giphy.gif?cid=790b76115c9ea320586f69352e6b3fb9" alt="" />
                        </div>
                        <div className="row">
                            <h2 className="firefighter"> Police Officer </h2>
                        </div>
                        <div className="list info">
                            <ul className="list">
                                <li className="list"> <strong>Average Pay-</strong> $50,004/year </li>
                                <li className="list"> <strong>Education level-</strong> The minimum requirement is usually a high school diploma, although an increasing number of police departments require applicants to complete at least one or two years of college coursework or have an associate's degree. A bachelor's degree is the minimum requirement for federal police jobs.</li>
                                <li className="list"> <strong>Description-</strong> <p className="discription">The duties of a police officer, also known as a law enforcement officer, focus on protecting people and property. They patrol the areas they are assigned, <span id="dots">...</span>{this.state.police && <span id="more"> which sometimes include entire jurisdictions, respond to calls, enforce laws, make arrests, issue citations, and occasionally testify in court cases.</span>}</p> </li>
                                <button onClick={() => this.myFunction()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                <li>
                                    <a className="list" href="https://www.criminaljusticeusa.com/police-officer/" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media2.giphy.com/media/leIK8AWxzlvUc/giphy.gif?cid=790b76115c9ea4b96b633371779542d4" alt="" />
                        </div>
                        <div className="row">
                            <h2 className="firefighter"> Firefighter </h2>
                        </div>
                        <div className="list info">
                            <ul className="list">
                                <li className="list"> <strong>Average Pay-</strong> $45,918/year </li>
                                <li className="list"> <strong>Education level-</strong> High School. Applicants to firefighter positions need to be at least 18 years old and have a valid driver's license. They must pass physical and written tests, a drug screening exam and medical exam. In terms of formal education, most fire departments require only a high school diploma or equivalent.</li>
                                <li className="list"> <strong>Description-</strong> <p className="discription">Firefighters are primarily responsible for responding to fires, accidents and other incidents where risks are posed to life and property. <span id="dots">...</span>{this.state.firefighter && <span id="more">  Firefighters work on a variety of emergencies, from chemical spills to water rescue.</span>}</p></li>
                                <button onClick={() => this.myFunction2()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                <li>
                                    <a className="list" href="https://work.chron.com/education-need-firefighter-14733.html" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media0.giphy.com/media/l2QDRdU3ZnXzlcg3S/giphy.gif?cid=790b76115c9ea5f1526d4637320d0d96" alt="" />
                        </div>
                        <div className="row">
                            <h2 className="military"> Military </h2>
                        </div>
                        <div className="list info">
                            <ul className="list">
                                <li className="list"> <strong>Average Pay-</strong> $41,075/year </li>
                                <li className="list"> <strong>Education level-</strong> You must be either currently in high school or have a high school diploma or GED. If you do not meet this requirement, There are programs that can help. While a high school diploma is most desirable, candidates with a GED can enlist but it may limit some opportunities. Read more about other Army education requirements.</li>
                                <li className="list"> <strong>Description-</strong> <p className="discription">The military distinguishes between enlisted and officer careers. Enlisted personnel make up about 83 percent of the Armed Forces and carry out military operations. <span id="dots">...</span>{this.state.military && <span id="more"> Participate in, or support, combat and other military operations, such as humanitarian or disaster relief. Operate, maintain, and repair equipment.</span>}</p> </li>
                                <button onClick={() => this.myFunction3()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                <li>
                                    <a className="list" href="https://www.goarmy.com/?iom=OP68-9021-ACNP-PS-XXX-GO-XXX-XX-XX-X-W31&&c3apidt=p27184569320&gclid=Cj0KCQjwhPfkBRD0ARIsAAcYycHLI0AZLbY7aVI0dIUPNKU14IsQ-evalC92xpqHeW-UdVJRQMs9q-UaAjkPEALw_wcB&gclsrc=aw.ds" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Dangerous;