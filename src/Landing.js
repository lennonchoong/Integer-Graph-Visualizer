import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="form-wrapper">
				<div className={'form-title'}>Graph Chart Visualizer</div>
				<div className={'input-wrapper'}>
					<label className={'text-label'}>Chart Title:</label>
					<input type='text' className={'title-input'} onChange={(e) => this.props.handleTitleInput(e)}></input>
				</div>
				<div className={'input-wrapper'}>
					<label className={'text-label'}>Manual Input:</label>
					<input type='text' className={'manual-input'} placeholder="Ex. 1, 2, 3, 4" onChange={(e) => this.props.handleManualInput(e)}></input>
				</div>
				<div className={'text-span'}><span>Or</span></div>
				<div className={'input-wrapper'}>
					<input type='file' id='files' className={'hidden'} onChange={(e) => this.props.handleFileInput(e)}></input>
					<label className={'csv-input'} for="files">Select .csv or .txt file</label>
				</div>
                <div id="create-chart" className={'input-wrapper'} onClick={() => this.props.submitInfo()}>
					<span>Create Chart</span>
				</div>
				<div className={'text-span'}>
					<span id='error-msg' ref={this.props.errorMsg}></span>
				</div>
            </div>
        );
    }
}

export default Landing;