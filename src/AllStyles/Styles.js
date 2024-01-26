import * as stylex from "@stylexjs/stylex";

export const b = stylex.create({
  button: {
    // color: "blue",
    // backgroundColor: "yellow",
    display: "block",
    fontSize: 18,
    borderRadius: 20,
    padding: "0.75rem",
    backgroundColor: {
      default: "yellow",
      ":hover": "darkviolet",
    },
    color: {
      default: "black",
      ":hover": "white",
    },
  },
});

export const para = stylex.create({
  p: {
    display: "block",
    textAlign: "center",
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: "bold",
  },
});

// Login

export const loginDiv = stylex.create({
  loginBody: {
    height: "100%",
    margin: 0,
    fontFamily: "sans-serif",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
  },
});

export const f = stylex.create({
  loginForm: {
    alignSelf: "flex-start",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  },
});

export const inp = stylex.create({
  loginInput: {
    border: "none",
    borderBottom: "1px solid #3a3a3a",
    marginBottom: "10px",
    borderRadius: "3px",
    outline: "none",
    padding: "0px 0px 5px 5px",
  },
});

export const btn = stylex.create({
  loginBtn: {
    width: "100%",
    padding: "7px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: {
        default: "red",
        ":hover": "blue"
    },
    cursor: "pointer",
    outline: "none",
  },
});
