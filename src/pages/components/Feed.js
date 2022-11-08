import React, { Component } from 'react';
import '../../index.css';
import ReactMarkdown from 'react-markdown';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts/Windtalker', false, /\.md$/)).sort();

class Feed extends Component {

    state = {
        posts: [],
    }

    async componentDidMount() {
        const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
            .catch((err) => console.error(err));

        this.setState((state) => ({ ...state, posts }));
    }

    render() {

        const { posts } = this.state;

        return (
            <div className = "feed">
            {
                posts.map((post, idx) => (
                <section className = "posts" id = { idx }>
                    <div className = "content">
                        <ReactMarkdown children = { post } />
                    </div>
                </section>
              ))
            }
            </div>
        )

    }

}

export default Feed

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY + 101.5);
});

// Code Tutorial from https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f