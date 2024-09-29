const Card: React.FC<CardProps> = ({ name, imageUrl }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl m-3 border-none">
      {' '}
      {/* Added border-none here */}
      <figure className="border-b-0 border-r-0 border-l-0">
        {' '}
        {/* Moved border classes here */}
        <img
          src={imageUrl}
          alt="Shoes"
          className="rounded-t-lg object-cover w-full h-[350px] mb-2" // Removed border classes from here
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-black">{name}</h2>
        <div className="card-actions">
          <button className="btn-primary-besthub">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
