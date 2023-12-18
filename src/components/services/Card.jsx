/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <>
      <div className="card card-image-cover">
        <img src="https://source.unsplash.com/random/300x200" alt="" />
        <div className="card-body">
          <h2 className="card-header text-yellow-500">{props.header}</h2>
          <p className="text-content2 font-serif">
            {props.text}
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Card;
