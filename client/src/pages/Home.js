import React from 'react'
import ParticipationHistoryList from '../components/ParticipationHistoryList'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

export default function Home({ users }) {
  return (
    <div>

    <h1>home</h1>
    <ParticipationHistoryList users= {users}/> 

    <Link to="/playground">
            <button>create your own participation</button>
    </Link>

    <Login />

    

    </div>
    
  )
}
