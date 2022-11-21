import { useState, useContext } from 'react';
import { login } from '../services/myWallet';
import UserContext from './contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Input, Button, LinkForm } from './common/FormLoginSignup';



export default function Login() {
    const [form, setForm] = useState({});
    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate();

    function handleForm({ name, value }) {
        setForm({
            ...form,
            [name]: value,
        });
    }

    function sendForm(e) {
        e.preventDefault();

        console.log(form);

        login({ email: form.email, password: form.password })
            .then((res) => {
                console.log(res.data);
                setUserData(res.data.user);
                localStorage.setItem('token', JSON.stringify(res.data.token));
                navigate('/main');
            })
            .catch((res) => {
                alert("Revise suas credenciais.");
            })
    }

    return (
        <Wrapper>
            <div>
                <div>MyWallet</div>
                <form className="form" onSubmit={sendForm}>
                    <Input name='email' placeholder='email' type='email' required
                        onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })}
                    />
                    <Input name='password' placeholder='senha' type='password' required
                        onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })}
                    />
                    <Button>Entrar</Button>
                </form>
                <LinkForm to={'/cadastro'}>Primeira vez? Cadastre-se!</LinkForm>
            </div>

        </Wrapper>
    );
}