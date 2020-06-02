import dynamic from 'next/dynamic';
import _map from 'lodash/map';

const CodeEditor = dynamic(() => import('./Components/CodeEditor'), {
  ssr: false,
});

class HomePage extends React.Component {
  state = {
    codeFiles: 'ascksadcsd',
    currentCodeFile: 0,
    language: 'javascript',
  }

  codeChangeHandler = (code, editor, data) => {
    // console.log(editor, data, code);
    // const { codeFiles : pCodeFiles, currentCodeFile } = this.state;
    // const codeFiles = _map(pCodeFiles, (file, index) => index === currentCodeFile ? code : file);
    this.setState({
      codeFiles: code,
    });
  }

  languageChangeHandler = ({ value }) => {
    this.setState({
      language: value,
    });
  }

  render() {
    const { language, codeFiles } = this.state;
    return (
      <div>
        <CodeEditor
          language={language}
          onChange={this.codeChangeHandler}
          code={codeFiles}
          onLanguageChange={this.languageChangeHandler}
          // error="default error"
        />
      </div>
    );
  }
}

export default HomePage;
