import "../style/components/tag.scss";

function Tag({ name }) {
    return (
        <div className="tag">
            <p>{name}</p>
        </div>
    );
}

export default Tag;