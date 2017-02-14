function Divider() {
    return <div className="divider" />
}

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.getMarkdown = this.getMarkdown.bind(this);
    }
    getMarkdown() {
        var out = "";
        if (this.props.value === "") {
            out = "See results here."
        } else {
            out = marked(this.props.value);
        }
        return { __html: out };
    }
    render() {
        return <aside className="input-output" id="react-output" dangerouslySetInnerHTML={this.getMarkdown()}></aside>
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.processInput = this.processInput.bind(this);
    }
    processInput(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <main>
                <textarea className="input-output" id="editor" placeholder="Enter markdown here" value={this.state.value} onChange={this.processInput} />
                <Divider />
                <Output value={this.state.value} />
            </main>
        )
    }
}

ReactDOM.render(<Input />, document.getElementById('react-container'))
