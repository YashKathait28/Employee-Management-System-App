import React, { useEffect, useState } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  const [adminName, setAdminName] = useState("Admin")

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"))
    if (admin && admin[0].firstName) {
      setAdminName(admin[0].firstName)
    }
  }, [])

  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser} username={adminName} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
