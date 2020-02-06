import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from '../components/head'
import MainApp from '../components/mainApp'

const Index = props => (
  <div>
    <Head title="Gymshark - App" />
    <MainApp work={props.work} />
    <style jsx>{`
    `}</style>
  </div >
)

Index.getInitialProps = async function () {

  const res = await fetch('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/');
  const data = await res.json();

  return {
    work: data
  }

}


export default Index;
