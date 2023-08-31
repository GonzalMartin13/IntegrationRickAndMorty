function LoginForm() {
    return ( 
        <div>
            <div><h1>Ingresa a la cuenta</h1></div>

            <form type="submit">
                <div>
                    <label>Usuario</label>
                    <input type="email" name="usuario" />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit"> Sing In </button>
            </form>
        </div>
    );
}

export default LoginForm;