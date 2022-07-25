import React from 'react'
import ParticipationHistoryList from '../components/ParticipationHistoryList'

export default function ParticipationHistory({ users }) {

  return (
    <div>
    <h1>Participation History</h1>
    <ParticipationHistoryList users = {users} />
    </div>

  )
}
