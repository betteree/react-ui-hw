// 쿼리 스트링(Query String)
// 예) ?view=search-list&q=red

const QUERY_KEY = 'q';

// 읽기 location.search에서 쿼리 값 읽어서 반환하기기
export function getQueryParam() {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(QUERY_KEY);
}

// 쓰기(추가, 수정) 값을 추가하거나 업데이트한 후 URL 변경경
export function setQueryParam(queryValue: string) {
  const url = new URL(location.href);
  url.searchParams.set(QUERY_KEY, queryValue);
  history.pushState(null, '', url);
}

// 삭제 쿼리문을 삭제하고 URL을 업데이트 해주기
// 이미 해당 쿼리가 없으면 URL 업데이트를 생략하도록 변경
export function deleteQueryParam() {
  const url = new URL(location.href);
  url.searchParams.delete(QUERY_KEY);
  history.pushState(null, '', url);
}
