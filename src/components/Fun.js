import React, { Component } from 'react';


class Fun extends Component {

    state = {
        game: false,
        rapper: false,
        producer: false,
        astro: false
    }

    myFunction = () => {
        this.setState({
            game: !this.state.game
        })
    }

    myFunction2 = () => {
        this.setState({
            rapper: !this.state.rapper
        })
    }

    myFunction3 = () => {
        this.setState({
            producer: !this.state.producer
        })
    }

    myFunction4 = () => {
        this.setState({
            astro: !this.state.astro
        })
    }



    render() {
        return (
            <div className="container">
                <button className="btn-sm btn-warning" onClick={(e) => this.props.goToMain(e)}>Back</button>
                <div className="row">
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media1.giphy.com/media/Iil0lQd0fINa/giphy.gif?cid=790b76115c9e9725696f497736a93181" alt="" />
                        </div>
                        <div className="row">
                            <h2 className="game"> Game Programmer/Engineer </h2>
                        </div>
                        <div className="list info">
                            <ul className="list">
                                <li className="list"> <strong>Average Pay-</strong> Low-end= $44,000 | High-end=$108,000</li>
                                <li className="list"> <strong>Education level-</strong> According to the U.S. Bureau of Labor Statistics, in most cases a bachelor's degree is preferred for software engineer positions  </li>
                                <li className="list"> <strong>Description-</strong> <p className="discription">Many components are involved in the development of a video game. Designers, producers and graphic artists all contribute to the final product. However, programmers and software developers turn the idea into code, which provides the game with its operating instructions. Game and software developers create the core features of a video game. Duties of a game developer may include <span id="dots">...</span>{this.state.game && <span id="more"><strong>Creating story lines and character biographies</strong>, <strong>Conducting design reviews</strong>, <strong>Designing role-play mechanics</strong>, <strong>Creating prototypes for staff and management</strong>, <strong>Documenting game design process. </strong>
                                    Entry level and junior game programmers typically use basic tools and languages, such as C++, to add small elements to games. They are also expected to keep up with changing technology. Lead developers and programmers write more complicated code and manage other programmers.</span>}</p>
                                    <button onClick={() => this.myFunction()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                <li className="list"> <strong>Longevity-</strong>L 5 years is the Average a general programmer will stay programming video games.</li>
                                <li>
                                    <a className="list" href="https://study.com/articles/Game_Developer_Job_Description_Duties_and_Requirements.html" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media0.giphy.com/media/l4JySqi9r8O5O22NG/200w.webp?cid=790b76115c9e985158344f5241bb5b1d" alt="" />
                        </div>
                        <div className="row">
                            <h2 className="rapper"> Rapper Manager </h2>
                        </div>
                        <div className="list info">
                            <ul className="list">
                                <li className="list"> <strong>Average Pay-</strong> $90,870</li>
                                <li className="list"> <strong>Education level-</strong> While it is possible to hone these skills independently, your best bet is to enroll in an undergraduate or graduate level music business program that thoroughly covers each area necessary for your success. Highly regarded academic programs provide you with music industry connections and hands-on experience through internships with talent management firms and record labels. </li>
                                <li className="list"> <strong>Description-</strong>  <p className="discription">The job may include: negotiating contracts and fees, finding and booking events and venues that match the artist's career strategy, advising on career decisions, publicity and promotion, helping them on career decisions such as which record producer to work with, or which songs to perform, and managing media relations on their behalf.<span id="dots">...</span>{this.state.rapper && <span id="more">eArtist Managers must keep up to date with what's happening in the industry, and they will spend a lot of time establishing and maintaining relationships, using contacts to source work for their clients. They will also promote their clients' work, and will often be involved in liaison during the music recording process. They may also organize and negotiate contracts for release and publishing, and they communicate with the press. </span>}</p>
                                    <button onClick={() => this.myFunction2()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                <li>
                                    <a className="list" href="https://bizfluent.com/info-7759411-average-salary-rap-artist.html" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media3.giphy.com/media/lJ84BHwqpHtVHXHBNm/giphy.gif?cid=790b76115c9e9d4f785934757787b44f" alt="" />
                        </div>
                        <div className="row">
                            <h2 className="producer"> Music Producer </h2>
                        </div>
                        <div className="list info">
                            <ul className="list">
                                <li className="list"> <strong>Average Pay-</strong> $89,613/year </li>
                                <li className="list"> <strong>Education level-</strong> There's no standard level of education needed to become a music producer, many colleges offer music production programs - traditionally at the bachelor's degree level. These four-year programs cover a broad range of courses to expose students to recording arts technology and the music business as a whole. </li>
                                <li className="list"> <strong>Description-</strong> <p className="discription">The producer is often the final authority on all the decisions about what songs are recorded, how they are arranged, and how they will sound. <span id="dots">...</span>{this.state.producer && <span id="more"> CIf the music you are listening to sounds a certain way, it is because the producer decided that is how it should sound. The producer put together a team of musicians to record that sound that he wanted, and the producer got the project completed.
                                    Producers are particularly important for "solo artists" who don't have a band. A producer might select each of the songs on an album (written by many different writers), come up with musical arrangements (often with the help of a professional arranger or beat-maker) hire all the musicians backing up the artist, and personally supervise every step of the recording process, approving or disapproving of various steps and doing things over again until they get them right. Producers are usually also involved in engineering the recordings and mixing them down </span>}</p>
                                    <button onClick={() => this.myFunction3()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                <li>
                                    <a className="list" href="https://djbooth.net/features/2018-12-18-best-hip-hop-producers-2018" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src="https://media3.giphy.com/media/3rgXBFFa1uk6ChdJVm/giphy.gif?cid=790b76115c9ea03f315752464d6c038f" alt="" />
                        </div>
                        <div className="row">
                            <h2 className="astro"> Astronaut </h2>
                        </div>
                        <div className="list info">
                            <ul className="list">
                                <li className="list"> <strong>Average Pay-</strong> Upward of $120,000 per year </li>
                                <li className="list"> <strong>Education level-</strong> The agency's basic requirements are a bachelor's degree in engineering, biological science, physical science, computer science or mathematics, followed by three years of professional experience (or 1,000 hours of pilot-in-command time in jet aircraft). Candidates also must pass NASA's astronaut physical examination.</li>
                                <li className="list"> <strong>Description-</strong> <p className="discription">An astronaut typically boards a spaceship to fly on important missions for a specific purpose. As part of the crew, they have different assigned responsibilities to uphold as they aboard the spacecraft.  <span id="dots">...</span>{this.state.astro && <span id="more">An astronaut has various key roles to play which includes being a mission specialist to a commander. Those who have acquired years of experience and impressive background are the ones given more responsibilities to fulfill. Astronauts are also responsible to keep the safety of the whole crew and spacecraft. What they often do when they reach their destination is to observe the environment, take some essential samples from the place or bringing something back there.</span>}</p>
                                    <button onClick={() => this.myFunction4()} id="myBtn" className="btn-sm btn-primary">Read more</button></li>
                                <li>
                                    <a className="list" href="https://www.bestjobdescriptions.com/science-and-technology/astronaut-job-description" target="_blank"> Links </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Fun;