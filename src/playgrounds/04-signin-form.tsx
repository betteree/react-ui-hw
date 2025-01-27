import InputCom from './../components/input';
import ButtonCom from './../components/button';

function SignInForm() {
  return (
    <section style={{ marginInline: 48 }} className="login-form">
      <form action="http://localhost:4000/api/signin" method="POST">
        <InputCom
          label="아이디"
          type="email"
          name="useremail"
          placeholder="아이디(이메일)"
        />
        <hr />
        <InputCom
          label="비밀번호"
          type="password"
          name="userpassword"
          placeholder="비밀번호"
        />
        <hr />
        <ButtonCom type="submit" name="버튼" />
      </form>
    </section>
  );
}

export default SignInForm;
