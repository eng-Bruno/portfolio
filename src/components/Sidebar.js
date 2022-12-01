import React from "react"
import { connect } from "react-redux"

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="flex">
                <div className={`w-72 h-screen bg-dark-purple`}>Sidebar</div>
                <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
                    <h1>Home Page</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Sidebar)