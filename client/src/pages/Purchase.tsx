import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// ==========================================
// [의도] 실제 결제 환경에 맞춰 상태(State) 기반의 수량 조절 및 
// 옵션(색상) 선택 인터페이스를 새롭게 구현했습니다. 
// 추후 결제 로직 연동 시 orderInfo 객체 등의 데이터로 조합되어 넘어갑니다.
// ==========================================
const Purchase = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // 사용자의 선택 상태 관리를 위해 useState 최신 문법 도입
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>('Ivory'); // 기본 색상

  // 통합된 더미 데이터 (Eco-bag + Leather Bag)
  const productData = {
    // 에코백 데이터
    p001: { name: "단청 모티브 에코백", price: 45000, desc: "한국 전통의 색과 미를 살린 오리지널 에코백.", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png", colors: ['Ivory', 'Charcoal'] },
    p002: { name: "한복 실루엣 에코백", price: 48000, desc: "자연스럽게 떨어지는 곡선의 한복 핏을 그대로 담았습니다.", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png", colors: ['Ivory', 'Navy'] },
    p003: { name: "전통 자수 에코백", price: 52000, desc: "한 땀 한 땀 장인의 정신이 담긴 자수 포인트.", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png", colors: ['White', 'Black'] },
    // 가죽 가방 데이터
    l001: { name: "오브제 레더 크로스백", price: 185000, desc: "부드러운 프리미엄 소가죽과 견고한 실루엣.", imgSrc: "/assets/images/brand_story_texture_1773383877086.png", colors: ['Camel', 'Black', 'Olive'] },
    l002: { name: "소목장 텍스처 쇼퍼백", price: 240000, desc: "전통 가구의 질감을 가죽에 정교하게 구현한 넉넉한 수납공간.", imgSrc: "/assets/images/brand_story_texture_1773383877086.png", colors: ['Deep Brown', 'Black'] }
  };

  const product = productData[productId as keyof typeof productData] || productData['p001'];
  
  // 가격 계산 (상품 가격 * 수량)
  const totalPrice = product.price * selectedQuantity;

  // 컴마(,) 포맷 함수 분리
  const formatPrice = (priceNum: number) => priceNum.toLocaleString('ko-KR') + "원";

  // 수량 증감 핸들러
  const handleQuantityIncrease = () => setSelectedQuantity(prev => prev + 1);
  const handleQuantityDecrease = () => setSelectedQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // 구매 진행
  const handleBuyNow = () => {
    alert(`[Cafe24 가상 결제]\n상품명: ${product.name}\n옵션: ${selectedColor}\n수량: ${selectedQuantity}개\n총액: ${formatPrice(totalPrice)}\n결제 모듈로 분기합니다.`);
  };

  return (
    <div className="w-full min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 뒤로가기 버튼 */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 text-sm text-gray-400 hover:text-black transition flex items-center gap-2"
        >
          <span>&larr;</span> Back to Collection
        </button>

        <div className="flex flex-col md:flex-row gap-16">
          {/* 상품 이미지 영역 */}
          <div className="w-full md:w-1/2">
            <img src={product.imgSrc} alt={product.name} className="w-full h-auto object-cover rounded-sm border border-gray-100 shadow-sm" />
          </div>

          {/* 상품 정보 및 구매 인터페이스 영역 */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-light text-gray-600 mb-8 pb-8 border-b border-gray-200">{formatPrice(product.price)}</p>
            
            <p className="text-gray-500 leading-relaxed font-light mb-10">
              {product.desc}
              <br /><br />
              본 상품은 수작업으로 제작되어 한정된 수량만 판매됩니다. 일상생활 속 모든 스타일에 자연스럽게 스며듭니다.
            </p>

            {/* 주문 옵션: 색상 선택 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm border transition-colors ${selectedColor === color ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-600 hover:border-gray-500'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* 주문 옵션: 수량 조절 */}
            <div className="mb-10">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center border border-gray-300 w-32 rounded-sm overflow-hidden">
                <button onClick={handleQuantityDecrease} className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition">-</button>
                <span className="flex-1 text-center text-sm font-medium">{selectedQuantity}</span>
                <button onClick={handleQuantityIncrease} className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition">+</button>
              </div>
            </div>

            {/* 최종 결제 금액 요약 */}
            <div className="flex justify-between items-center bg-gray-50 p-6 rounded-sm mb-6">
              <span className="text-sm font-medium text-gray-700">Total Price</span>
              <span className="text-xl font-semibold text-gray-900">{formatPrice(totalPrice)}</span>
            </div>

            {/* 결제 및 장바구니 버튼 */}
            <div className="flex gap-4 mb-4">
               {/* <!-- [Cafe24 변수] 장바구니 버튼 모듈 --> */}
              <button className="flex-1 py-4 border border-black text-black font-medium hover:bg-gray-50 transition w-full">
                Add to Cart
              </button>
               {/* <!-- [Cafe24 변수] 즉시 구매 버튼 모듈 --> */}
              <button 
                onClick={handleBuyNow}
                className="flex-1 py-4 bg-black text-white font-medium hover:bg-gray-800 transition shadow-lg w-full"
              >
                Buy It Now
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center">전 상품 무료 배송 / 7일 이내 반품 가능</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
