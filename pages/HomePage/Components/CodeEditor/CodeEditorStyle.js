import styled from 'styled-components'

export const EditorContainer = styled.div`
  height: 100%;
  .react-codemirror2 {
    position: relative;
    flex: 1;
    box-sizing: border-box;
  }
  .CodeMirror {
    border: 3px solid;
    position: absolute;
    height: 100%;
    width: 100%;
    line-height: normal;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    padding: 0;
    border-radius: 0;
    border: 0;
    overflow: hidden;
  }
  .CodeMirror-gutters {
    background: white;
    border-right-color: #eeeeee;
  }
  .CodeMirror-lines {
    padding: 10px 0;
  }
  .CodeMirror pre {
    padding: 0 10px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

export const CodeArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 0;
`;
