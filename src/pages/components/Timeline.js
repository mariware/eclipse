import React, { Component } from 'react';
import '../../index.css';
import ReactMarkdown from 'react-markdown';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts/AO3', false, /\.md$/)).sort();

class Timeline extends Component {

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
            <div className = "timeline">
            {
                posts.map((post, idx) => (
                <section className = "stories" id = { idx }>
                    <div>
                        <ReactMarkdown children = { post } />
                    </div>
                </section>
              ))
            }
            </div>
        )

    }

}

export default Timeline

// Code Tutorial from https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f