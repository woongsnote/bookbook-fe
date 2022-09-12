import Header from "../components/common/Header";
import Layout from "../components/layout/Layout";
import tw from "tailwind-styled-components";
import BookList from "../components/main/BookList";
import SearchForm from "../components/main/SearchForm";
import BookTower from "../components/main/BookTower";
import { useEffect, useState } from "react";
import ModeSwitchButtons from "../components/main/ModeSwitchButtons.jsx";

const Main = () => {
  //bookTower bookList 구분
  const [isTowerMode, setTowerMode] = useState(true);

  // TODO db에서 가져온 책 목록 저장
  const [books, setBooks] = useState([]);

  // TODO My character 설정(option)
  const [myCharacter, setMyCharacter] = useState({});

  // TODO DB에서 가져온 data + character
  const [bookTower, setBookTower] = useState([]);

  //가져온 배열에 캐릭터 추가

  useEffect(() => {
    setBookTower([...books, myCharacter]);
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <HomeContainer>
          <HomeHeadContainer>
            <HomeTitle>나의 독후감</HomeTitle>

            <ModeSwitchButtons setTowerMode={setTowerMode} />
          </HomeHeadContainer>
          <SearchForm />

          {isTowerMode ? (
            <BookTower books={bookTower} />
          ) : (
            <BookList books={books} />
          )}
        </HomeContainer>
      </Layout>
    </>
  );
};

export default Main;

const HomeContainer = tw.div`
mx-auto 
max-w-3xl 
border 
p-12
`;

const HomeHeadContainer = tw.div`
flex
`;

const HomeTitle = tw.h2`
w-1/2
lg:w-2/3
`;
