import React, { useEffect, useState } from "react";

function App() {
    const [timer, setTimer] = useState(0);
    const [control, setControl] = useState("stop");
    const [show, setShow] = useState("");

    useEffect(() => {
        if (control === "running") {
            setTimeout(() => {
                setTimer((timer) => timer + 1);
                // setTimer(timer);
            }, 20);
        }
        else if (control === "stop") setTimer(0);

        toHHMMSS(timer);
    }, [timer, control]);

    const toHHMMSS = (sec) => {
        let sec_num = parseInt(sec, 10);
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - hours * 3600) / 60);
        let seconds = sec_num - hours * 3600 - minutes * 60;

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        setShow(hours + ":" + minutes + ":" + seconds);
    };

    return (
        <div className="parent">
            <h1>Stopwatch</h1>
            <div className="section">
                {show}
                <button
                    className="button"
                    onClick={() => {
                        setControl("running");
                    }}
                >
                    start
                </button>
            </div>
            <div className="res">
                <button
                    className="reset"
                    onClick={() => {
                        setControl("stop");
                        setTimer(0);
                        // setControl("running");
                    }}
                >
                    reset
                </button>
                <button
                    className="stop"
                    onClick={() => {
                        setControl("pause");
                        // setControl("running");
                        if (setControl == "pause") {
                            setControl("running")
                        }
                    }}
                >
                    stop
                </button>
            </div>
        </div>
    );
}
export default App;