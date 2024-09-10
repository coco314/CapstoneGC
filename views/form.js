import html from "html-literal";

export default () => html`
  <section id="formp">
    <h3>
      Thank You for being here! Before we go further...Please fill out the form
      below.
    </h3>
    <main>
      <form id="fe" action="/" method="GET" id="form">
        <input type="text" id="?1" />1.Are you someone who likes for things to
        be simple and original.. Or do you like to think outside the box?
        <br />
        <input type="text" id="?2" />2.Do you tend to match the social
        environment of people around you? or does your mood always remain the
        same no matter your surroundings ?
        <br />
        <label
          >3.What is the spectrum of your mood throughout most of your day ?
        </label>
        <ul id="?3">
          <li><input type="radio" /></li>
          <li><input type="radio" /></li>
          <li><input type="radio" /></li>
          <li><input type="radio" /></li>
        </ul>
        <br />
        <label
          >4.If you had to pick one of these animals to keep as a pet which one
          would you choose?
          <img src="https://giphy.com/gifs/speed-ixKbC3GkQL1Mk" />
        </label>
        <ul id="?4">
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
        </ul>
        <br />
        <label>
          5.choose three of the personality traits that you would say fit you
          the most. (only 3)
        </label>
        <ul id="formchoice">
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
          <li><input type="checkbox" /></li>
        </ul>
        <br />
        <input type="text" id="?6" />6.Are you outgoing and extrovert or are you
        someone who tends to stay themselves and enjoy their own company ?
        <br />
        <input type="text" id="?7" />7.Which one would you say aligns more with
        how you are as a person ("I'm very funny and like to joke and have fun")
        or ("I am always focused. I have no time to have fun")

        <br />
        <input type="text" id="?8" />8.Do you believe that you are the best at
        whatever you do and that no one else can out compete you?
        <br />
        <input type="text" id="?9" />9.Are you someone who gives up after the
        first try or do you have the ambition to get better over time?(EVEN IF
        IT TAKES A LONG TIME!)
        <br />
        <input type="text" id="?10" />10.Do you prefer for adventures to be
        easy? or Are you into challenges?
        <br />
      </form>
    </main>
    <input type="submit" value="Submit" id="Submit" />
  </section>
`;
