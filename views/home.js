import html from "html-literal";

export default (state) => html` 
<div class="hme">Hello☻ Welcome to my web application. It's going to be a wonderful experience...</div>

<input id="homentry" type="text" placeholder="Enter Your name here...">
</main>
<div class="side">here</div>
<div class="sideb">here</div>

<div class="hmbt"><button>Next</button></div>

<h1>Random Kanye Quote</h1>
    <p id="quote">Click for advice from Kanye West!</p>
    <button id="quote-btn">Get Quote</button> ${state.quote}`;
