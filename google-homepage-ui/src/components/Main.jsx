export default function Main() {
  return (
    <main>
      <div>
        <h1>Google!</h1>
      </div>

      <div class="searchInput">
        <input type="text" />
        <div class="searchIconContainer">
          <i class="fa-solid fa-microphone"></i>
          <i class="fa-solid fa-camera"></i>
        </div>
      </div>

      <div class="searchButtonContainer">
        <button>
          <p>Google Search</p>
        </button>
        <button>I'm Feeling Lucky</button>
      </div>

      <div class="languageSelection">
        <p>
          Google offered in: <span>Malawi</span>
        </p>
      </div>
    </main>
  );
}
