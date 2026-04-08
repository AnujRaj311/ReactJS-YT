import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
    <Card user='Anuj Raj' img='https://images.unsplash.com/photo-1774641374227-866fa0f0adf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card user='Kapil Raj' img="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user='Sapna Raj'img="https://images.unsplash.com/photo-1765003291278-495489d2d7fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user='Kiran Raj'img="https://images.unsplash.com/photo-1775162240286-10a9d729f84c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App
