import React from "react";
import {useAppState} from "../AppState.jsx";
import {Route, Link} from "react-router-dom";
import Form from "../components/Form.jsx";

const Dashboard = (props) => {

        const {state, dispatch} = useAppState()
        const {token, url, notes } = state

        const getNotes = async () => {
                const response = await fetch(url + "/notes/", {
                        method: "get",
                        headers: {
                                Authorization: "bearer " + token
                        }
                })
                

                const fetchedNotes = await response.json()
                dispatch({type: "getNotes", payload: fetchedNotes})
        }

        React.useEffect(() => {getNotes()}, []) 

        const loaded = () => (
                <div className="dashboard">
                <h1>My Resolutions</h1>
                <Link to="/dashboard/new"><button>Create New</button></Link>
                <Route path="/dashboard/:action" render={(rp) => <Form {...rp} getNotes={getNotes}/>}/>
                <ul>
                        {state.notes.map((note) => (
                                <div className="note" key={note.id}>
                                        <h2>{note.message}</h2>
                                </div>
                        ))}
                </ul>
                </div>
        )


        return notes ? loaded() : <h1>Loading...</h1>;
};

export default Dashboard;