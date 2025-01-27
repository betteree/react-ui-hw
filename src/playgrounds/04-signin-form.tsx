import InputCom from './../components/input';
import ButtonCom from './../components/button';
import Icon from './../components/Icon';
import Checkbox from './../components/checkbox';

function SignInForm() {
  return (
    <section className="login-form">
      <form action="http://localhost:4000/api/signin" method="POST">
        <div className="input-st">
          <Icon link={'/public/icon/letter.svg'} alt={'아이디'} />
          <InputCom
            label="아이디"
            type="email"
            name="useremail"
            placeholder="아이디(이메일)"
          />
        </div>

        <div className="input-st">
          <Icon link={'public/icon/lock.svg'} alt={'비밀번호'} />
          <InputCom
            label="비밀번호"
            type="password"
            name="userpassword"
            placeholder="비밀번호"
          />
        </div>
        <Checkbox label="자동 로그인" type="checkbox" />
        <ButtonCom type="submit" name="버튼" />
      </form>
    </section>
  );
}

export default SignInForm;
