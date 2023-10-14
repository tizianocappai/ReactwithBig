import './Post.css';

export default function Post(props) {

    const {userId, id, title, body} = props;

    return(
        <div className="container">
            <span>{userId}</span>
            <p>
                {title}
                {body}
            </p>
           
        </div>
    );
}