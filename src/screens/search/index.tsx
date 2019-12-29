import React from "react";

import { connect } from "react-redux";
import { dispatchUserInfo } from "../../actions/github";

import { searchGitHubUser } from "../../api/requests/user";

import Emoji from "../../components/Emoji";
import Input from "../../components/Input";

import { Text, Button, Container, Thumb } from "../../styles";

const container = {
  display: "flex",
  flex: 1,
  "flex-direction": "row",
  "align-items": "center",
  "justify-content": "center"
};
const centered = {
  display: "flex",
  flex: 1,
  "flex-direction": "column",
  "align-items": "center",
  "justify-content": "center"
};
const subtitle = {
  "font-family": "Courier Prime",
  "font-size": 14,
  color: "#d9d9d9"
};
const title = { color: "#d9d9d9" };
const name = { color: "#d9d9d9", "font-size": 12, margin: 0 };
const search = { color: "rgba(51, 51, 54, 1)", "font-size": 12, margin: 0 };

const Home = ({
  user,
  dispatchUserInfo
}: {
  user?: any;
  dispatchUserInfo: (param?: any) => void;
}): JSX.Element => {
  const [input, setInput] = React.useState("");

  const handleInput = event => setInput(event.target.value);
  const handleSearch = async () => {
    const response: object = await searchGitHubUser(input);
    return dispatchUserInfo(response);
  };

  return (
    <Container>
      <Text {...title}>
        Hey
        <Emoji symbol="👋" label="sheep" />
        {"\n"}Welcome
      </Text>
      <Text {...subtitle}>Search a github user</Text>
      {user && (
        <Container {...centered}>
          <Thumb src={user.avatar_url} />
          <Text {...name}>{user.name}</Text>
          <Text {...name}>{user.company}</Text>
          <Text {...name}>{user.blog}</Text>
        </Container>
      )}
      <Container {...container}>
        <Input onChange={handleInput} />
        <Button onClick={handleSearch}>
          <Text {...search}>Search</Text>
        </Button>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state: { github? }) => ({
  user: state.github.user
});

const mapDispatchToProps = { dispatchUserInfo };

const Search = connect(mapStateToProps, mapDispatchToProps)(Home);

export { Home, Search as default };
