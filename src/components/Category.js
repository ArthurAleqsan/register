import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/categoryAction';

class Category extends Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.props.selectCategory(e)
    }

    render() {
        return (
          <div className = 'categories-container'>
            <div onClick={this.onClick} className = "categories-box">A</div>
            <div onClick={this.onClick} className = "categories-box">B</div>
            <div onClick={this.onClick} className = "categories-box">C</div>
            <div onClick={this.onClick} className = "categories-box">D</div>
            <div onClick={this.onClick} className = "categories-box">E</div>
            <div onClick={this.onClick} className = "categories-box">F</div>
          </div>  
        );
    }
}

const mapStateToProps = state => ({
    selectCategory : state.e
})

export default connect(mapStateToProps, {selectCategory})(Category);