import React, {Component} from 'react';

class DigitalClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    //组件的生命周期 组件加载时调用
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    //组件的生命周期 组件update时候调用，接收两个参数，第一个当前的props(我们这里没有props传过来，为空对象)，第二个是当前的状态值
    componentDidUpdate(currentProps, currentState) {
        console.log(currentProps);//打印为{}
        console.log(currentState);
    }

    //组件的生命周期 组件卸载时候调用
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div
                className="digital-clock-component jumbotron"
            >
                { this.state.date.toLocaleTimeString() }
            </div>
        )
    }
}

export default DigitalClock;