import DeanOftheCollege from "./Dean-of-the-College";
import CollegeAgents from "./CollegeAgents";
import Specialunits from "./Specialunits";
import CollegeCouncil from "./CollegeCouncil";

const Cardmanagers = ({ showForm, setshowForm, Value }) => {

    return (
     <div className="  relative flex justify-center ">
         <form className={`cardAbout ${showForm}   `}>
        
        <button type="button" onClick={() => setshowForm("")} className="   close">
          <i className="fa-solid fa-xmark"></i> 
        </button>
  
        <div className="w-full pt-[50px] overflow-y-auto max-h-screen">
{    (Value === "DeanOftheCollege") &&   <DeanOftheCollege/>}
{    (Value === "CollegeAgents") &&   <CollegeAgents/>}
{    (Value === "Specialunits") &&   <Specialunits/>}
{    (Value === "CollegeCouncil") &&   <CollegeCouncil/>}


            
            
            </div>
      </form>
     </div>
    );
  };
  
  export default Cardmanagers;
  