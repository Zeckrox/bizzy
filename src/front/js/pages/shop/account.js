import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../../../styles/login&register.css";


export const Account = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [ user, setUser ] = useState(
		{
			"email":"",
			"password":""
		}
	);

	useEffect(() => {
		actions.changeAdminNav(false)
	}, []);
	

	async function userLogin(){
		if (!user.email || !user.password){
			toast.error("Rellena todos los campos",{
			position: "bottom-center"})
		}
		else{
			let create = await actions.getUserToken(user)
			if (create) navigate("/")
			else{
				toast.error("Usuario inexistente o contraseña incorrecta",{
					position: "bottom-center"
				})
            }
		}
	}

	return (
		<div className="login-container">
			<h4>ACCOUNT</h4>
			<div className="login-input">
				<input required maxlength="3200"
				onChange={(e) => setUser({...user, "email":e.target.value})}/>
				<label>Correo Electrónico</label>

			</div>
			<div className="login-input">
				<input type="password" required maxlength="100"
				onChange={(e) => setUser({...user, "password":e.target.value})}/>
				<label>Contraseña</label>
			</div>
			<div className="login-subline">
				<div className="login-keep-logged">
					<input type="checkbox"/>
					<span>No cerrar sesión</span>
				</div>
				<div className="login-forgot-password" onClick={()=>navigate("/forgot-password")}>¿Olvidaste tu contraseña?</div>
			</div>

			<button className="login-button" onClick={()=> userLogin() }>Iniciar Sesión</button>

			<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
				<div className="login-divisor"/>
				<div className="login-new">¿Nuevo en Petzzy?</div>
			</div>

			<button className="register-button" onClick={()=>navigate("/register")}>Crea una cuenta</button>
		</div>

	);
};