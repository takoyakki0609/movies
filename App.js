/* 
1.홈페이지, movie페이지, moviedetail페이지
2. 홈페이지에서 배너를 볼 수 있다. 
3. 3가지 섹션의 영화를 볼 수 있다.(popular ,top rated, upcoming)
4. 각 영화에 마우스를 올려두면 제목, 장르, 점수, 인기도, 청불여부 보여주기
5. 영화를 슬라이드로 넘기며 볼 수 있다.
6. 영화를 클릭하면 영화 디테일 페이지를 볼 수 있다. 
7. 예고편을 누르면 예고편이 나오게 한다. 
8. 영화의 리뷰도 볼 수 있다. 
9. 관련된 영화도 볼 수 있다. 
10. 영화 검색도 할 수 있따.
11. 영화 정렬도 할 수 있다.
12. 영화를 필터링 할 수 있다. 
*/

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
