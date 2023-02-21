import React, { Component } from 'react'
import Navbar from '../Layouts/Navbar'
import SearchBox from '../Layouts/SearchBox'
import StakeHolderCardList from './StakeHolderCardList'


class Home extends Component {
    constructor(){
        super()
        this.state = {
        robots: robots,
        searchfield: ''
        }
    }
      
    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

    return (
        <div>
            <Navbar />
            <SearchBox searchChange={this.onSearchChange}/>
            <StakeHolderCardList robots={filteredRobots} />
        </div>
    )
    }
}

export default Home