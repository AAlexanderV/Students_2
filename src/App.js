import "./App.css";
import Post from "./components/Post";

function App(props) {
    return (
        <div className="main-window">
            <div className="wrapper">
                <div className="header">
                    <div>Студент</div>
                    <div>Домашки/Баллы</div>
                </div>
                <div className="student-table">
                    {props.users
                        .sort(
                            (user1, user2) =>
                                user2.homeworks.reduce((a, b) => a + b) -
                                user1.homeworks.reduce((a, b) => a + b)
                        )
                        .map((value, index) => {
                            return (
                                <Post
                                    index={index}
                                    name={value.name}
                                    img={value.img}
                                    homeworks={value.homeworks}
                                    key={index}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;
