import React, { Component } from 'react';
import Graph from './Graph.js';
import Landing from './Landing.js';
import './App.css';

class App extends Component {
	constructor() {
        super();
		this.errorMsg = React.createRef();
        this.state = {
            'title' : '',
			'displayChart' : false
        }

		// bings all the methods to the class, so we have reference to App when we pass them down to 
		// the children components
		this.handleFileInput = this.handleFileInput.bind(this);
		this.handleManualInput = this.handleManualInput.bind(this);
		this.handleTitleInput = this.handleTitleInput.bind(this);
		this.handleBackBtn = this.handleBackBtn.bind(this);
		this.submitInfo = this.submitInfo.bind(this);
    }
	
	// handles chart title input
    handleTitleInput(e) {
        let title = e.target.value;
        this.setState({'title': title});
    }

	// handles manual input of integers
	handleManualInput(e) {
        let string = e.target.value;
		this.setState({'numArr': this.parseNumbers(string)});
    }

	// handles back btn click when displaying graph
	handleBackBtn() {
		this.setState({'displayChart' : false});
	}

	// handles csv and texts files
	handleFileInput(e) {
		e.preventDefault()
		const reader = new FileReader()
		reader.onload = async (e) => { 
			const text = (e.target.result)
			this.setState({
				'numArr': this.parseNumbers(text.split("\n").join(", ")),
				'displayChart' : true
			});
		};
		reader.readAsText(e.target.files[0]);
	}

	// parse numbers from user manual input
	parseNumbers(str) {
		// breaks delimiting commas, and replaces spaces with empty strings
		let arr = str.split(",").map(x => x.replace(/\s/g, ""));
		
		return arr.filter(x => this.checkInteger(x)).map(x => parseInt(x));
	}

	// returns true if user inputted string is integer, not a float, not an empty string
	checkInteger(num) {
		return !isNaN(num) && num !== "" && Number.isInteger(parseFloat(num));
	}

	// submits info of title and inputs. If there are any errors, it will display error messages in the HTML
	submitInfo() {
		if (this.state.title === "") {
			this.errorMsg.current.innerText = "Empty chart title";
		} else if (!this.state.numArr || this.state.numArr.length === 0) {
			this.errorMsg.current.innerText = "Invalid or empty input data";
		} else {
			this.errorMsg.current.innerText = "";
			this.setState({'displayChart' : true});
		}
	}

    render() {
		if (!this.state.displayChart) {
			return (
				<div className={'app-wrapper'}>
					<Landing 
						handleTitleInput={this.handleTitleInput}
						handleManualInput={this.handleManualInput}
						handleFileInput={this.handleFileInput}
						submitInfo={this.submitInfo}
						errorMsg={this.errorMsg}
					/>
				</div>
			);
		} else {
			return (
				<div className={'app-wrapper'}>
					<Graph
						title={this.state.title}
						numArr={this.state.numArr}
						handleBackBtn={this.handleBackBtn}
					/>
				</div>
			)
		}
        
    }
}

export default App;
