import { usePlane } from "@react-three/cannon"
import { HomeTownModel } from "../Models/Home"

const HomeTownComponent =(props:any)=>{
    const [ref] = usePlane(() => ({ rotation: [0, 0, 0], ...props }))
    return (
        <>

        <mesh ref={ref}>

        <HomeTownModel/>
        </mesh>
        </>
    )
}

export default HomeTownComponent