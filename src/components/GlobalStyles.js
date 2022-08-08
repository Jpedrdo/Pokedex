import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      "*::-webkit-scrollbar": {
        width: "0.4em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: "1px solid slategrey",
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        margin: "0px",
        color: "#fff",
        background:
          "linear-gradient(56deg, rgba(212,211,221,1) 0%, rgba(167,163,201,1) 100%)",
        height: "100%",
        width: "100%",
        "--type-first": "Helvetica, Arial, sans-serif",
        fontFamily: "var(--type-first)",
        paddingTop: "4rem",
      },
      a: {
        textDecoration: "none",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
      h1: {
        margin: "0px",
      },
      h2: {
        margin: "0px",
      },
      h3: {
        margin: "0px",
      },
      h4: {
        margin: "0px",
      },
      p: {
        margin: "0px",
      },
      ul: {
        listStyle: "none",
        padding: "0px",
        margin: "0px",
      },
      li: {
        listStyle: "none",
        padding: "0px",
        margin: "0px",
      },
      img: {
        display: "block",
        maxWidth: "100%",
      },
      button: {
        display: "block",
        fontSize: "1rem",
        fontFamily: "var(--type-first)",
        color: "#333",
      },
      input: {
        display: "block",
        fontSize: "1rem",
        fontFamily: "var(--type-first)",
        color: "#333",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return;
};

export default GlobalStyles;
