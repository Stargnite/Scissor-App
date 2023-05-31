import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AuthContext  from './../../store/auth-context'

export default function Dashboard() {
	// const params = useParams();
	// const userId = params.userId;
	const authCtx = useContext(AuthContext)

	const navigate = useNavigate()

	const handleLogout = () => {
		navigate('/login');
		authCtx.logout();
	}

  return (
	<div>
	 <button className="btn" onClick={handleLogout}>
          logout
        </button>
	 <h1>This is the dashboard for user</h1>

	</div>
  )
}
