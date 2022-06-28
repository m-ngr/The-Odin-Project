export default function Card({ card, onClick }) {
  function handleClick() {
    if (onClick) onClick(card);
  }

  return (
    <span onClick={handleClick}>
      <img src={card.image} alt="" width="200px" />
      <span>{card.name}</span>
    </span>
  );
}
