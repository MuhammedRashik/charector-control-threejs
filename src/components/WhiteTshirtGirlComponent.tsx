import { useBox } from "@react-three/cannon"
import { WhiteTshirtGirlModel } from "../Models/WhiteTshirtGirl"

const WhiteTshirtGirlComponent=(props:any)=>{
   
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [0, 2, 0], // Initial position
        args: [1, 2, 1], // Size of the character
      }));
    return (
        <>
        <mesh ref={ref}>

        <WhiteTshirtGirlModel/>
        </mesh>
        </>
    )
}

export default WhiteTshirtGirlComponent