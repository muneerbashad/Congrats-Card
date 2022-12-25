const element = (
  // Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="card-heading">Kiran V</h1>
      <p className="card-description">
        Vishnu institute of computer Education and technology ,Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
      >
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
