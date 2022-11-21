import { Wrapper, Input, Button, LinkForm } from './common/FormLoginSignup';
import { useState } from 'react';
import { signup } from '../services/myWallet';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [form, setForm] = useState({});

    const navigate = useNavigate();

    function handleForm({ name, value }) {
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    }

    function sendForm(e) {
        e.preventDefault();

        if(form.password === form.confirmPassword){
            signup({ name: form.name, email: form.email, password: form.password })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((res) => {
                alert("Algum erro no cadastro.");
            })
        }else{
            alert("Senhas não conferem.")
        }
       
    }

    return (
        <Wrapper>
            <div>
                <div>MyWallet</div>
                <form className="form" onSubmit={sendForm}>
                    <Input name='name' placeholder='nome' type='text' required
                        onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })} />
                    <Input name='email' placeholder='email' type='email' required
                        onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })} />
                    <Input name='password' placeholder='senha' type='password' required
                        onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })} />

                    <Input name='confirmPassword' placeholder='Confirme a senha' type='password' required
                        onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })} />
                    <Button>Cadastrar</Button>
                </form>
                <LinkForm to={'/'}>Já tem uma conta? Entre agora!</LinkForm>
            </div>
        </Wrapper>
    )
}