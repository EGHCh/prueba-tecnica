const PropertyCard = ({
  id,
  image,
  price,
  title,
  size,
  showRoad = false,
  electricity = false,
  water = false,
  location,
  onSelect,
  selected = false,
}) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(id, { image, price, title, size, location, showRoad, electricity, water });
    }
  };

  return (
    <div
      className={"card mb-4" + (selected ? " selected" : "")}
      onClick={handleClick}
      role="button"
      aria-pressed={selected}
      style={{ cursor: onSelect ? 'pointer' : 'default' }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
      />

      <div className="card-body text-start">
        <div className="card-title card-value">
          {price}
        </div>

        <p className="card-text">
          {title}
        </p>

        <p className="card-size">
          <i className="fa-solid fa-ruler-horizontal"></i>{" "}
          {size}
        </p>

        <small className="card-location">
          {location}
        </small>
      </div>

      <div className="card-footer text-muted text-start">
        {showRoad && (
          <small>
            <i className="fa-solid fa-road"></i>
          </small>
        )}
        {electricity && (
          <small>
            <i className="fa-solid fa-bolt"></i>
          </small>
        )}
        {water && (
          <small>
            <i className="fa-solid fa-tint"></i>
          </small>
        )}
      </div>
      {selected && (
        <div className="compare-badge">Comparado</div>
      )}
    </div>
  );
};

export default PropertyCard;