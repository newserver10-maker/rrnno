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

export type ProductType = {
  id: string;
  badge: string;
  name: string;
  price: string;
  imgSrc: string;
  filterClass?: string;
};

// ==========================================
// [의도] 개별 상품 카드를 렌더링하는 UI 조각(Component)입니다.
// 에코백, 가죽 가방 모두 동일한 UI 구조를 재사용할 수 있도록 독립된 함수로 분리했습니다. (구조 개선 / 중복 감소)
// ==========================================
const ProductCard = ({ product }: { product: ProductType }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
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
        <button className="mt-4 px-6 py-2 border border-gray-300 text-sm hover:bg-black hover:text-white transition-colors duration-300 w-full lg:w-auto">
          Buy Now
        </button>
      </div>
    </div>
  );
};

// ==========================================
// [의도] 범용적인 카탈로그 섹션 컴포넌트입니다.
// 섹션별 ID(sectionId), 제목(title), 설명(description)과 데이터(products)를 동적으로 주입받아
// 에코백 및 가죽 가방 섹션을 재사용성 있게 생성합니다.
// ==========================================
type CatalogSectionProps = {
  sectionId: string;
  title: string;
  description: string;
  products: ProductType[];
  bgColor?: string;
};

const CatalogSection = ({ sectionId, title, description, products, bgColor = "bg-white" }: CatalogSectionProps) => {
  return (
    <section id={sectionId} className={`py-24 pb-32 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
            <p className="text-gray-500 mt-4 font-light">{description}</p>
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
  // [의도] 제품 데이터를 각 카테고리별로 분리 정의하여 유지보수성 향상
  const ecoBagData: ProductType[] = [
    { id: "p001", badge: "New", name: "단청 모티브 에코백", price: "45,000원", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png" },
    { id: "p002", badge: "Bestseller", name: "한복 실루엣 에코백", price: "48,000원", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png" },
    { id: "p003", badge: "Limited", name: "전통 자수 에코백", price: "52,000원", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png", filterClass: "filter grayscale-[20%]" },
  ];

  const leatherBagData: ProductType[] = [
    { id: "l001", badge: "Signature", name: "오브제 레더 크로스백", price: "185,000원", imgSrc: "/assets/images/brand_story_texture_1773383877086.png", filterClass: "filter contrast-125" },
    { id: "l002", badge: "Upcoming", name: "소목장 텍스처 쇼퍼백", price: "240,000원", imgSrc: "/assets/images/brand_story_texture_1773383877086.png", filterClass: "filter grayscale-[50%]" },
  ];

  return (
    <main>
      <Hero />
      <CatalogSection 
        sectionId="products" 
        title="Unique Eco-bag" 
        description="전통 모티브의 디테일과 현대적인 실용성을 겸비한 디자인" 
        products={ecoBagData} 
      />
      
      {/* 2차 확장을 위해 새롭게 추가된 레더백 레이아웃 (배경색으로 카테고리 구분) */}
      <CatalogSection 
        sectionId="leather" 
        title="Leather Bag" 
        description="시간이 흐를수록 깊이를 더하는 프리미엄 가죽 라인업" 
        products={leatherBagData} 
        bgColor="bg-stone-50"
      />
      <BrandStory />
    </main>
  );
};

export default Home;
