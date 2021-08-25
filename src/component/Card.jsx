export default function Card(props) {

    return (
        <div className="card">
            <div className="card__header">
                <h3>{props.title}</h3>
            </div>
            <div className="card__footer">
                <p>{props.subTitle}</p>
            </div>
        </div>
    )
}