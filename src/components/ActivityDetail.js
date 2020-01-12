import React, { Component } from 'react'

export default class ActivityDetail extends Component {
    render() {
        // console.log(this.props.slots);
        const { slots } = this.props;

        if(!slots){
            return <div>Please select activity</div>;
        }

        return (
            <div>
                { slots.map(slot => <li key={slot.id}>{ slot.title }</li>) }
            </div>
        )
    }
}
