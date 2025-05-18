const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const checkPasswordInput = document.querySelector('#checkPasswordInput');

const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const checkPasswordError = document.querySelector('#checkPasswordError');

const registrationButton = document.querySelector('#registrationButton');
const resetButton = document.querySelector('#resetButton');
const passwordButton = document.querySelector('#passwordButton');
const checkPasswordButton = document.querySelector('#checkPasswordButton');

// 유효성 검사 함수
function nameValid(value) {
  return value.trim().length > 0;
}
function emailValid(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function passwordValid(value) {
  return value.length >= 6;
}
function passwordsMatch(p1, p2) {
  return p1 === p2;
}

// 오류 문구 생성 및 삭제
function setError(input, errorBox, msg) {
  const inputBox = input.closest('.inputBox');
  inputBox.classList.add('error');
  inputBox.classList.remove('success');

  errorBox.textContent = msg;
  errorBox.style.display = 'block';
}

function setSuccess(input, errorBox) {
  const inputBox = input.closest('.inputBox');
  inputBox.classList.add('success');
  inputBox.classList.remove('error');

  errorBox.style.display = 'none';
}


// 회원가입 처리
function register() {
  let isFormValid = true;

  // 이름
  if (!nameValid(nameInput.value)) {
    setError(nameInput, nameError, '이름을 입력하세요.');
    isFormValid = false;
  } else {
    setSuccess(nameInput, nameError);
  }

  // 이메일
  if (!emailValid(emailInput.value)) {
    setError(emailInput, emailError, '유효한 이메일을 입력하세요.');
    isFormValid = false;
  } else {
    setSuccess(emailInput, emailError);
  }

  // 비밀번호
  if (!passwordValid(passwordInput.value)) {
    setError(passwordInput, passwordError, '비밀번호는 최소 6자입니다.');
    isFormValid = false;
  } else {
    setSuccess(passwordInput, passwordError);
  }

  // 비밀번호 확인
  if (!passwordsMatch(passwordInput.value, checkPasswordInput.value)) {
    setError(checkPasswordInput, checkPasswordError, '비밀번호가 일치하지 않습니다.');
    isFormValid = false;
  } else {
    setSuccess(checkPasswordInput, checkPasswordError);
  }

  // 최종 완료 알림
  if (isFormValid) {
    alert('회원가입 완료!');
  }
}

// 비밀번호 보기/숨기기 버튼
function showPasswordButton(input, btn) {
  if (input.type === 'password') {
    input.type = 'text';
    btn.value = '숨기기';
  } else {
    input.type = 'password';
    btn.value = '보기';
  }
}

// 이벤트 리스너
registrationButton.addEventListener('click', register);
passwordButton.addEventListener('click', () => showPasswordButton(passwordInput, passwordButton));
checkPasswordButton.addEventListener('click', () => showPasswordButton(checkPasswordInput, checkPasswordButton));
resetButton.addEventListener('click', resetForm);
