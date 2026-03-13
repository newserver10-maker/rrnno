import { Link } from 'react-router-dom';

// ==========================================
// [의도] 모든 페이지에서 공통으로 사용될 네비게이션(GNB) 헤더.
// react-router-dom의 Link를 사용하여 깜빡임 없이 페이지를 이동시킵니다.
// ==========================================
const Header = () => {
  const navItems = [
    { label: 'Shop', href: '/#hero', isVisible: true },
    { label: 'Unique Eco-bag', href: '/#products', isVisible: true },
    // [의도] 2차 확장을 위해 설정해두었던 Leather Bag 메뉴를 활성화하여 화면에 표시함.
    { label: 'Leather Bag', href: '/#leather', isVisible: true },
    { label: 'About Us', href: '/#about', isVisible: true },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tighter">
          <Link to="/">STUDIORANO</Link>
        </h1>
        <nav>
          <ul className="flex space-x-8 text-sm font-medium">
            {navItems.map((item, index) => (
              item.isVisible && (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-500 transition">
                    {item.label}
                  </a>
                </li>
              )
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
