import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_activities } from '../actions';

class ActivityList extends Component {
    componentDidMount(){
        this.props.fetch_activities();
    }

    render() {
        const { activities } = this.props;
        if(!activities){
            return <div>Loading...</div>;
        }

        return (
            <ul className="list-group">
                {activities.map(activity => <li onClick={() => this.props.handleClick(activity.id)} key={activity.id} className="list-group-item">{activity.title}</li>) }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return { activities: state.activities };
}

export default connect(mapStateToProps, { fetch_activities })(ActivityList);