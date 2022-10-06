function Post({ index, name, img, homeworks }) {
    const totalPoints = homeworks.reduce((a, b) => a + b);
    const mark = () => {
        const average = totalPoints / homeworks.length;
        switch (true) {
            case average < 60:
                return "S";

            case average < 80:
                return "G";

            case average < 89:
                return "VG";

            case average < 101:
                return "EX";

            default:
                return "";
        }
    };

    return (
        <div className="student-row">
            <div className="place">{index + 1}</div>
            <div
                className="avatar"
                style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="name">{name}</div>
            <div className="points">
                <div>{homeworks.length}</div>
                <div>{totalPoints}</div>
            </div>
            <div className="mark">{mark()}</div>
        </div>
    );
}

export default Post;
