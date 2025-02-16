# 멋쟁이 사자처럼 프론트엔드 스쿨 2025 12기

React 프로그래밍 학습 저장소

1.
  const [sumProducts, setSumProducts] = useState(Products);
 
 // Products.map((pd) => {
    //   if (pd.name === name) {
    //     pd.total = total;
    //   }
    // });
    // 지금 Products 값 자체가 useState로 관리되는 상태가 아니다
    // 그래서 map 으로 total을 변경해도 React가 변경을 감지하지 못한다


   처음엔 Products를useState에 넣지 않고 그냥 변경을 했더니 변경이 감지 되지 않고 계속 값이 누적되는 현상이 발생했었는데 
   useState로 값을 변경하는 것을 감지하도록 했다
