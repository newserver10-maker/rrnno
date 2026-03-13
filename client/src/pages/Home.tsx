import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-start bg-gray-50">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src="/assets/images/hero_bg_1773383845854.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center opacity-90" 
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full animate-[fadeIn_1.5s_ease-in-out]">
        <p className="text-sm uppercase tracking-[0.3em] font-semibold text-white/80 mb-4">New Collection Launch</p>
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mt-2 mb-6 tracking-tight drop-shadow-lg">
          Modernity<br />in Tradition
        </h2>
        <p className="text-lg md:text-xl text-white/90 font-light max-w-md mb-10 leading-relaxed drop-shadow-md">
          '한국의 유니크함'을 현대적으로 재해석한 가방 브랜드, 스튜디오라노의 첫 번째 컬렉션을 만나보세요.
        </p>
        <a href="#products" className="inline-block px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition duration-300 shadow-md">
          Explore Collection
        </a>
      </div>
    </section>
  );
};

type ProductType = {
  id: string;
  badge: string;
  name: string;
  price: string;
  imgSrc: string;
  filterClass?: string;
};

// ==========================================
// [의도] 사용자가 상품 카드 자체를 클릭하면 구매/상세 페이지로 넘어갈 수 있도록
// onClick 이벤트 및 react-router-dom의 useNavigate를 적용하여 동적인 반응형 웹을 구현함.
// ==========================================
const ProductCard = ({ product }: { product: ProductType }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    // 상품 구매 페이지로 넘어가면서 상품 ID를 파라미터로 넘김
    navigate(`/purchase/${product.id}`);
  };

  return (
    <div 
      onClick={handleProductClick} 
      className="group cursor-pointer rounded-sm hover:-translate-y-2 transition-transform duration-300"
      title={`${product.name} 구매하기`}
    >
      <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm shadow-md group-hover:shadow-xl transition-shadow duration-300">
        <img 
          src={product.imgSrc} 
          alt={product.name} 
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${product.filterClass || ''}`} 
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{product.badge}</p>
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
        <p className="text-md text-gray-900 mt-2 font-light">{product.price}</p>
        
        <button 
          onClick={(e) => {
            // 버튼 클릭 시에는 위로 이벤트가 전파되어 ProductCard 전체가 눌린 것으로 간주되는 걸 막거나 유지
            // 여기서는 상품 전체가 clickable 하므로 버튼은 시각적 효과 부여용임
            // 버튼 클릭 = 카드 클릭이 되도록 그대로 둔 상태
          }}
          className="mt-4 px-6 py-2 border border-gray-300 text-sm hover:bg-black hover:text-white transition-colors duration-300 w-full lg:w-auto"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

const ProductCatalog = () => {
  const products: ProductType[] = [
    { id: "p001", badge: "New", name: "단청 모티브 에코백", price: "45,000원", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png" },
    { id: "p002", badge: "Bestseller", name: "한복 실루엣 에코백", price: "48,000원", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png" },
    { id: "p003", badge: "Limited", name: "전통 자수 에코백", price: "52,000원", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png", filterClass: "filter grayscale-[20%]" },
  ];

  return (
    <section id="products" className="py-24 bg-white pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Unique Eco-bag</h2>
            <p className="text-gray-500 mt-4 font-light">전통 모티브의 디테일과 현대적인 실용성을 겸비한 디자인 (상품을 클릭하여 구매 페이지로 이동하세요)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandStory = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-24">Our Story</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="w-full lg:w-1/2">
            <div className="aspect-square lg:aspect-video bg-gray-200 overflow-hidden rounded-sm shadow-sm">
              <img src="/assets/images/brand_story_texture_1773383877086.png" alt="Material Texture" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Origin</p>
            <h3 className="text-3xl font-medium mb-6 leading-tight">가장 한국적인 것이<br />가장 현대적인 순간</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              스튜디오라노는 전통적인 모티브를 현대적인 라이프스타일에 맞게 재해석합니다. 
              우리의 첫 번째 여정인 에코백은 일상 속에서 가볍게 들 수 있으면서도 
              고유한 디테일이 살아있는 캔버스입니다. 섬세한 질감과 여백의 미를 통해 
              시간이 지나도 변치 않는 가치를 전달합니다.
            </p>
          </div>
        </div>

         <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="aspect-square lg:aspect-video bg-gray-200 overflow-hidden rounded-sm shadow-sm">
              <img src="/assets/images/hero_bg_1773383845854.png" alt="Brand Direction" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pr-10 text-left lg:text-right">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Vision</p>
            <h3 className="text-3xl font-medium mb-6 leading-tight">에코백에서 가죽으로,<br />확장되는 브랜딩</h3>
            <p className="text-gray-600 leading-relaxed font-light lg:ml-auto">
              자연스럽고 편안한 에코백에서 시작된 우리의 이야기는 
              곧 완성도 높은 가죽 가방으로 이어질 예정입니다. 
              확고한 취향을 지닌 분들을 위해, 스튜디오라노는 소재의 한계를 넘어 
              끝없이 진화하는 디자인 스펙트럼을 선보일 것입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
    return (
        <main>
            <Hero />
            <ProductCatalog />
            <BrandStory />
        </main>
    );
};

export default Home;
