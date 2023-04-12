

# mdoc 프로젝트

## :star:사이트 소개
    남성들도 화장하는 시대가 도래하여 남성 전문 화장품을 판매하는 사이트로서 남성들의 피부고민상담을 들어주고,
    피부타입별 맞춤 화장품을 제공해주는 사이트 입니다.
## :date:일정
    2월 20일부터 3월 04일 까지

## :computer:디바이스
    PC


## :lips:개발언어
- React, jquery, javascript, html5, css

<img src="https://jason-img.s3.amazonaws.com/mdoc/react.png" style="width:100px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/jquery2.jpg" style="width:58px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/js.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/html5.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/css.png" style="width:56px">

## :earth_americas:개발환경
- VScode, npm, Node.js, AWS:S3

<img src="https://jason-img.s3.amazonaws.com/mdoc/vscode.png" style="width:90px"><img src="https://jason-img.s3.amazonaws.com/mdoc/npm2.png" style="width:60px; margin-left:3px;">
<img src="https://jason-img.s3.amazonaws.com/mdoc/nodejs.png" style="width:91px">
<img src="https://jason-img.s3.amazonaws.com/mdoc/aws.png" style="width:92px">


## :link:배포링크

- 배포방식은 AWS: S3의 배포방식을 이용하였습니다.
- [바로가기](https://jason-mdoc-03-06.s3.amazonaws.com/index.html)


## :clipboard:프로젝트 설명

### 프로젝트 계획서
- [ppt 파일](https://github.com/Ljason2/mdoc_23_03_05/files/11211271/MdoC.pdf)

### 기능명


 #### 헤더(Header)

1. 스크롤을 내리면 새로운 메뉴창이 뜨게 하는 기능
    
        Header 컴포넌트에 header2를 만들어서 또다른 header를 만든다. 
        jquery를 이용해서 헤더의 높이 이상으로 스크롤을 내리면 
        header2의 display가 flex가 되게하여 새로운 메뉴창이 뜨고, 그 외에는 display가 none이 되게 해서
        평상시에는 보이지 않게 한다.

2. 메뉴를 클릭하면 언더바 생기게하는 기능

        
        Header 컴포넌트에 언더바가 생기게 하는 함수를 따로 정의해주고,
        react-router-dom으로부터 NavLink를 불러들여서 그 안에 style 속성을 집어넣는다.
        그렇게하여 메뉴를 클릭하면 언더바가 생기게 된다.




#### 전체상품 페이지(productList.js)
1. 상품을 새롭게 정렬하는 기능

        useState를 사용해서 상품명순, 최고가순, 최저가순, 내용순을 클릭할 때마다 State가 바뀌면
        상품을 진열하는 배열이 바뀌어 상품이 새롭게 정렬된다.

    

2. 페이지 기능
    
        postsPerPage=4에서 각 페이지당 4개의 상품이 들어가게했고, indexOfLast와 indexOfFirst를 선언해주었다.
        Pagination 컴포넌트에서 for문을 이용해서 반복문으로 배열을 만들어서 map 매서드를 돌리면 
        각 페이지가 만들어지는데각 페이지를 클릭하면 slice매서드로 인해 새로운 배열이 재구성되어 
        페이지마다 새로운 상품이 뜨게 했다.


3.  상품검색기능

        글자를 칠 때마다 keyword를 바꿔주는 함수가 실행되고 검색버튼을 누르면 initKeyword를 바꿔주는 
        함수가 실행되어 배열이 바뀌면 키워드에 해당하는 상품이 검색되게 된다.


4.  상세보기를 클릭하면 상품 상세페이지로 이동하는 기능 
    
        Route안에 path=":courseSlug" 을 넣어서 상품 상세페이지로 이동하고 
        useParams()로 파라미터 값을 가져와서 객체를 받아 그걸로 상품의 정보를 보여준다. 
    

#### 상품 상세페이지(Product.js)
1.  장바구니 담는 기능

        장바구니를 클릭하면 localStorage에 속성, 값을 저장하는 함수로 인해 상품이 장바구니에 담기게 된다.


2.  장바구니 담자마자 장바구니로 이동하는 기능

        useNavigate를 사용하면 장바구니로 바로 이동할 수 있다.

3.  상품마다 관련상품을 보여주는 기능

        JSON 파일에 또 다른 배열을 추가하고 map 매서드를 사용해서 관련된 상품들이 나오게하였다.


#### 장바구니 페이지(WishList.js)

1.  장바구니 삭제 기능
    
        장바구니 삭제버튼을 누르면 localStorage에 있는 속성이 사라지는 함수로 인해 
        배열이 바뀌어 담겨있는 상품이 사라지게 된다.

2. 장바구니가 비어있다는 안내문이 뜨게하는 기능

        삼항연산자를 이용해서 조건이 참이면 안내문이 나오게하고, 거짓이면 장바구니에 담긴
        상품이 나오게 한다.

#### 리뷰 페이지(Review.js)
1. 리뷰남기기 기능

        빈 칸에 입력한 정보를 받기위해서 useState를 사용해야되고 리뷰 남기기 버튼을 누르면 배열의 끝 부분에 
        새로운 객체를 추가하는 formPublish 함수가 발생되어 리뷰를 추가할 수 있게 된다.

2. 리뷰를 남기면 새로운 창이 뜨는 기능

        리뷰를 남기면 리뷰이벤트의 소식을 알려주고, 남긴 리뷰내용을 다시 보여주는 새로운 창이 뜨는데
        그러기위해서 먼저 useState를 선언해줘야한다.
        리뷰 남기기 버튼을 누르면 formPublish 함수가 발생되어 state 값을 수정함으로써 새로운 창이 뜨게된다.

3. 리뷰 검색기능

        useState를 사용해서 글자를 칠 때마다 query2가 바뀌고 검색버튼을 누르면 query 값이
        query2 값으로 수정되어 배열이 바뀌면 검색한 리뷰가 나타나게 된다.
        
4. 리뷰 정렬기능


        정렬버튼을 누르면 DropDown 컴포넌트가 보여지고, 작성자, 상품명, 상품후기, 별점을 클릭할 때마다 
        State를 바꿔주는 함수가 발생해 배열이 바뀌어 리뷰들이 해당메뉴에따라 정렬되게 된다.
        

5. 리뷰 삭제기능


        리뷰삭제버튼을 누르면 해당 리뷰를 제외한 다른 리뷰들로 구성된 배열을 만드는 onDelectAppoint 함수가
        작동되어 리뷰가 삭제되게 된다.



#### 이벤트 페이지(Event.js)

1. 화장품 사진을 클릭하면 체크이미지로 바뀌는 기능(이벤트 페이지)

        이미지를 바꿔주는 함수 toggleImg를 정의하여 이미지를 클릭할 때마다 
        함수가 실행되어 화장품 사진이 체크이미지로 바뀌게 된다.

2. 화장품 사진을 올바른 순서로 클릭하면 성공사진과 화장이 멋지게 잘되었습니다가 뜨고, 
잘못된 순서로 클릭하면 실패사진과 화장이 실패했습니다ㅠㅠ가 뜨게하기.

        빈 배열을 가진 state를 정의해주고, 올바른 순서를 가진 배열을 정의해주며 
        이미지의 display에 관여하는 state를 정의해준다. 화장품사진을 클릭할 때마다 배열이 바뀌게 되어 
        정답확인을 클릭하면 만들어진 배열과 정답인 배열을 비교하게 된다.
        만약 if 문이 참이면 성공사진과 문구가 뜨고, 거짓이면 실패사진과 문구가 뜬다. 


#### 메인 페이지(Home.js)

1. 자동으로 베너랑 상품이 지나가게 만드는 기능

        jquery를 사용하여 3초마다 작동하는 타이머 함수를 만들어서 자동으로 베너랑 상품이
        지나가게 만들고, 화면에 마우스를 올리면 stop함수로 화면이 멈추게 만들었다.

2. 동영상 나오는 기능

        vedio 요소를 써서 화면에 동영상이 나오게 구현했다.

3. 메인페이지에서 상품을 클릭하면 상품 상세페이지로 가는 기능

        Link를 통해 상품 상세페이지로 갈 수 있게 구현했다.

#### 고민상담 페이지(WorryList.js)

1. 답변보기를 누르면 답변페이지로 이동하는 기능

        Route안에 path=":worrySlug" 을 넣어서 답변페이지로 이동하고 
        useParams()로 파라미터 값을 가져와서 객체를 받아 답변을 보여준다.


#### 고민답변 페이지(Worry.js)

2. 고민자마다 추천상품을 보여주는 기능

        JSON 파일에 또 다른 배열을 추가하고 map 매서드를 사용해서 추천 상품들이 나오게했다.

## :pencil2:피드백

### 배운점




- mdoc는 남성 전문 화장품을 판매하는 사이트로서 상품들이 페이지별로 있고, 그것들을 정렬할 수 있는데 
상품들을 페이지별로 나누고 정렬하기 위해서 slice와 sort 매서드가 핵심적인 역할을 한다는 것을 깨달았습니다.
    

- 이벤트 게시판에서 각 화장품의 사진을 올바른 순서로 클릭하고난뒤에 정답확인버튼을 눌러서 
    맞췄는지 틀렸는지 확인하기위해 배열을 만들어서 비교를 했지만, 배열이 비교가 되지 않아서
    고민하던 과정중에 toString 이라는 매서드를 써야 비교가 된다는 것을 깨달았습니다.



- 상품상세페이지 맨 밑에 관련된 상품을 보여주고, 고민자의 피부타입에 맞는 화장품을 
추천할 때 JSON 파일의 객체안에 또다른 배열을 만들어줘야 된다는 것을 알게되었습니다.


- 검색창에서 리뷰내용을 검색할 때 기존에 있던 state를 사용하다보니 입력할 때마다 검색이 되었는데
useState로 새로운 state를 선언했더니 버튼을 누르면 검색되게 할 수 있었습니다.

- 리뷰를 다쓰면 새로운 창이 나와서 리뷰이벤트의 소식을 알려주고, 남긴 리뷰내용을 다시 보여주기위해 
useState로 새로운 State를 선언해줘야 된다는 것을 알았습니다.
    




