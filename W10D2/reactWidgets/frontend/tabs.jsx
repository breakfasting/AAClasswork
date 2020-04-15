import React from 'react';
import Header from './header'

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: 0 };
    }

    changeTab(index) {
        this.setState({selected: index});
    }

    render() {
        let current = this.props.tabArray[this.state.selected]
        return (
            <div>
                <span>This is tabs</span>
                <span>
                    <ul>
                        {this.props.tabArray.map((ele, idx) => <Header fn={this.changeTab.bind(this)} id={idx} key={`tab${idx}`} title={ele.title} />)}
                        {/* {this.props.tabArray.map((ele, idx) => <Header onClick={this.changeTab.bind(this)} id={idx} key={`tab${idx}`} title={ele.title} />)} */}
                    </ul>
                    <article>{current.content}</article>
                </span>
            </div>
        )
    }
}

export default Tabs