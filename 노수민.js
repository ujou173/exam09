import inquirer from 'inquirer';

const elevatorType = {
  type: 'list',
  name: 'type',
  message: '이용할 엘리베이터를 선택해주세요',
  choices: ['짝수 층 엘리베이터', '홀수 층 엘리베이터'],
}

const floor = {
  type: 'list',
  name: 'floor',
  message: '이동할 층을 선택해주세요',
  choices: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -1],
}

function oddElevator(floorNumber) {
  if (floorNumber % 2 === 1 || floorNumber === 1 || floorNumber === -1 || floorNumber === 10) {
    elevatorRun(floorNumber);
  } else {
    console.log('홀수 층만 이용 할 수 있습니다.')
  }
}

// oddElevator(3);

function evenElevator(floorNumber) {
  if (floorNumber % 2 === 0 || floorNumber === 1 || floorNumber === -1 || floorNumber === 10) {
    elevatorRun(floorNumber);
  } else {
    console.log('짝수 층만 이용 할 수 있습니다.')
  }
}

function elevatorRun(floorNumber) {
  console.log("문을 열겠습니다");
  setTimeout(() => {
    console.log(`${floorNumber}층에 도착하였습니다.`);
    setTimeout(() => {
      console.log("문을 닫습니다.");
    }, 1000);
  }, 1000);
}

// evenElevator(6);

inquirer.prompt(elevatorType).then((answers) => {
  if (answers === "짝수 층 엘리베이터") {
    inquirer.prompt(floor).then((floorAnswer) => {
      evenElevator(floorAnswer.floor);
    });
  } else {
    inquirer.prompt(floor).then((floorAnswer) => {
      oddElevator(floorAnswer.floor);
    });
  }
});

// 홀수 전용 짝수 전용 엘리베이터 두개가 마련되어 있지만, 예외가 발생한다.
// 짝수 엘리베이터는 1층도 가능하게 설계되어 있다.
// 홀수 엘리베이터는 10층도 가능하게 설계되어 있다.
// 짝수 홀수 엘리베이터 둘 다 지하 일층까지 가능하게 설계되어 있다.

// ESM 모듈 방식으로 사용 가능한
// npm install inquirer 모듈을 설치하여
// 지하 1층부터 10층까지의 숫자를 입력 할 수 있는 인터페이스를 제작한다.
// "문을 열겠습니다" 라는 문구를 출력한다.
// 1초 뒤에 "n층에 도착하였습니다" 라는 문구를 출력한다.
// "문을 닫습니다" 라는 문구를 출력한다.

// orderlist로 예상되는 절차를 술어로 작성해보세요.

// 1. 홀수 층 운행 엘리베이터와 짝수 층 운행 엘리베이터 중 사용할 엘리베이터를 선택한다.
// 2. 이동할 층을 선택한다.
// 3. 선택한 층이 운행 가능한 층인지 판단하고 불가능한 층일 경우 에러를 반환한다.
// 4. 운행 가능한 층일 경우, "문을 열겠습니다" 문구를 출력한다.
// 5. 1초 후 "n층에 도착하였습니다" 문구를 출력한다
// 6. "문을 닫습니다" 문구를 출력한다.