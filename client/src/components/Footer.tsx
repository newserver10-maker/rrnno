

// ==========================================
// [의도] 웹사이트 최하단 정보를 담당하는 푸터.
// ==========================================
const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
      <h2 className="text-xl font-bold tracking-tighter mb-4">STUDIORANO</h2>
      <p className="text-sm text-gray-400 font-light mb-8 max-w-sm">
        '한국의 유니크함'을 현대적으로 재해석한 프리미엄 브랜드
      </p>
      <div className="flex space-x-6 mb-8 text-sm text-gray-500 font-light">
        <a href="#" className="hover:text-gray-900 transition">이용약관</a>
        <a href="#" className="hover:text-gray-900 transition">개인정보처리방침</a>
        <a href="#" className="hover:text-gray-900 transition">고객센터</a>
      </div>
      <p className="text-xs text-gray-400">&copy; 2026 Studiorano. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
