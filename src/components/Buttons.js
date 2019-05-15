import React, { Component } from 'react';
import { Link } from 'react';
// import Boring from './components/Boring';

class Buttons extends Component {
    
    render() { 
        return (
            <div className="container">
                <h1>CHASIN THE BAG</h1>
                <div className="btn-container">
                    <div className="row">
                        <button 
                            onClick={(e) => this.props.goToFun(e)}
                            className="btn btn-primary">
                        FUN
                        </button>
                        <button 
                            onClick={(e) => this.props.goToDangerous(e)}
                            className="btn btn-danger">
                        DANGEROUS
                        </button>
                    </div>
                    <div className="row">
                        <button 
                            onClick={(e) => this.props.goToBoring(e)}
                            className="btn btn-info">
                            BORING
                        </button>
                        <button 
                            onClick={(e) => this.props.goToBalling(e)}
                            className="btn btn-success">
                            BALLING
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Buttons;