import html from "html-literal";

export default (state) => html`
  <div class="container">
    <main class="main">
      <p>
        Hello☻ Welcome to my web application. It's going to be a wonderful
        experience...
      </p>
      <input type="text" placeholder="Enter Your name here...and press enter" />

      <h1>Random Kanye Quote</h1>
      <p id="quote">Click for advice from Kanye West!</p>
      <button id="quote-btn">Get Quote</button>
    </main>
  </div>
`;
