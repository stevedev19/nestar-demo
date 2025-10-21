import { Stack } from "@mui/material"
// import { Head } from "next/document"
import Head from "next/head"
import { Component} from "react"
import Top from "../Top";
import Footer from "../Footer"
import HeadFilter from "../homepage/HeadFilter";



const withLayoutMain = (Component: any)=>{

    return (props: any) => {
        return (  
        <>
            <Head>
                <title>Nestar</title>
            </Head>
            <Stack id="pc-wrap">
             <Stack id={"top"}>
                <Top/>
            </Stack>
            <Stack className={"header-main"}>
                <Stack className={"container"}>
                    <HeadFilter/>
                </Stack>
                </Stack>

            <Stack id={"main"}>
              <Component {...props}/>
            </Stack>

            <Stack id={"footer"}><Footer/></Stack>
            </Stack>
        </>
        );
    };
};

export default withLayoutMain