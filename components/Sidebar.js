import React from "react"
import { connect } from "react-redux"

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>Sidebar!</div>
        )
    }
}

export default connect(mapStateToProps)(Sidebar)