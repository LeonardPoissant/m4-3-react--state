import React from "react";
import styled from "styled-components";

const Typehead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");

  let userSearch = suggestions.filter(suggestion => {
    const whatIs = suggestion.title;
    console.log("AAAAAAAAAAAAAAAA", whatIs);
    const whatIsString = whatIs.toLowerCase();
    const suggestionLength = value.length >= 2;

    console.log("**************", suggestionLength);

    const valueQuery = whatIsString.includes(value.toLowerCase());
    console.log("asdasdasd", valueQuery);
    return valueQuery && suggestionLength;
  });

  const showSuggestion = value.length > 1;

  //const firstHalf = suggestion.title.slice(0);
  //const lasHalf = suggestion.title.slice();

  return (
    <>
      <Wrapper>
        <div className="styled Div">
          <Input
            class="styledInput"
            type="text"
            value={value}
            onChange={ev => {
              setValue(ev.target.value);
            }}
            onKeyDown={ev => {
              if (ev.key === "Enter") {
                handleSelect(ev.target.value);
              }
            }}
          />
          <StyledButton onClick={() => setValue("")}>Clear</StyledButton>
          {showSuggestion ? (
            <BookList>
              {userSearch.map(suggestion => {
                const startIndex = suggestion.title
                  .toLowerCase()
                  .indexOf(value.toLowerCase());

                console.log("FFFFFFFFFFFFFFFFF", startIndex);
                const endIndex = startIndex + value.length - 1;

                console.log("TTTTTTTTTTTTTTT", endIndex);

                const firstHalf = suggestion.title.slice(startIndex);
                const secondHalf = firstHalf.slice(endIndex);

                console.log("KkKKKKKKKKKKKKKKKK", firstHalf);
                console.log("NNNNNNNNNNNNNNNN", secondHalf);
                return (
                  <Books
                    key={suggestion.id}
                    suggestion={suggestion}
                    onClick={() => handleSelect(suggestion.title)}
                  >
                    {firstHalf}
                    <StyledBook>{secondHalf}</StyledBook>
                  </Books>
                );

                //}
                //else {
                //return
                // <div>

                // </div>
                //}
              })}
            </BookList>
          ) : (
            <> </>
          )}
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;
const BookList = styled.ul`
  list-style: none;
`;
const StyledBook = styled.div`
  font-weight: bold;
`;
const Books = styled.li`
  display: block;
  width: 50%;
  font-size: 10px;
  text-decoration: none;
  color: black;
  border: none;

  &.hover {
    background-color: yellow;
  }
`;
const StyledButton = styled.button`
  border-radius: 3px;
  font-size: 20px;
  background-color: blue;
  color: white;
`;
export default Typehead;
