import "./styles.css";

const ItemList = ({children}) => {
  return (
    <div className="list-container">
      {children}
    </div>
  )
};
export default ItemList;
