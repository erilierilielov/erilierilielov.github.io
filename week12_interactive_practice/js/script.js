// 기존에 정상 작동하는 화면 진입 효과. 기능 추가 시 유지한다.
document.documentElement.classList.add('has-js');
const revealSections = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealSections.forEach((section) => observer.observe(section));
} else {
  revealSections.forEach((section) => section.classList.add('is-visible'));
}

const yearData = {
  a: {
    label: 'YEAR A',
    rate: '4.2',
    title: '연도 A의 실업률 변화',
    description: '연도 A를 선택한 초기 화면입니다. 학습용 수치를 기반으로 그래프와 설명이 표시됩니다.',
    chart: 'images/year-a.svg',
    chartAlt: '가상 데이터 연도 A 실업률 추이 그래프',
    status: '현재 연도 A 데이터가 표시 중입니다. 연도 선택 버튼을 눌러 비교할 수 있습니다.'
  },
  b: {
    label: 'YEAR B',
    rate: '3.6',
    title: '연도 B의 실업률 변화',
    description: '연도 B를 선택한 초기 화면입니다. 학습용 수치를 기반으로 그래프와 설명이 표시됩니다.',
    chart: 'images/year-b.svg',
    chartAlt: '가상 데이터 연도 B 실업률 추이 그래프',
    status: '현재 연도 B 데이터가 표시 중입니다. 연도 선택 버튼을 눌러 비교할 수 있습니다.'
  }
};

const compareSection = document.querySelector('.compare-section');
const yearButtons = {
  a: document.querySelector('.year-button-a'),
  b: document.querySelector('.year-button-b')
};
const yearLabel = document.querySelector('.year-label');
const yearRate = document.querySelector('.year-rate');
const metricTitle = document.querySelector('.metric-title');
const yearDescription = document.querySelector('.year-description');
const yearChart = document.querySelector('.year-chart');
const chartYear = document.querySelector('.chart-footer span:first-child');
const practiceStatus = document.querySelector('.practice-status');

function selectYear(year) {
  const data = yearData[year];
  const isYearB = year === 'b';

  yearLabel.textContent = data.label;
  yearRate.firstChild.textContent = data.rate;
  metricTitle.textContent = data.title;
  yearDescription.textContent = data.description;
  yearChart.src = data.chart;
  yearChart.alt = data.chartAlt;
  chartYear.textContent = isYearB ? '연도 B' : '연도 A';
  practiceStatus.lastChild.textContent = ` ${data.status}`;
  compareSection.classList.toggle('year-b-selected', isYearB);

  Object.entries(yearButtons).forEach(([buttonYear, button]) => {
    const isSelected = buttonYear === year;
    button.classList.toggle('active', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });
}

yearButtons.a.addEventListener('click', () => selectYear('a'));
yearButtons.b.addEventListener('click', () => selectYear('b'));
