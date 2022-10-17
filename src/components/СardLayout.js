import Card from "./Card";
import "./Card.css"
const CardLayout = ({ users }) => {
  return (
    <>
      <h2>Online Users 875/2,452</h2>
      <span>Watch users</span>{" "}
      <div className="Card-grid">
      {users.map((el) => (
        <Card key={el.id}>{el}</Card>
      ))}</div>
    </>
  );
};

export default CardLayout;
