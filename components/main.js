import html from "html-literal";
import * as views from "../views";

export default (state) => html`
  ${views["home"]()} ${views["form"]()} ${views["contacts"]()}
  ${views["theLab"]()} ${views[state.view](state)}
`;
