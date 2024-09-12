import html from "html-literal";

export default () => html`
  <div class="container">
    <h1>Which Mario Bros's character would align with you most?</h1>
    <form id="quizForm">
      <!-- Question 1 -->
      <label
        >1. Which one of these colors Would you say you like the most?</label
      ><br />
      <input type="radio" name="color" value="Mario" /> Red<br />
      <input type="radio" name="color" value="Yoshi" /> Green<br />
      <input type="radio" name="color" value="Boo" /> White<br />
      <input type="radio" name="color" value="Bowser" /> Black<br />
      <input type="radio" name="color" value="Donkey Kong" /> Brown<br /><br />

      <!-- Question 2 -->
      <label>2. What's your favorite activity?</label><br />
      <input type="radio" name="activity" value="Mario" /> Jumping<br />
      <input type="radio" name="activity" value="Yoshi" /> Running<br />
      <input type="radio" name="activity" value="Donkey Kong" /> Dancing<br />
      <input type="radio" name="activity" value="Bowser" /> Fighting<br />
      <input type="radio" name="activity" value="Boo" /> Joking around<br /><br />

      <!-- Question 3 -->
      <label>3. How do you deal with challenges?</label><br />
      <input type="radio" name="challenge" value="Mario" /> Level-Headed<br />
      <input type="radio" name="challenge" value="Donkey Kong" /> Precise<br />
      <input type="radio" name="challenge" value="Yoshi" /> Joyfully<br />
      <input type="radio" name="challenge" value="Bowser" /> Aggressively<br />
      <input type="radio" name="challenge" value="Boo" />
      Impulsively<br /><br />

      <!-- Question 4 -->
      <label
        >4. If you had to pick one of these animals to keep as a pet which one
        would you choose?</label
      ><br />
      <input type="radio" name="animal" value="Mario" /> Human<br />
      <input type="radio" name="animal" value="Donkey Kong" /> Harambe<br />
      <input type="radio" name="animal" value="Bowser" /> Turtle<br />
      <input type="radio" name="animal" value="Boo" /> Jellyfish<br />
      <input type="radio" name="animal" value="Yoshi" /> Frog<br /><br />

      <button type="button" onclick="calculateResult()">
        See Your Character!
      </button>
    </form>

    <div id="result"></div>
  </div>
`;
