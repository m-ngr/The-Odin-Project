import "./Card.css";

export default function Card({ card, onClick }) {
  function handleClick() {
    if (onClick) onClick(card);
  }

  return (
    <figure onClick={handleClick} className="Card">
      <img src={card.image} alt={card.name} />
      <figcaption>{card.name}</figcaption>
    </figure>
  );
}
