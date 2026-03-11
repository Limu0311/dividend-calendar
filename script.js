function calculateDividend() {
  document.getElementById("resultBox").hidden = false;


let shares = parseFloat(document.getElementById("shares").value);
let dividendPerShare = parseFloat(document.getElementById("dividendPerShare").value);
let freq = parseInt(document.getElementById("dividendFreq").value);

if (!shares || !dividendPerShare || !freq) {
    document.getElementById("resultBox").hidden = true;
    alert("0보다 큰 값을 입력해주세요");
    return;
  }
let annualDividend = shares * dividendPerShare * freq;

document.getElementById("totalDividend").value =
   annualDividend.toLocaleString();

document.getElementById("resultBox").hidden = false; 
}





function calculateShares(){

const targetAmount = Number(document.getElementById("targetAmount").value);
const dividendPerShare = Number(document.getElementById("targetDividendPerShare").value);
const dividendFreq = Number(document.getElementById("targetDividendFreq").value);

if(!targetAmount || !dividendPerShare || !dividendFreq){
  document.getElementById("result").innerText = "";
  alert("0보다 큰 값을 입력해주세요");
  return;
}

let annualTarget = targetAmount * 12;

const annualDividend = dividendPerShare * dividendFreq;

const sharesNeeded = (annualTarget / annualDividend).toFixed(1);

document.getElementById("result").innerText =
"필요한 주식 수: " + sharesNeeded + "주"; }


function showCalc(type){
  const dividend = document.getElementById("dividendCalc");
  const target = document.getElementById("targetCalc");
  const slider = document.getElementById("slider");

if(type === "dividend"){
    dividend.hidden = false;
    target.hidden = true;
    slider.style.transform = "translateX(0%)";
  } else {
    dividend.hidden = true;
    target.hidden = false;
    slider.style.transform = "translateX(100%)";
  }
}













window.addEventListener('DOMContentLoaded', () => {
  const calendarGrid = document.getElementById('calendarGrid');
  const monthYear = document.getElementById('monthYear');
  let currentDate = new Date();

  const dividends = {
    '2026-03-25': 'SCHD 배당락',
    '2026-03-30': 'SCHD 배당지급일($0.25)',

    '2026-05-12': 'AAPL(애플) 배당락',
    '2026-05-15': 'AAPL(애플) 배당지급일($0.26)',

    '2026-03-03': 'MCD(맥도날드) 배당락',
    '2026-03-17': 'MCD(맥도날드) 배당지급일($1.86)',

    '2026-03-13': 'KO(코카콜라) 배당락',
    '2026-04-01': 'KO(코카콜라) 배당지급일($0.53)',

    '2026-02-13': 'SBUX(스타벅스) 배당락',
    '2026-02-27': 'SBUX(스타벅스) 배당지급일($0.62)',

    '2026-03-27': 'VOO(S&P500) 배당락',
    '2026-03-31': 'VOO(S&P500) 배당지급일($1.81)',

    '2026-03-20': 'SPY(S&P500) 배당락',
    '2026-04-30': 'SPY(S&P500) 배당지급일($1.7)',

    '2026-04-01': 'JEPI(JPMorgan Equity Premium Income ETF) 배당락',
    '2026-04-06': 'JEPI(JPMorgan Equity Premium Income ETF) 배당지급일($0.41)',

    '2026-03-23': 'QQQ(Invesco QQQ Trust) 배당락',
    '2026-03-27': 'QQQ(Invesco QQQ Trust) 배당지급일($0.72)',

    '2026-02-19': 'MSFT(마이크로소프트) 배당락',
    '2026-03-12': 'MSFT(마이크로소프트) 배당지급일($0.91)',

    '2026-03-09': 'GOOGL(알파벳 Class A) 배당락',
    '2026-03-16': 'GOOGL(알파벳 Class A) 배당지급일($0.21)',
  };

  // renderCalendar 등 모든 JS 코드 여기 안에 넣기
  renderCalendar(currentDate);

  document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() -1);
    renderCalendar(currentDate);
  });

  document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() +1);
    renderCalendar(currentDate);
  });

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    monthYear.textContent = `${year}년 ${month + 1}월`;

    const days = calendarGrid.querySelectorAll('.day');
    days.forEach(d => d.remove());

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();

    for (let i = 0; i < startDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('day');
      calendarGrid.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const dayCell = document.createElement('div');
      dayCell.classList.add('day');
      const dateStr = `${year}-${String(month + 1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
      dayCell.innerHTML = `<span>${i}</span>`;
      if (dividends[dateStr]) {
        const div = document.createElement('div');
        div.classList.add('dividend');
        div.textContent = dividends[dateStr];
        dayCell.appendChild(div);
      }
      calendarGrid.appendChild(dayCell);
    }
  }
});





/* 이하 피드백 버튼 기능 */

function toggleFeedback(){

const box = document.getElementById("feedbackBox");

if(box.style.display === "flex"){
box.style.display = "none";
}else{
box.style.display = "flex";
}

}

function sendFeedback(){

const email = document.getElementById("feedbackEmail").value;
const message = document.getElementById("feedbackMessage").value;


/*전송 간격 제한*/
const lastSend = localStorage.getItem("lastFeedbackTime");
const now = Date.now();

if(lastSend && now - lastSend < 30000){
alert("잠시 후 다시 보내주세요 (30초)");
return;
}
/*메시지 전송 후 알림 관련*/
if(message.trim() === ""){
alert("메시지를 입력해주세요");
return;
}
alert("피드백 감사합니다!");

/* 전송 간격 제한 */
localStorage.setItem("lastFeedbackTime", now); 

/*메시지 전송 후 알림 관련*/
document.getElementById("feedbackEmail").value = "";
document.getElementById("feedbackMessage").value = "";

document.getElementById("feedbackBox").style.display = "none";



/*메일 전달 상세 기능*/
(function(){
emailjs.init("P_tDMPu1bt9TikNdo");
})();

emailjs.send("service_07mu5hu","template_qpklrxi",{
  name: email,
  time: new Date().toLocaleString(),
  message: message
})}
