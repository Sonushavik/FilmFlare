import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import { useNavigation } from 'react-router'
import Loading from './Loading'

const AppLayout = () => {
  const navigation = useNavigation();

  if(navigation.isLoading) return <Loading/>
  console.log(navigation)
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout
