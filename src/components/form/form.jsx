import './form.css'

const Form = ({googleLogo}) => {
    return(
        <div>
            <div className='welcome'>
                <p>Bem vindo de volta</p>
                <h1>Faça login na sua conta</h1>
            </div>
            <div className='input-container'>
                <span className='input-span'>E-mail</span>
                <input 
                className='input'
                type="email"
                placeholder="josevitor@gmail.com"
                />
                <span className='input-span'>Senha</span>
                <input 
                className='input'
                type="password"
                />
            </div>
            <div className='help-container'>
                <div className='remember'>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Lembre de Mim</label>
                </div>
                <a href="#" >Esqueceu sua senha?</a>
            </div>
            <div className='button-container'>
                <button className='login'>Entrar</button>
                <button className='login-google'>
                    <img className='img-google' src={googleLogo} alt="Imagem Google" />
                    Ou faça login com o Google
                </button>
            </div>
            <div className='sign-up'>
                <span>Não tem uma conta?</span>
                <a href="#">Cadastre-se</a>
            </div>
        </div>
    )
}

export default Form