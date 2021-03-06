import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom'

export const Tabs = (props) => {
    const {children} = props;
    return (
        <ul className="fd-tabs-container">
            {children}
        </ul>
        );
}

export class TabComponent extends Component {

    constructor(props) {
        super(props);
        this.handleTabSelection = this.handleTabSelection.bind(this);
        let initialStates=[]

        props.ids.map(ids => { 
            let obj = {}
            let id = ids.id
            obj[id] = false
            initialStates.push(obj)
        })
        this.state = {
            selectedTab: '1',
            tabStates: initialStates,
        }

        this.handleTabSelection = this.handleTabSelection.bind(this);
    }

    handleTabSelection(e, id) {
        let iStates = Object.assign({}, this.state.tabStates)
        iStates[id.id] = !iStates[id.id]
        this.setState({tabStates: iStates});
        this.setState({selectedTab: id.id});
    }

    render() {
        const {ids} = this.props
        return (
            <BrowserRouter>
            <ul className="fd-tabs">
                {
                    ids.map(id => {
                        return(
                        <li className="fd-tabs__item" key={id.id}>
                            
                            <Link aria-disabled={id.disabled} className={`fd-tabs__link${(this.state.selectedTab === id.id) ? ' is-selected': ''}`}to={{pathname: id.url}} onClick={(e) => {!id.disabled && this.handleTabSelection(e, id, id.disabled)}}>{id.name}</Link>
                            {this.state.selectedTab === id.id ? <p className='fd-tabs__content'>{id.content}</p> : null}
                        </li>
                        )
                    })
                }
            </ul>
            </BrowserRouter>);
    }
}

TabComponent.propTypes = {
    ids: PropTypes.array.isRequired,
}