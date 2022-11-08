import React from "react";
import styled from "styled-components";
import { clothesData } from "../data";
import SearchBar from "./SearchBar";

const Container = styled.div`
  padding: 0;
  margin: 0;
  color: #683a41;
  background: url("images/img-shop.jpg") center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Search = () => {
  return (
    <Container>
      <Wrapper>
        <SearchBar
          placeholder="What are you looking for?"
          style={{ color: "#683a41" }}
          data={clothesData}
        />
      </Wrapper>
    </Container>
  );
};

// export const Search = () => {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name} {user.last_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
