import "./App.css";

function App() {
  return (
    <main>
      <div id="menu-header">
        <img
          class="profile-icon"
          src="https://thumb.tildacdn.com/tild3662-6661-4764-b331-373839393230/-/resize/360x/-/format/webp/logo_negro_la_villa.png"
          alt="Mark Lee"
        />
      </div>
      <nav>
        <button class="nav-button">
          <i class="fa-sharp fa-solid fa-table-columns"></i>{" "}
          <a href="https://www.lavillasants.com/la-villa-sants?table_number=1&delivery=restaurant">
            {" "}
            CARTA
          </a>
        </button>
        <button class="nav-button">
          <i class="fa-sharp fa-regular fa-pen-to-square"></i>
          <a href="https://profee.link/DSseKQ?r=eyJjIjoiZXVyIn0&flow=tips">
            PROPINA
          </a>
        </button>
        <button class="nav-button">
          <i class="fa-sharp fa-solid fa-bolt"></i>
          <a href="https://search.google.com/local/writereview?placeid=ChIJu0Wr_IWYpBIROJGP4dNWyT4">
            RESEÑAS EN GOOGLE
          </a>
        </button>
        <button class="nav-button">
          <i class="fa-regular fa-envelope"></i>
          <a href="https://www.tripadvisor.es/UserReviewEdit-d4600261">
            {" "}
            RESEÑAS EN TRIPADVISOR{" "}
          </a>
        </button>
        <button class="nav-button">
          <i class="fa-regular fa-heart"></i>
          <a href="https://instagram.com/lavillasants">SIGUENOS EN INSTAGRAM</a>
        </button>
      </nav>
    </main>
  );
}

export default App;
