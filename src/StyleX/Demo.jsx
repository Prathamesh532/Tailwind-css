import React from "react";
import * as stylex from "@stylexjs/stylex";
import { b, para, btn , inp , f, loginDiv } from "../AllStyles/Styles";

const styles = stylex.create({
  heading: {
    color: "blue",
    backgroundColor: "yellow",
  },
});

const Demo = () => {
  return (
    <div>
      {/* Trying StyleX  */}

      <h1 {...stylex.props(styles.heading)}>Hello StyleX</h1>
      <button {...stylex.props(b.button)}>StyleX</button>
      <span {...stylex.props(para.p)}>
        StyleX combines the strengths and avoids the weaknesses of both inline
        styles and static CSS. Defining and using styles requires only local
        knowledge within a component, and avoids specificity issues while
        retaining features like Media Queries. StyleX builds optimized styles
        using collision-free atomic CSS which is superior to what could be
        authored and maintained by hand.
      </span>


      {/* Login componentes */}

      <div {...stylex.props(loginDiv.loginBody)} >
        <h1 id="login-header">Login</h1>

        <form {...stylex.props(f.loginForm)}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...stylex.props(inp.loginInput)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...stylex.props(inp.loginInput)}
          />
          <input {...stylex.props(btn.loginBtn)} type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Demo;
