import React, {Component} from "react";

export default class AlertManeiro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

    }
    render() {
        return (
            <>
                <div hidden={this.state.active} className={"duration-75 transition"}>
                <div id="alert-border-3" className="flex p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
                    <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div className="ml-3 text-sm font-medium">Você acabou de entrar no portifólio do menino mais bonito do sesi!</div>

                    {/*BUTTOn*/}

                    <button type="button" onClick={() => {this.setState({ active: true})}} className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-border-3" aria-label="Close">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="30" height="30"
                             viewBox="0 0 30 30">
                            <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                        </svg>
                    </button>
                </div>
                </div>

            </>
        )
    }
}