import React from "react";
import { connect } from "react-redux";
import { searchGitHubUser } from "../../functions/github";

import Emoji from "../../components/Emoji";
import Input from "../../components/Input";

import { Text, Button, Container } from "../../styles";

const container = {
  display: "flex",
  flex: 1,
  "flex-direction": "row",
  "align-items": "center",
  "justify-content": "center"
};
const title = { color: "#d9d9d9" };
const search = { color: "rgba(51, 51, 51, 1)", "font-size": 12, margin: 0 };

const Search = ({ user, ...props }): JSX.Element => {
  const [input, setInput] = React.useState("");

  const handleInput = event => setInput(event.target.value);
  const handleSearch = () => searchGitHubUser(input);

  console.log(user);
  return (
    <Container>
      <Text {...title}>
        Hey
        <Emoji symbol="👋" label="sheep" />
        {"\n"}Welcome
      </Text>
      <Container {...container}>
        <Input onChange={handleInput} />
        <Button onClick={handleSearch}>
          <Text {...search}>Search</Text>
        </Button>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.github.user
});

export default connect(mapStateToProps)(Search);
