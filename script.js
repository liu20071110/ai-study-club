// 不需修改此檔即可完成必做 Lab；沒有網路也能抽挑戰。
const challenges = [
  '做一張介紹自己喜歡的書的網頁。',
  '把今天學到的三個 Git 觀念寫成讀書筆記。',
  '邀請一位夥伴，一起替網站新增一個小點子。',
  '用 AI 整理一份學習清單，再自己檢查內容。',
  '幫自己的作品寫一份讓新手也看得懂的 README。'
];
const challengeButton = document.querySelector('#challenge-button');
const challengeOutput = document.querySelector('#challenge-output');
let previousIndex = -1;
challengeButton.addEventListener('click', () => {
  // 從其他題目抽選，避免連續抽到同一題。
  const offset = 1 + Math.floor(Math.random() * (challenges.length - 1));
  previousIndex = previousIndex < 0
    ? Math.floor(Math.random() * challenges.length)
    : (previousIndex + offset) % challenges.length;
  challengeOutput.textContent = challenges[previousIndex];
});
