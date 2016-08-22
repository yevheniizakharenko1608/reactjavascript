import React, { Component } from 'react'
import './styles.scss'

export default class Slider extends Component{
    render(){
        let label = this.props.label !== '' ? <label>{this.props.label}  {this.props.val}</label> : '';
        return (
            <div>
                <input ref='inp'
                       type={this.props.type}
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       defaultValue={this.props.val}
                       onChange={this.props.update} />
                {label}
            </div>
        )
    }
}

Slider.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.string,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.string
};

Slider.defaultProps = {
    min: 0,
    max: 255,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
};