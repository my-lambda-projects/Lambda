I've got this search method where I want to redirect the user after searching. The issue is that it does not do anything and I don't know why. this.props.history IS defined but the "location" property of the object "history" does not seem to change accordingly to what i put in the parameters of the push method ('./connexion') ... The search method IS binded and I use `export default withRouter(SearchBar);` to access the history via props

```
 search(event) {
    if (this.state.location === null) {
        this.setState({ geosuggestId: 'geosuggest-input-alert' });
    } else if (this.state.subjects.length === 0) {
        this.setState({ matieresButtonId: 'matieres-button-alert' });
    } else {
        console.log(this.props.parent);
        if (this.props.parent === 'Homepage') {
            console.log(this.props.history);
            this.props.history.push('/connexion');
        }
    }
}
```

Full file :

```
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';
import SearchBySubjectsModal from './modals/search_by_subjects_modal';
import { withRouter } from 'react-router-dom';

/**
 * Search bar for parent to search for profs
 */
class SearchBar extends Component {

constructor(props) {

    super(props);

    this.state = {
        location: null,
        subjects: [],
        level: 'Collège',
        matieresButtonId: 'matieres-button',
        geosuggestId: 'geosuggest-input'
    }

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
    this.setSubjects = this.setSubjects.bind(this);
    this.search = this.search.bind(this);
}

/**
 * if the state for subjects and location is not null, then stop fields warning
 */
componentDidUpdate() {
    if (this.state.subjects.length > 0) {
        if (this.state.matieresButtonId !== 'matieres-button')
            this.setState({ matieresButtonId: 'matieres-button' });
    }
    if (this.state.location !== null) {
        if (this.state.geosuggestId !== 'geosuggest-input')
            this.setState({ geosuggestId: 'geosuggest-input' });
    }
}

/**
 * set the state when choosing a location
 * @param {*} suggest
 */
onSuggestSelect(suggest) {
    this.setState({ location: suggest });
}

/**
 * set the state when choosing subjects
 * @param {*} suggest
 */
setSubjects(subjects, level) {
    this.setState({ subjects, level });
}

/**
 * Search method
 * Check if subjects or location are null (is so, show warnings)
 * If no warnings, perform search and redirect to search page
 * @param {*} event
 */
search(event) {
    if (this.state.location === null) {
        this.setState({ geosuggestId: 'geosuggest-input-alert' });
    } else if (this.state.subjects.length === 0) {
        this.setState({ matieresButtonId: 'matieres-button-alert' });
    } else {
        console.log(this.props.parent);
        if (this.props.parent === 'Homepage') {
            console.log(this.props.history);
            this.props.history.push('/connexion');
        }
    }
}

/**
 * Uses GeoSuggest (google places api) to choose a town
 * Uses Search By Subject modal to choose subjects
 */
render() {
    return (
        <div className="container" id="search-bar" >
            <div className="text-center">
                <form action="">
                    <div className="row">
                        <div className="col">
                            <Geosuggest
                                queryDelay={150}
                                autoActivateFirstSuggest={true}
                                inputClassName={this.state.geosuggestId}
                                placeholder="Où ?"
                                country="fr"
                                onSuggestSelect={this.onSuggestSelect} />
                        </div>
                        <div className="col">
                            <Link to="/">
                                <button data-toggle="modal" data-target=".choose-subject-modal" className="btn clickable" id={this.state.matieresButtonId}>
                                    <i className="fa fa-graduation-cap"></i>  Matières ?
                                </button>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/">
                                <button type="submit" className="btn clickable" id="search-button" onClick={this.search}>
                                    <h5 id="search-btn-txt"><i className="fa fa-search"></i>  Trouver</h5>
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
                <SearchBySubjectsModal search={this.search} location={this.state.location} setSubjects={this.setSubjects} />
            </div>
        </div>
    );
};
}

export default withRouter(SearchBar);
```

Thank you for your answers :)

---

try use just: `hashHistory.push('/your/path');`

And in ur head: `import { hashHistory } from 'react-router';`
