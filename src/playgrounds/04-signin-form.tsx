import InputCom from './../components/input';
import ButtonCom from './../components/button';
import Icon from './../components/Icon';
import Checkbox from './../components/checkbox';
import { useState } from 'react';

function SignInForm() {
  const [isShow, setIsShow] = useState(false);
  const [isemailVali, setIsEmailVali] = useState(true);
  const [isPwVali, setIsPwVali] = useState(true);
  const emailVali = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pwVali = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i;

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const handleValidation = (
    value: string,
    vali: RegExp,
    setVali: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const Validation = vali;

    if (Validation.test(value)) {
      setVali(true);
    } else {
      setVali(false);
    }
  };

  return (
    <section className="login-form">
      <img src="/icon/coupang.svg" alt="쿠팡" />
      <form action="http://localhost:4000/api/signin" method="POST">
        <div
          className="input-st"
          style={{ borderColor: isemailVali ? '' : 'red' }}
        >
          <Icon link={'/icon/letter.svg'} alt={'아이디'} />
          <InputCom
            label="아이디"
            type="email"
            name="useremail"
            placeholder="아이디(이메일)"
            onChange={(e) =>
              handleValidation(e.target.value, emailVali, setIsEmailVali)
            }
          />
        </div>
        {!isemailVali && (
          <p className="validation-st">올바른 이메일 형식을 입력하세요</p>
        )}
        <div className="input-st">
          <Icon link={'/icon/lock.svg'} alt={'비밀번호'} />
          <InputCom
            label="비밀번호"
            type={isShow ? 'text' : 'password'}
            name="userpassword"
            placeholder="비밀번호"
            onChange={(e) =>
              handleValidation(e.target.value, pwVali, setIsPwVali)
            }
          />

          {isShow ? (
            <Icon
              link={'/icon/show.svg'}
              alt={'나타나기'}
              onClick={handleShow}
            />
          ) : (
            <Icon link={'/icon/hide.svg'} alt={'숨기기'} onClick={handleShow} />
          )}
        </div>
        {!isPwVali && (
          <p className="validation-st">올바른 비밀번호 형식을 입력하세요</p>
        )}
        <div className="mid-container">
          <Checkbox label="자동 로그인" type="checkbox" />
          <button>아이디(이메일)/비밀번호 찾기 </button>
        </div>
        <ButtonCom type="submit" name="로그인" />
      </form>
    </section>
  );
}

export default SignInForm;
