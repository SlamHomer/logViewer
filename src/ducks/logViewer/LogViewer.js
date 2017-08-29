import * as React from 'react';
import AutoUpdater from "./AutoUpdater";
import LogParsedText from "./LogParsedText";
import FileDragAndDrop from 'react-file-drag-and-drop';
import {Panel, Well} from "react-bootstrap";

/**
 * TODO: comment me
 */
class LogViewer extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {
            wantToAddDataSource: false,
            dataSourceAdded: false,
            dataSourcePath: undefined,
            data: [],
            fileName: ''
        }
    }

    render() {
        const removeDataSource = () => {
            this.setState({
                wantToAddDataSource: false,
                dataSourceAdded: false,
                dataSourcePath: undefined,
                data: [],
                fileName: ''
            });
        };

        function parseFile(file, callback) {
            const fileSize = file.size;
            const chunkSize = 64 * 1024; // bytes
            let offset = 0;
            const self = this; // we need a reference to the current object
            let chunkReaderBlock = null;

            const readEventHandler = function (evt) {
                if (evt.target.error === null) {
                    offset += evt.target.result.length;
                    callback(evt.target.result, file.name); // callback for handling read chunk
                } else {
                    console.log("Read error: " + evt.target.error);
                    return;
                }
                if (offset >= fileSize) {
                    console.log("Done reading file");
                    return;
                }

                // of to the next chunk
                chunkReaderBlock(offset, chunkSize, file);
            };

            chunkReaderBlock = function (_offset, length, _file) {
                const r = new FileReader();
                const blob = _file.slice(_offset, length + _offset);
                r.onload = readEventHandler;
                r.readAsText(blob);
            };

            // now let's start the read with the first block
            chunkReaderBlock(offset, chunkSize, file);
        }

        const addChunksToState = (chunk, fileName) => {
            // By lines
            let thisData = [];
            const lines = chunk.split('\n');

            const length = lines.length;
            for (let line = 0; line < length; line++) {
                thisData.push(lines[line]);
            }

            this.setState({
                wantToAddDataSource: false,
                dataSourceAdded: true,
                dataSourcePath: "TEST PATH",
                data: [].concat.apply([], [this.state.data, thisData]),
                fileName: fileName
            });

        };

        const addDataSource = (dataTransfer) => {
            let file = dataTransfer.files[0];


            parseFile(file, addChunksToState);
        };

        const dataSourceLoadedView =
            <div>
                <AutoUpdater/>
                <LogParsedText data={this.state.data}/>
                <div>
                    <button onClick={() => removeDataSource()}>REMOVE DATASOURCE</button>
                </div>
            </div>;


        let fileDragAndDropStyle = {
            width: '50%',
            height: '100px',
            border: '1px solid #ccc',
            borderRadius: '16px',
            margin: '5px'
        };
        const dataSourceNotLoadedView =
            <div style={fileDragAndDropStyle}>
                <FileDragAndDrop onDrop={addDataSource}>
                    Drop files here...
                </FileDragAndDrop>
            </div>;


        const getView = () => {
            return this.state.dataSourceAdded ? dataSourceLoadedView : dataSourceNotLoadedView;
        };

        return (
            getView()
        );
    }
}

export default LogViewer;
