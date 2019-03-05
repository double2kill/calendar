import React from 'react'
import Head from '../components/head'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import Calendar from './Calender'
import 'antd/dist/antd.css';

// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

const Home = () => {
  return (
    <div>
      <Head title="Home" />

      <div className="hello">
        <h1 className="title">Welcome to Calender!</h1>
      </div>
      <LocaleProvider locale={zh_CN}><Calendar/></LocaleProvider>

      <style jsx>{`
        .hello {
          width: 100%;
          color: #333;
        }
      `}</style>
    </div>
  )

}
export default Home
