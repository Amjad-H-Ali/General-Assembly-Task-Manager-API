import React, { Component } from 'react';
import Outcome from '../Outcome';
import CreateOutcomeModal from '../CreateOutcomeModal';
import EditOutcomeModal from '../EditOutcomeModal';


class OutcomesContainer extends Component {
	constructor (){
		super();

		this.state = {
			outcomes: [],
			showAdd: false,
			showEdit: false,
			editedAssignment: '',
			hwModalOpen: false,
			hwShowing:[],
		}
	}

	componentDidMount(){
	    this.getItems()
	    .then((response) => {
	    	this.setState({outcomes: response.user_assignments})
	    })
	    .catch ((err) => {
	    	console.log(err)
	    })

	}

	getItems = async () => {
	    const outcomesJson = await fetch('http://localhost:9292/outcome', {
	      credentials: 'include'
	    })
	    const outcomes = await outcomesJson.json();
	    return outcomes;
  	}

	openAdd = async (e) => {

  		this.setState({
			showAdd: true
		})
  		
  	}

  	addAssignment = async (name, link, notes) => {

  		console.log('AddAssignment hit')

		const outcomes = await fetch('http://localhost:9292/outcome', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
				link: link,
				notes: notes
			}),
			credentials: 'include'
		})

		const outcomesParsed = await outcomes.json();

		this.setState({outcomes: [...this.state.outcomes, outcomesParsed.added_assignment]})

		this.setState({
			showAdd: false
		})

	}

  	closeAddModal = () => {
  		
		this.setState({
			showAdd: false
		});
	}

	openEdit = (e) => {

	    this.setState({
	      showEdit: true,
	    })
		
	}

	closeEditModal = () => {
		this.setState({
			showEdit: false
		});
	}


	render () {

		return (

				<div id='homeworkContainer'>
					 <Outcome outcomes={this.state.outcomes} openEdit={this.openEdit}/>
					 <button id='addButton'  onClick={this.openAdd}> New Assignment </button>
					 <CreateOutcomeModal addAssignment={this.addAssignment} showAdd={this.state.showAdd} closeAddModal={this.closeAddModal}/>
					 <EditOutcomeModal showEdit={this.state.showEdit} closeEditModal={this.closeEditModal}/>
				</div>
			)

	}
}


export default OutcomesContainer;