import { useEffect, useRef, useState } from "react"
import { useSocket } from "../Utils/useSoket"
import { Canvas, useFrame} from '@react-three/fiber'
import {HomeTownModel} from '../Models/Home'
import { CameraControls, Helper, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { AmbientLight, BoxHelper, DirectionalLight, DirectionalLightHelper, PointLightHelper } from "three"
import { Physics, usePlane, useBox } from '@react-three/cannon'

import {WhiteTshirtGirlModel} from '../Models/WhiteTshirtGirl'
import HomeTownComponent from "./HomeTownComponent"

const MetaHome=()=>{
  

const socket:any=useSocket()

useEffect(()=>{
if(socket){
    const dataPayload={
        userId:"65e2a0befda83169ea79e5e5",
    }
    socket.emit("addNewUserToMeta",(dataPayload))
}

},[socket])
    return (
        <>
        <div className="w-screen h-screen fixed">

       <Canvas shadows  >
     
        <ambientLight intensity={2}/>
       <directionalLight  />
       {/* <Helper type={} args={[10,'blue']} /> */}
       
     
  
  <Physics gravity={[0, -6.003, 0]} allowSleep={false} broadphase="SAP">
   

    <WhiteTshirtGirlModel/>
     <HomeTownModel />
   
  
   

    </Physics> 
       </Canvas>
        </div>

       
        </>
    )
}

export default MetaHome





  
