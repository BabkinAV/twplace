import Head from 'next/head';

import styled from 'styled-components';

const ColoredP = styled.p`
	color: red;


`;

import Header from '../components/layout/Header/Header';



export default function Home() {
  return (
    <>
		
      <Head>
        <title>TWplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
				<ColoredP>Some stuff will be here soon..sffsfsf.</ColoredP>
    </>
  )
}
