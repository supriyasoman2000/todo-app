
function ToDo({ items, removeItem, editItem }) {
  // structure props from App.js in a function parameters
  return (
    <div className="todo-task">
        <h1 style={{fontSize:'25px',marginBottom:'18px'}}>Tasks</h1>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="todo-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
             <h6 style={{backgroundColor:'skyblue'}} className="btn">Edit</h6>
            
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <h6 style={{backgroundColor:'red'}} className="btn">Remove</h6>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ToDo;