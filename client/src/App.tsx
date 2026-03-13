import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Purchase from './pages/Purchase';

// ==========================================
// [의도] BrowserRouter를 통해 SPA 화면 전환을 구현함.
// 기존 정적 홈페이지를 반응형 React 앱으로 확장하여 동적 라우팅이 원활하게 동작하게 함.
// ==========================================
function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-gray-900 antialiased overflow-x-hidden min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            {/* 기본 메인 홈페이지 */}
            <Route path="/" element={<Home />} />
            {/* 개별 아이템 클릭 시 넘어갈 상품/구매 시뮬레이션 상세 페이지 */}
            <Route path="/purchase/:productId" element={<Purchase />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
