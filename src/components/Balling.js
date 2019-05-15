import React, { Component } from 'react';

class Balling extends Component {
    state = {
        show: false,
        doc: false,
        ent: false,
        rap: false,
        music: false,
        athlete: false,
        spy: false
    }

    myFunction = () => {
        this.setState({
            show: !this.state.show
        })
    }
    myFunction2 = () => {
        this.setState({
            doc: !this.state.doc
        })
    }

    myFunction3 = () => {
        this.setState({
            ent: !this.state.ent
        })
    }
    myFunction4 = () => {
        this.setState({
            rap: !this.state.rap
        })
    }
    myFunction5 = () => {
        this.setState({
            music: !this.state.music
        })
    }
    myFunction6 = () => {
        this.setState({
            athlete: !this.state.athlete
        })
    }
    myFunction7 = () => {
        this.setState({
            spy: !this.state.spy
        })
    }
    render() { 
        // function myFunction(e) {
        //     var dots = document.getElementById("dots");
        //     var moreText = document.getElementById("more");
        //     var btnText = document.getElementById("myBtn");
     
        //     if (dots.style.display === "none") {
        //         dots.style.display = "inline";
        //         btnText.innerHTML = "Read more";
        //         moreText.style.display = "none";
        //     } else {
        //         dots.style.display = "none";
        //         btnText.innerHTML = "Read less";
        //         moreText.style.display = "inline";
        //     }
        // }
        return (
            <div className="container">
                <button className="btn-sm btn-warning" onClick={(e) => this.props.goToMain(e)}>Back</button>
                <div className="row">
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://i.gifer.com/5A9.gif" alt=""/>
                        </div>
                        <div className="row">
                            <h2 className="president">President</h2>
                        </div>
                        <div className="list">
                            <ul className="list info">
                                <li className="list"> <strong>Average Pay-</strong> $400,000 annually. Salary Increases. Since 2001, the president is offered an annual salary of $400,000. Additionally, the president receives a $100,000 non-taxable travel account, a $50,000 annual expense account, as well as $19,000 for entertainment purposes. </li>
                                <li className="list"> <strong>Education level-</strong> Not necessary. As directed by the Constitution, a presidential candidate must be a natural born citizen of the United States, a resident for 14 years, and 35 years of age or older.</li>
                                <li className="list"> <strong>Description-</strong>  
                                
                                <p className="discription">
                                    The Constitution assigns the president two roles: chief executive of the federal government and Commander in<span id="dots">...</span> 
                                    
                                    {this.state.show && 
                                       <span id="more4">Chief of the armed forces. ... As chief executive, he enforces laws, treaties, and court rulings; develops federal policies; prepares the national budget; and appoints federal officials.</span> }
                                    </p>


                                    <button onClick={() => this.myFunction()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                </li>
                                <li>
                                    <a className="list btn-sm btn-light" href="https://www.bls.gov/ooh/life-physical-and-social-science/political-scientists.htm" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media2.giphy.com/media/8aPsDRiKWnB5e/source.gif" alt=""/>
                        </div>
                        <div className="row">
                            <h2 className="doctor">Doctor</h2>
                        </div>
                        <div className="list">
                            <ul className="list info">
                                <li className="list"> <strong>Average Pay-</strong>$187,200 annually </li>
                                <li className="list"> <strong>Education level-</strong> Doctoral or professional degree </li>
                                <li className="list"> <strong>Description-</strong>  <p className="discription">Medical doctors examine, diagnose and treat patients. They can specialize in a number of medical areas,<span id="dots">...</span>

                                {this.state.doc && 
                                    <span id="more5">such as pediatrics, anesthesiology or cardiology, or they can work as general practice physicians.</span>}
                                </p>
                                    <button onClick={() => this.myFunction2()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                    </li>
                                <li>
                                    <a className="list btn-sm btn-light" href="https://www.thebalancecareers.com/doctor-career-information-526008" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://ui-ex.com/images/vector-works-entrepreneur-3.gif" alt=""/>
                        </div>
                        <div className="row">
                            <h2 className="entrepreneur">Entrepreneur</h2>
                        </div>
                        <div className="list">
                            <ul className="list info">
                                <li className="list"> <strong>Average Pay-</strong>$100,000 annually depending on how hard you work! </li>
                                <li className="list"> <strong>Education level-</strong> Not necessary </li>
                                <li className="list"> <strong>Description-</strong>  <p className="discription">Defining who is an entrepreneur is tricky, especially if the entrepreneur possesses other professional titles.<span id="dots">...</span>
                                
                                {this.state.ent && 
                                    <span id="more5">As the SBA outlines, most entrepreneurs are owners or founders of a company. They help establish a business, usually as a small one, and then work to expand the business in hopes of earning more profits.</span>}
                                </p>
                                    <button onClick={() => this.myFunction3()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                    </li>
                                <li>
                                    <a className="list btn-sm btn-light" href="https://www.entrepreneur.com/article/306578" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className="row">
                        <div className="col-md-4">
                            <div className="img-container">
                                <img src="https://studybreaks.com/wp-content/uploads/2018/08/tyler.gif" alt=""/>
                            </div>
                            <div className="row">
                                <h2 className="rapper">Rapper</h2>
                            </div>
                            <div className="list">
                                <ul className="list info">
                                    <li className="list"> <strong>Average Pay-</strong>$67,190 annually </li>
                                    <li className="list"> <strong>Education level-</strong> Bachelor's Degree </li>
                                    <li className="list"> <strong>Description-</strong>  <p className="discription">Accountants and auditors ensure that companies or organizations are efficiently operating. <span id="dots">...</span>
                                    {this.state.rap &&
                                        <span id="more">They do this by accessing financial records of their clients. Duties include analyzing data, finance reports, budgets, tax returns, and accounting records.</span>}
                                    </p>
                                        <button onClick={() => this.myFunction4()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                        </li>
                                    <li className="list"> <strong>Longevity-</strong> The profession of law is a good profession for introverts and extroverts. ... But in actuality, being a lawyer is a good job for introverts as well because it values their ability to read, write, and think.</li>
                                    <li>
                                        <a className="list btn-sm btn-light" href="https://collegegrad.com/careers/lawyers" target="_blank"> Links </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-container">
                                <img src="https://media3.giphy.com/media/5kFclUKJVaPHg1v6wX/source.gif" alt=""/>
                            </div>
                            <div className="row">
                                <h2 className="producer">Music Producer</h2>
                            </div>
                            <div className="list">
                                <ul className="list info">
                                    <li className="list"> <strong>Average Pay-</strong>$67,190 annually </li>
                                    <li className="list"> <strong>Education level-</strong> Bachelor's Degree </li>
                                    <li className="list"> <strong>Description-</strong>  <p className="discription">Accountants and auditors ensure that companies or organizations are efficiently operating. <span id="dots">...</span>
                                    {this.state.music &&
                                        <span id="more2">They do this by accessing financial records of their clients. Duties include analyzing data, finance reports, budgets, tax returns, and accounting records.</span>}
                                    </p>
                                        <button onClick={() => this.myFunction5()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                        </li>
                                    <li className="list"> <strong>Longevity-</strong> Sales reps often spend significant time in training programs and at professional conferences learning about industry issues. Hours are long.</li>
                                    <li>
                                    <a className="list btn-sm btn-light" href="https://www.thebalancecareers.com/what-does-a-sales-representative-do-526065" target="_blank"> Links </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-container">
                                <img src="https://theundefeated.com/wp-content/uploads/2019/02/jamesHarden_anim.gif?w=1500" alt=""/>
                            </div>
                            <div className="row">
                                <h2 className="athlete">Athlete</h2>
                                <div className="list">
                                    <ul className="list info">
                                        <li className="list"> <strong>Average Pay-</strong>$4.5 million annually depending on the sport and how good you are! </li>
                                        <li className="list"> <strong className='Bold'>Education level-</strong> None </li>
                                        <li className="list"> <strong className='Bold'>Description-</strong>  <p className="discription">"Athletes and Sports Competitor" 1) Exercise and practice under the direction of athletic trainers or professional<span id="dots">...</span>
                                        {this.state.athlete &&
                                            <span id="more3"> coaches, in order to develop skills, improve physical condition, and prepare for competitions.</span>}
                                        </p>
                                            <button onClick={() => this.myFunction6()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                            </li>
                                        <li>
                                            <a className="list btn-sm btn-light" href="https://www.thebalancecareers.com/should-you-become-a-professional-athlete-525985" target="_blank"> Links </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-container">
                                <img src="https://coubsecure-s.akamaihd.net/get/b183/p/coub/simple/cw_timeline_pic/8260eeacc19/41d0b34734af4e7d43b0a/big_1498052705_image.jpg" alt=""/>
                            </div>
                            <div className="row">
                                <h2 className="spy">Spy</h2>
                            </div>
                            <div className="list">
                                <ul className="list info">
                                    <li className="list"> <strong>Average Pay-</strong>$76,700 annually but it looks like more in the movies! </li>
                                    <li className="list"> <strong>Education level-</strong> CIA agents need a bachelor's degree or higher in a major such as international affairs, foreign studies, political science, or a related major, and an extensive clearance process is required. </li>
                                    <li className="list"> <strong>Description-</strong>  <p className="discription">As a Spy, your job is to gather information from a range of sources, and you need to do it in any way you can. ...<span id="dots">...</span>
                                    {this.state.spy &&
                                        <span id="more5">The title “Spy” isn't really used anymore. Instead, you're now called a Covert Investigator or, more broadly, a CIA Agent. Whatever the title, it means you investigate and protect US interests abroad.</span>}
                                    </p>
                                        <button onClick={() => this.myFunction7()} id="myBtn" className="btn-sm btn-primary">Read more</button>
                                        </li>
                                    <li>
                                        <a className="list btn-sm btn-light" href="https://www.thebalancecareers.com/cia-careers-525616" target="_blank"> Links </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
               </div> 
            </div>
        );
    }
}
 
export default Balling;