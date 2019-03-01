import React from 'react'
import Head from '../components/head'
import { Button } from 'antd';
import 'antd/dist/antd.css';

const Home = () => (
  <div>
    <Head title="Home" />

    <div className="hello">
      <h1 className="title">Welcome to Calender!</h1>
    </div>
    <Button type="primary"></Button>

    <style jsx>{`
      .hello {
        width: 100%;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
