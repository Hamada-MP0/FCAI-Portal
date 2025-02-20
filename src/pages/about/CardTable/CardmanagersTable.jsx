import AcademicDegrees from './AcademicDegrees';
import Level1 from '../CardTable/Level1';
import Level2 from '../CardTable/Level2';
import Level3 from '../CardTable/Level3';
import Level4c from '../CardTable/Level4c';
import Estimates from './Estimates';
import Level4i from './Level4i';


const CardmanagersTable = ({isTransform, setIsTransform, Value }) => {
  return (
    <div>
             <div className="  relative flex justify-center items-center">
         <form className={`zz ${isTransform} top-[10%]  overflow-y-auto max-h-screen `}>
        
        <button type="button" onClick={() => setIsTransform("")} className="close">
          <i className="fa-solid fa-xmark"></i> 
        </button>
  
        <div className="w-full"
          >


{    (Value === "AcademicDegrees") &&   <AcademicDegrees/>}
{    (Value === "Estimates") &&   <Estimates/>}
{    (Value === "Level1") &&   <Level1/>}
{    (Value === "Level2") &&   <Level2/>}
{    (Value === "Level3") &&   <Level3/>}
{    (Value === "Level4c") &&   <Level4c/>}
{    (Value === "Level4i") &&   <Level4i/>}
            
          
            </div>
      </form>
     </div>
      
    </div>
  )
}

export default CardmanagersTable
