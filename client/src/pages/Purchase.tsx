import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// ==========================================
// [의도] 사용자가 상품을 클릭했을 때 보여지는 상품 상세/결제 모의 화면을 구현해
// 구매 가능 구조를 시뮬레이션함. 
// Cafe24로 본 HTML 코드를 이식할 경우, 이 화면은 Cafe24의 내장 상품 상세페이지로 대체됩니다.
// ==========================================
const Purchase = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // 더미 데이터 (실제로는 API 혹은 백엔드에서 ID 값 기반으로 불러옴)
  const productData = {
    p001: { name: "단청 모티브 에코백", price: "45,000원", desc: "한국 전통의 색과 미를 살린 오리지널 에코백.", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png" },
    p002: { name: "한복 실루엣 에코백", price: "48,000원", desc: "자연스럽게 떨어지는 곡선의 한복 핏을 그대로 담았습니다.", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png" },
    p003: { name: "전통 자수 에코백", price: "52,000원", desc: "한 땀 한 땀 장인의 정신이 담긴 자수 포인트.", imgSrc: "/assets/images/product_eco_bag_1_1773383860413.png" }
  };

  const product = productData[productId as keyof typeof productData] || productData['p001'];

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

          {/* 상품 정보 및 구매 버튼 영역 */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-light text-gray-600 mb-8 border-b pb-8">{product.price}</p>
            
            <p className="text-gray-500 leading-relaxed font-light mb-10">
              {product.desc}
              <br /><br />
              본 상품은 수작업으로 제작되어 한정된 수량만 판매됩니다. 천연 면 100% 소재이며 일상생활 속 모든 스타일에 자연스럽게 스며듭니다.
            </p>

            {/* 수량, 옵션, 장바구니/구매 버튼 등 */}
            <div className="flex gap-4 mb-4">
               {/* <!-- [Cafe24 변수] 장바구니 버튼 모듈 --> */}
              <button className="flex-1 py-4 border border-black text-black font-medium hover:bg-gray-50 transition w-full">
                Add to Cart
              </button>
               {/* <!-- [Cafe24 변수] 즉시 구매 버튼 모듈 --> */}
              <button 
                onClick={() => alert('Cafe24 환경에 이식되면 실제 결제 페이지로 이동합니다.')}
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
