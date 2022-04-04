import React from 'react'
import styled from 'styled-components';
import '../home/home.css'
import { Table } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import mf from '../data/mf-data.json';
import { useState } from 'react'
import imge from '../images/logo_m2.png';


function Home() {

    var num = 0;
    var a=0, b=0, c=0, d=0, e=0


    function baby1(){
        if(a===0){
            num = num+1;
            a=a+1;
        }
        else{

        }
    }

    function baby2(){
        if(b===0){
            num = num+2;
            b=b+1
        }
        else{

        }
    }

    function baby3(){
        if(c===0){
            num = num+4;
            c=c+1;
        }
        else{

        }
    }

    function baby4(){
        if(d===0){
            num = num+8;
            d=d+1;
        }
        else{

        }
    }

    function baby5(){
        if(e===0){
            num = num+16;
            e=e+1;
        }
        else{

        }
    }

    function parents (){
        alert('Your guess detected by AI is: '+num)
        num=0;
        a=0;
        b=0;
        c=0;
        d=0;
        e=0;
    }

  return (
    <Container id="cnt-h">

        <Top>
            <img id='img-h' src={imge} alt=""/>
        </Top>

        <Middle>
        <Scrollbars style={{ width: '100%', height: '100%' }}>
            <div id="rohith">
                <h1 id="h1-h">Number Guesser</h1>
                <p id="p-h">Computer guesses your guessed number</p>
                <Table striped bordered hover>
                <thead>
                <tr>
                    <th width="20%"><button id="btn-mf2" onClick={baby1}>Column-1</button></th>
                    <th width="20%"><button id="btn-mf2" onClick={baby2}>Column-2</button></th>
                    <th width="20%"><button id="btn-mf2" onClick={baby3}>Column-3</button></th>
                    <th width="20%"><button id="btn-mf2" onClick={baby4}>Column-4</button></th>
                    <th width="20%"><button id="btn-mf2" onClick={baby5}>Column-5</button></th>
                </tr>
                </thead>

                <tbody>            
                    {mf.map((val,key) =>(
                    <tr key={key}>
                        <td width="20%">{val.tha1}</td>
                        <td width="20%">{val.tha2}</td>
                        <td width="20%">{val.tha3}</td>
                        <td width="20%">{val.tha4}</td>
                        <td width="20%">{val.tha5}</td>
                    </tr>
                    ))
                }
                </tbody>

                </Table>
                <button id="btn-mf" onClick={parents}>I'm Done</button>
            </div>
        </Scrollbars>
        </Middle>

        <Bottom>

        </Bottom>

    </Container>
  )
}

export default Home;

//--Others--//

const Top = styled.div`
    width: 100%; 
    height: 10%;
`

const Middle = styled.div`
    width: 100%; 
    height: 75%;
`

const Container = styled.div`
  height:100vh;
  z-index:-1;
`

const Bottom = styled.div`
    width: 100%; 
    height: 10%;
`