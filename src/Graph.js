import React, { Component } from 'react';
import Canvas from "./Canvas.js";
import './App.css';


class Graph extends Component {
    constructor(props) {
        super(props);
        this.graphBodyRef = React.createRef();
        this.state = {
            'type' : 'bar',
        }
    }

    // when graph is mounted, get all values and set state
    componentDidMount() {
        this.setState({'numArr' : this.props.numArr});
        this.setState({'graphHeight' : getComputedStyle(this.graphBodyRef.current).height});
        this.setState({'graphWidth' : getComputedStyle(this.graphBodyRef.current).width});
    }

    // on user switch to bar graph
    switchToBar() {
        this.setState({'type' : 'bar'});
    }

    // on user switch to line graph
    switchToLine() {
        this.setState({'type' : 'line'})
    }

    render() {
        return (
            <div className={'graph-wrapper'}>
                <div className={'graph-top-header'}>
                    <div className={'back-btn'} onClick={() => this.props.handleBackBtn()}>Back</div>
                    <div className={'inline-wrapper'}>
                        <div className={'graph-title'}>{this.props.title}</div>
                        <div className={'toggle-view'}>
                            <div className={"toggle-btn bar-btn"} onClick={() => this.switchToBar()}>Bar</div>
                            <div className={"toggle-btn line-btn"} onClick={() => this.switchToLine()}>Line</div>
                        </div>
                    </div>
                </div>
                <div ref={this.graphBodyRef} className={'graph-body'}>
                    <Canvas 
                        graphWidth={this.state.graphWidth}
                        graphHeight={this.state.graphHeight}
                        type={this.state.type}
                        numArr={this.state.numArr}
                    />
                </div>
            </div>
        );
    }
}

export default Graph;