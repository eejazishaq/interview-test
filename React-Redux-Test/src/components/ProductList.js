const ProductList = ({ Item, itemToCart, type }) => {
  return (
    <div className="col-md-4" style={{ marginBottom: "15px" }}>
      <div className="card">
        <div
          className="card-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <b>Gender:</b> {Item.gender}
          </div>
          <div>
            <b>Color:</b> {Item.primaryColour}
          </div>
        </div>

        <div style={{ height: "auto" }}>
          <img
            src={Item.searchImage}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="card-body">
          <div className="card-title">
            <small>{Item.category}</small>
            <p>{Item.productName.substring(0, 20)}</p>
            <div>
              <b>Cost: </b>
              {Item.price} ₹
            </div>
          </div>
        </div>

        <div
          className="card-footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {type == "product" && (
            <button
              className="btn btn-primary"
              onClick={() => itemToCart(Item)}
            >
              Add to Card
            </button>
          )}

          {type == "cart" && (
            <button className="badge badge-danger">QNT: {Item.quantity}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
