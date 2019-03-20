import React, {Component} from 'react';
import TodoList from './component/TodoList/TodoList';
import DigitalClock from './component/DigitalClock/DigitalClock';
import CommentBox from './component/CommentBox/CommentBox';
import CommentList from './component/CommentList/CommentList';
import ThemeBar from './component/ThemeBar/ThemeBar';
import ThemeContext from './ThemeContext'

const Themes = {
    'light': {
        'bgColor': '#eee',
        'classnames': 'btn btn-primary',
        'color': '#222'
    },
    'dark': {
        'bgColor': '#222',
        'classnames': 'btn btn-light',
        'color': '#fff'
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ['my first replay'],
            theme: 'light'
        };
        this.addComment = this.addComment.bind(this);
        this.onhandleChangeTheme = this.onhandleChangeTheme.bind(this);
    }

    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    onhandleChangeTheme(theme) {
        this.setState({theme});
    }

    render() {
        const {comments, theme} = this.state;
        return (
            <ThemeContext.Provider value={ Themes[theme] }>
                <TodoList />
                <DigitalClock />
                <CommentList
                    comments={ comments }
                />
                <CommentBox
                    addComment={ this.addComment }
                    commentLength={ comments.length }
                />
                <button
                    className="btn btn-light" onClick={ theme => this.onhandleChangeTheme('dark') }
                > 深色主题
                </button>
                <button
                    className="btn btn-primary" onClick={ theme => this.onhandleChangeTheme('light')}
                > 浅色主题
                </button>
                <ThemeBar />
            </ThemeContext.Provider>
        );
    }
}
export default App;