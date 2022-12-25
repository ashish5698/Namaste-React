const header = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );
  const header1 = React.createElement(
    "h2",
    {
      id: "sub-heading",
    },
    "Heading 2"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [header, header1]
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
  