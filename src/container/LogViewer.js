import * as React from 'react';
import AutoUpdater from "../components/AutoUpdater";
import LogParsedText from "../components/LogParsedText";

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
            data: ["NOTHING"]
        }
    }

    render() {
        const removeDataSource = () =>{
            this.setState({
                wantToAddDataSource: false,
                dataSourceAdded: false,
                dataSourcePath: undefined,
                data: ["NOTHING"]
            });
        };

        const addDataSource = () =>{
            // TODO
            this.setState ({
                wantToAddDataSource: false,
                dataSourceAdded: true,
                dataSourcePath: "TEST PATH",
                data: ["TEST1", "TEST2"]
            });
        };

        const dataSourceLoadedView =
            <div>
                <div>
                    <AutoUpdater/>
                    <LogParsedText data={this.state.data}/>
                </div>
                <div>
                    <button onClick={() => removeDataSource()}>REMOVE DATASOURCE</button>
                </div>
            </div>;

        const dataSourceNotLoadedView =
            <div>
                <b>NO DATA SOURCE LOADED</b><br/>
                <button onClick={() => addDataSource()}>ADD DATA SOURCE</button>
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
