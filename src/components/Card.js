import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <h3 className='card-title'>{props.title}</h3>
      <div className='card-body'>{props.body}</div>
      <div className='card-footer'>{props.footer}</div>
    </div>
  );
}

export default Card;
