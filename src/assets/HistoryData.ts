const data = [
    {
      year: 1444,
      imageUrl: '세종.png',
      title: '한글을 창제하다',
      description: '한글은 서기 1443년 12월 ~ 1444년 1월 중순 (세종 25년 12월) 경에 창제되었다. 정확한 창제 주체에 관해서는 논란이 있지만, 세종대왕 본인이 소수 최측근의 도움만을 받아 창제하였을 것이라는 설이 가장 유력하다.'
    },
    {
      year: 1446,
      imageUrl: '훈민정음.jpg',
      title: '한글을 반포하다',
      description: '세종은 직접 창제한 한글을 3년 동안 직접 써보면서 다듬고, 이를 1446년 9월 (세종 27년 경)에 반포하였다. 당시 반포한 《훈민정음 해례본》에는 한글을 창제한 과학적, 철학적 원리가 담겨있고, 현재까지 전해져 내려온다.'
    },
    {
      year: 1447,
      imageUrl: '용비어천가.jpg',
      title: '용비어천가를 편찬하다',
      description: '세종은 한글을 시험해보기 위해 학자들을 시켜 1447년 (세종 28년) 경 《용비어천가》를 편찬했다. 한글로 쓰인 최초의 책이라는 의의가 있으며, 그만큼 초기 국어 및 한글의 특징을 제대로 담고있어 중요한 유산이다.'
    },
    {
      year: 1504,
      imageUrl: '연산군.jpg',
      title: '연산군이 한글을 탄압하다',
      description: '1504년 (연산 10년) 연산군이 투서를 받았는데, 그 속에는 한글로 자신을 비방하는 글이 쓰여져있었다. 분노한 연산군은 한글을 사용하는 자는 체포하라는 명령을 내렸다. 하지만 그도 한글의 유용함을 잘 알고있었고, 정책은 오래가지 못했다.'
    },
    {
      year: 1527,
      imageUrl: '훈몽자회.png',
      title: '훈몽자회를 편찬하다',
      description: '《훈몽자회》는 1527년 (중종 22년)에 어문학자 최세진이 지은 어린이용 한자 학습서이다. 3,360자의 한자에 각각 훈민정음으로 음과 뜻을 달았다. 당시의 한글, 한국어 연구의 이정표로써 높은 사료적 가치를 지닌다.'
    },
    {
      year: 1894,
      imageUrl: '갑오개혁.jpg',
      title: '나라의 글로 인정받다',
      description: '한글은 1894년 (고종 31년) 갑오개혁에서 마침에 국문, 즉 나랏글의 지위를 인정받았다. 칙령 제1호 및 제86호를 통해서 해당 시기부터 법령은 모두 국문을 바탕으로 삼고, 한문 번역을 붙이거나 혼용을 하도록 하였다.'
    },
    {
      year: 1896,
      imageUrl: '독립신문.png',
      title: '독립신문이 발간되다',
      description: '1896년, 한국 최초의 민간 신문이자 순한글 신문인 독립신문이 간행되었다. 독립협회의 기관지로 발간되었으며, 한글의 사용에 있어서 띄어쓰기를 정착시키는 데 중요한 역할을 했다는 의의 또한 가지고 있다.'
    },
    {
      year: 1921,
      imageUrl: '조선어학회.jpg',
      title: '조선어학회가 설립되다',
      description: '초기에는 \'조선어 연구회\'라는 이름이었으며, 우리말과 우리 글을 연구하던 학회이다. 외래어 표기법 통일안을 마련하고, 국어 사전을 편찬하는 등 말과 글의 표준화에 주력하여 많은 성과를 남겼다.'
    },
    {
      year: 1933,
      imageUrl: '맞춤법.jpg',
      title: '한글맞춤법통일안을 제정하다',
      description: '1933년, 조선어학회의 주도 하에 한글 맞춤법의 통일안이 제정되었다. 이때 제정된 통일안은 현재 남한과 북한의 맞춤법의 토대가 되었으며 더 이상의 표기 파편화를 막고 기본적인 맞춤법의 뼈대를 세웠다.'
    },
    {
      year: 1942,
      imageUrl: '일제강점기.jpg',
      title: '조선어학회 사건이 발생하다',
      description: '일제강점기 말기인 1942년, 일제는 우리말 및 한글 금지 정책을 펼쳤다. 이에 따라 일본 경찰은 민족 의식을 고취시키는 역할을 한다는 사유로 조선어학회 한글학자들을 집단으로 체포 및 투옥하였다.'
    },
    {
      year: 1949,
      imageUrl: '세벌식.jpg',
      title: '세벌식 타자기가 개발되다',
      description: '1949년, 한글 기계화의 주역으로 평가받는 공병우 박사가 최초로 세벌식 (초, 중, 종성을 나누어 입력하는 방식) 한글 타자기를 개발하였다. 이는 이후 한글 기계화 및 전산화의 상당한 발전을 가져왔다.'
    },
    {
      year: 1989,
      imageUrl: '한컴.png',
      title: '한/글 1.0이 출시되다',
      description: '현재 한국의 워드프로세서로 널리 쓰이는 \'한글과컴퓨터\'의 전신인 한/글 1.0 버전이 1989년에 출시되었다. 당시의 워드프로세서 중에서는 한글 입력을 가장 잘 지원하였고, 기능도 우수한 편이었다.'
    },
];

export default data;
