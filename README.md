
# 🎨학교 주변 음식점 정보 제공/리뷰/요청 처리 서비스_ 

### 1. 회원 인증 및 권한 부여

- 회원가입
    - 구글 smtp, Java Mail => 메일 인증 후 회원가입 완료
- 로그인
    - 광운대학교 재학생 / 관리자 2개의 권한 존재
    - 유저의 pk, 이메일, 권한, 만료시간을 payload에 담아 JWT

- 비밀번호는 회원가입/로그인 모두 base64로 인코딩 해 전송되고 회원가입시 추가적인 암호화 후 저장

### 2. 지도 내 음식점 위치 표시

### 3. 음식점 목록 조회, 검색 및 상세 정보 조회, 좋아요 표시

- 음식점 목록
  1. 음식점 목록 무한 스크롤
  2. 현재 시간과 음식점의 영업 시간과 비교하여 open, close 여부 동적 표시
  3. 키워드로 음식점 검색 기능 구현
  4. 음식점 목록 반응형 디자인
  5. 메인화면에서 사용자가 많이 좋아요 누른 음식점, 리뷰 평점이 높은 음식점 각 5개

- 음식점 상세 
  1. 메뉴 목록 페이징 처리
  2. 메뉴 목록에서 키워드가 포함된 메뉴명을 검색하거나 입력한 가격이하의 메뉴들을 조회할 수 있습니다.
  3. 로그인된 유저의 경우 상세 페이지 내 좋아요 기능

### 4. 인증된 유저의 음식점 리뷰 조회 및 작성

상세 기능

1. 무한 스크롤
2. 로그인 여부에 따른 리뷰 조회 및 작성 차별화
3. 비로그인 게스트 유저의 경우 블러된 리뷰 목록 조회
4. 리뷰 작성 시 메뉴 선택 기능
5. 별점으로 점수 선택 기능

### 5. 인증된 유저의 음식점 정보 갱신 요청

마감시감, 오픈시간, 특정 메뉴명 변동, 특정 메뉴 가격 변동 총 4가지 카테고리에 대해 요청할 수 있습니다. 시간과 메뉴에 대한 선택에 따른 서로 다른 세부 모달 항목을 보여줍니다.

상세 기능

1. 요청 사항 목록 페이징 처리
2. 로그인 여부에 따른 갱신 요청 조회 및 작성 차별화
3. 비로그인 게스트 유저의 경우 블러된 요청사항 목록 조회
4. 요청 사항 작성 시 카테고리 선택 및 선택에 따른 다른 작성 모달 제공

### 6. 관리자 기능

관리자 권한으로 모든 요청사항에 대한 처리를 할 수 있습니다. 반려와 반영 두가지 처리 종류가 존재하며 반려의 경우 해당 요청에 대한 상태를 반려로 변경만 합니다. 반영의 경우 해당 내용이 변동사항 테이블에 저장되고
각 음식점의 변동 사항란에서 조회가 가능합니다.

상세 기능

1. 변동 사항 목록 페이징 처리
2. 어드민 페이지에서 요청 사항 처리
3. 처리에 따른 상태 변경 및 '반영' 처리 시 변경 사항 등록

### 7. Rest api 목록 문서화

구현한 Rest API 목록을 Swagger UI 라이브러리를 적용하여 보기 쉽게 문서화 하였습니다.

# 🎨DB 설계 & 흐름도

![erd.png](https://github.com/situodys/gourmet_BE/blob/dev/readme/erd.png)

- Restaurant과 Notification(변동사항)은 1:N의 관계입니다.
- Restaurant과 Menu는 1:N의 관계입니다.
- Restaurant과 Review는 1:N의 관계입니다.
- Restaurant과 Proposal(요청사항)는 1:N의 관계입니다.
- 한명의 Member는 여러 Restaurant에 좋아요를 남길 수 있고 하나의 Restaurant은 여러 Member의 좋아요를 갖을 수 있는 m:n의 관계이기에 별도의 Likes 테이블을 통해 1:N, N:1로
  풀어내었습니다.
- Member와 Proposal은 1:N의 관계입니다.
- Menu와 Proposal은 N:1의 관계입니다.
- 하나의 리뷰는 여러개의 메뉴를 선택할수 있고 하나의 메뉴는 여러 리뷰에서 선택될 수 있기에 별도의 ReviewedMenu 테이블을 통해 1:N, N:1로 풀어내었습니다.

![img.png](https://github.com/situodys/gourmet_BE/blob/dev/readme/flow.png)


# 🎨GA 분석 결과

![ga1.png](https://github.com/situodys/gourmet_BE/blob/dev/readme/ga1.png)

![ga2.png](https://github.com/situodys/gourmet_BE/blob/dev/readme/ga2.png)

### 분석

구현한 서비스의 페이지가 관리자 페이지를 제외하고 여러 음식점 목록을 조회하는 메인 페이지와 각 식당 상세 페이지 두개 뿐이기에 다양한 행동 흐름을 확인하기엔 한계가 있었습니다.

데모데이의 참여한 학생들은 메인 페이지와 설명 시에 참고 했던 restaurant_id가 40인 페이지를 가장 많이 방문하였습니다.

이 외 가장 많이 방문한 페이지의 음식점은 윤스쿡이었습니다.

# 🎨 UI 미리보기

## 메인화면
<p>
    <img src="https://github.com/situodys/gourmet_FE/blob/dev/docs/메인화면.gif" width="50%" />
</p>

## 음식점 상세(게스트)
<p>
    <img src="https://github.com/situodys/gourmet_FE/blob/dev/docs/게스트_식당상세.gif" width="50%" />
</p>

## 음식점 상세(인증 유저)
<p>
    <img src="https://github.com/situodys/gourmet_FE/blob/dev/docs/인증유저_식당상세.gif" width="50%" />
</p>

## 리뷰 등록
<p>
    <img src="https://github.com/situodys/gourmet_FE/blob/dev/docs/리뷰등록.gif" width="50%" />
</p>

## 요청사항 등록
<p>
    <img src="https://github.com/situodys/gourmet_FE/blob/dev/docs/요청사항등록.gif" width="50%" />
</p>

## 요청 처리 및 결과
<p>
    <img src="https://github.com/situodys/gourmet_FE/blob/dev/docs/요청처리및결과.gif" width="50%" />
</p>
