import html from "html-literal";

export default () => html`
  <div>
    <h2>Feedback</h2>
    <form action="https://formspree.io/f/manwvbwz" method="POST">
      <input
        type="text"
        name="first"
        placeholder="First Name"
        autocomplete="off"
        required
      />
      <input
        type="text"
        name="Last"
        placeholder="Last Name"
        autocomplete="off"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        autocomplete="off"
        required
      />
      <textarea
        rows="5"
        cols="60"
        name="message"
        maxlength="250"
        placeholder="enter text here"
        autocomplete="off"
        required
      ></textarea>
      <button class="feedb" type="submit">send message</button>
    </form>
  </div>
`;
