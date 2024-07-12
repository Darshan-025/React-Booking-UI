import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
            <img 
            src="https://images.unsplash.com/photo-1669046635805-eb7abf0418a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIyfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D" 
            alt="" 
            className="fpImg" 
            />
            <span className="fpName">Aparthotel Old Town</span>
            <span className="fpCity">Bengaluru</span>
            <span className="fpPrice">Starting from <span>&#8377;</span>30k</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
          </div>
        <div className="fpItem">
        <img
          src="https://plus.unsplash.com/premium_photo-1684175656161-21dddfef1324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from <span>&#8377;</span>45k</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://plus.unsplash.com/premium_photo-1687995673398-bf3e55667dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Hyderabad</span>
        <span className="fpPrice">Starting from <span>&#8377;</span>25k</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1613618902610-95d88084ee11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Bengaluru</span>
        <span className="fpPrice">Starting from <span>&#8377;</span>24k</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
          </div>
        </div>
      </div>
    );
};

export default FeaturedProperties;