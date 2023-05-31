import { createContext, useState } from "react";
// import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

export const AuthContextProvider = ({children}) => {
	const [token, setToken] = useState(null)
	const userIsLoggedIn = !!token;
	// const navigate = useNavigate();

	
	const loginHandler = (token) => {
		setToken(token)
		// navigate('/dashboard')
	}
	const logoutHandler = () => {
		setToken(null);
	}

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler
	}
	
	return <AuthContext.Provider value={contextValue}>
		{children}
	</AuthContext.Provider>
}

export default AuthContext;