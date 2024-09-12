import html from "html-literal";
import pic from "../images/me.jpg";

export default () => html`
  <div id="feed">
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
      <button id="clear" type="submit">send message</button>
    </form>
  </div>
  <img src="${pic}" alt="Me in NYC" class="styled-image" />

  <div>
    <p>
      About: What's up! My name is George Clark and I’m from St. Louis, MO. I
      graduated from the University of Missouri in Columbia, MO. I love
      traveling, listening to music, observing nature and taking on new
      experiences. Even though I’m not an avid sports fan, I do like the Los
      Angeles Lakers, STL City SC, St. Louis Cardinals and Green Bay Packers.
      Jamaican Curry with Rice is my favorite food and I’m the second oldest out
      of nine siblings. I’m hardworking and ambitious and I thrive at
      multi-tasking. I value the principle to always be busy and finish
      everything that I start.
    </p>
  </div>
  <div>
    contacts: Reach me by email @ george.clark0426@gmail.com
  </div>
`;
