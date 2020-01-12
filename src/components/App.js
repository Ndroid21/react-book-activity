import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_activity_slots } from '../actions';
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4" style={{ height: '90vh', overflowY: 'scroll' }}>
                        <ActivityList handleClick={this.props.fetch_activity_slots} />
                    </div>
                    <div className="col-md-8">
                        <ActivityDetail slots={this.props.slots} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { slots: state.slots };
}

export default connect(mapStateToProps, { fetch_activity_slots })(App);