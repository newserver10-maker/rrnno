# Cafe24 연동 가이드

## 📁 파일 구조

```
cafe24/
├── index.html          ← Cafe24 메인(index.html) 파일 교체용
└── product_detail.html ← Cafe24 상품 상세(product/detail.html) 파일 교체용
```

## 📋 이식 순서 요약

1. **Cafe24 관리자** → [디자인 관리] → [스킨 보관함]에서 기본 스킨 복사 후 **작업용 스킨** 생성
2. 작업 스킨 → [스킨 편집기] 진입
3. `index.html` 에 `cafe24/index.html` 내용을 통째로 붙여넣기
4. `product/detail.html` 에 `cafe24/product_detail.html` 내용을 통째로 붙여넣기
5. 파일 내 **`[Cafe24 변수 치환 필요]`** 주석을 검색하여 실제 Cafe24 변수로 교체

## 🔑 핵심 변수 매핑 테이블

| 우리 코드 (더미 데이터) | Cafe24 스마트디자인 변수 |
| :--- | :--- |
| `src="이미지경로"` (상품목록) | `src="{$image_medium}"` |
| `alt="상품명"` | `alt="{$product_name}"` |
| `단청 모티브 에코백` | `{$product_name}` |
| `45,000원` (목록) | `{$product_price}` |
| `href="/product/detail.html?product_no=..."` | `href="{$link_product_detail}"` |
| `href="/product/detail.html"` (상세 주문폼) | Cafe24 기본폼 유지 |
| 사업자 정보 텍스트 | `{$company_info_module}` |

## ⚠️ 절대 건드리면 안 되는 요소 (Cafe24 결제 시스템 핵심)

```html
<!-- 이 input들의 id, name 속성은 절대 수정 금지! -->
<input type="number" id="quantity" name="quantity" ...>
<input type="hidden" name="product_no" value="{$product_no}">

<!-- 이 함수 이름은 절대 변경 금지! -->
onclick="basket_put()"    ← 장바구니 담기
onclick="direct_order()"  ← 바로 구매
```

## ✅ 이식 완료 후 테스트 체크리스트

- [ ] 모든 페이지 레이아웃 정상 표시
- [ ] 상품 이미지/이름/가격 정상 출력
- [ ] 상품 클릭 시 상세 페이지 이동
- [ ] 장바구니 담기 버튼 동작
- [ ] 바로 구매 버튼 → 결제 페이지 이동
- [ ] 회원 가입/로그인 플로우 정상
- [ ] 모바일 반응형 레이아웃 확인
- [ ] 결제 완료 페이지 정상 표시
