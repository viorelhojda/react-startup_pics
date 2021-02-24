import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();

        this.onInputChange = this.onInputChange.bind(this);
    }

    state = { term : ''}

    onInputChange(event){
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Image Search</label>
                        <input type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default  SearchBar;