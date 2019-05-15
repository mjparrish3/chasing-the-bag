import React, { Component } from 'react';

class Boring extends Component {
    state = {
        law: false,
        sales: false,
        acc: false,
        pub: false,
        sec: false
    }

    myFunction = () => {
        this.setState({
            law: !this.state.law
        })
    }
    myFunction2 = () => {
        this.setState({
            sales: !this.state.sales
        })
    }
    myFunction3 = () => {
        this.setState({
            acc: !this.state.acc
        })
    }
    myFunction4 = () => {
        this.setState({
            pub: !this.state.pub
        })
    }
    myFunction5 = () => {
        this.setState({
            sec: !this.state.sec
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
                            <img src="https://media.giphy.com/media/3oKIPjywEUPwHr8Csg/giphy.gif" alt=""/>
                        </div>
                        <div className="row">
                            <h2 className="lawer">Lawyer</h2>
                        </div>
                        <div className="list">
                            <ul className="list info">
                                <li className="list"> <strong>Average Pay-</strong>$67,190 annually </li>
                                <li className="list"> <strong>Education level-</strong> Bachelor's Degree </li>
                                <li className="list"> <strong>Description-</strong>  <p className="discription">Accountants and auditors ensure that companies or organizations are efficiently operating. <span id="dots">...</span>
                                {this.state.law && 
                                    <span id="more">They do this by accessing financial records of their clients. Duties include analyzing data, finance reports, budgets, tax returns, and accounting records.</span>}
                                </p>
                                    <button onClick={() => this.myFunction()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                <li className="list"> <strong>Longevity-</strong> The profession of law is a good profession for introverts and extroverts. ... But in actuality, being a lawyer is a good job for introverts as well because it values their ability to read, write, and think.</li>
                                <li>
                                    <a className="list btn-sm btn-light" href="https://collegegrad.com/careers/lawyers" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="http://media.tumblr.com/01130da2d2702485bc03f1eabfb4dc04/tumblr_inline_mtm52sBcry1r023dt.gif" alt=""/>
                        </div>
                        <div className="row">
                            <h2 className="sales">Sales Rep</h2>
                        </div>
                        <div className="list">
                            <ul className="list info">
                                <li className="list"> <strong>Average Pay-</strong>$67,190 annually </li>
                                <li className="list"> <strong>Education level-</strong> Bachelor's Degree </li>
                                <li className="list"> <strong>Description-</strong>  <p className="discription">Accountants and auditors ensure that companies or organizations are efficiently operating. <span id="dots">...</span>
                                {this.state.sales && 
                                    <span id="more2">They do this by accessing financial records of their clients. Duties include analyzing data, finance reports, budgets, tax returns, and accounting records.</span>}
                                </p>
                                    <button onClick={() => this.myFunction2()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                <li className="list"> <strong>Longevity-</strong> Sales reps often spend significant time in training programs and at professional conferences learning about industry issues. Hours are long.</li>
                                <li>
                                <a className="list btn-sm btn-light" href="https://www.thebalancecareers.com/what-does-a-sales-representative-do-526065" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://cdn-images-1.medium.com/max/1600/1*WPEqyLLvMzfawgfyLit2zA.gif" alt=""/>
                        </div>
                        <div className="row">
                            <h2 className="accountant">Accountant</h2>
                            <div className="list">
                                <ul className="list info">
                                    <li className="list"> <strong>Average Pay-</strong>$67,190 annually </li>
                                    <li className="list"> <strong className='Bold'>Education level-</strong> Bachelor's Degree </li>
                                    <li className="list"> <strong className='Bold'>Description-</strong>  <p className="discription">Accountants and auditors ensure that companies or organizations are efficiently operating. <span id="dots">...</span>

                                    {this.state.acc &&
                                        <span id="more3">They do this by accessing financial records of their clients. Duties include analyzing data, finance reports, budgets, tax returns, and accounting records.</span>}
                                    </p>
                                        <button onClick={() => this.myFunction3()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                    <li className="list"> <strong>Longevity-</strong> CPAs are consistently well paid because they're in high demand. And when you're in high demand, you can count on career stability, a competitive salary and lots of chances to advance.</li>
                                    <li>
                                        <a className="list btn-sm btn-light" href="https://www.allbusinessschools.com/accounting/job-description/" target="_blank"> Links </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
               </div> 
               <div className="row">
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/12/giphy7.gif" alt=""/>
                        </div>
                        <div className="row">
                            <h2 className="relations">Public Relations</h2>
                        </div>
                        <div className="list">
                            <ul className="list info">
                                <li className="list"> <strong>Average Pay-</strong> $78,805 annually </li>
                                <li className="list"> <strong>Education level-</strong> A bachelor's in communications and media studies meets minimum education requirements for a variety of entry-level careers. </li>
                                <li className="list"> <strong>Description-</strong>  <p className="discription">create and maintain positive relationships between their clients and the public often using media outlets. <span id="dots">...</span>
                                {this.state.pub &&
                                    <span id="more4">They produce press releases and manage public events. Communications specialists typically require a bachelor's degree in public relations or another relevant field.</span>}
                                </p>
                                    <button onClick={() => this.myFunction4()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                <li>
                                    <a className="list btn-sm btn-light" href="https://www.thebalancecareers.com/public-relations-specialist-career-information-524873" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media.giphy.com/media/j5yUECN2Y9V2E/giphy.gif" alt=""/>
                        </div>
                        <div className="row">
                            <h2 className="secretary">Secretary</h2>
                        </div>
                        <div className="list">
                            <ul className="list info">
                                <li className="list"> <strong>Average Pay-</strong>$36,500 annually </li>
                                <li className="list"> <strong>Education level-</strong> High School Diploma </li>
                                <li className="list"> <strong>Description-</strong>  <p className="discription">As secretary, you will help ensure that the office runs smoothly and efficiently. <span id="dots">...</span>
                                {this.state.sec && 
                                    <span id="more5">Your clerical and administrative support will assist office personnel and optimize workflow. ... Other secretarial responsibilities will include organizing and maintaining files, supplies, and equipment.</span>}
                                </p>
                                    <button onClick={() => this.myFunction5()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                <li>
                                    <a className="list btn-sm btn-light" href="https://www.indeed.com/q-Secretary-l-California-jobs.html" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
               </div> 
            </div>
        );
    }
}
 
export default Boring;