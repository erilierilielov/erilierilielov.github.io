// =====================================
// 1. HTML 요소 선택
// =====================================

const screen = document.querySelector(".start-screen");
const message = document.querySelector(".click-message");


// =====================================
// 2. 화면 클릭 이벤트
// =====================================

// 화면을 클릭하면 안내 문구가 나타남
screen.addEventListener("click", function () {
    message.classList.add("is-visible");
});
