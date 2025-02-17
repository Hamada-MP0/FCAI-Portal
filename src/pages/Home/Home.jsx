import CardCounter from "../../component/CardCounter/CardCounter"
import Maurqee from "../../component/Maurqee/Maurqee"
import Slider from '../../component/Slider/Slider'
import Card_Home from '../../component/Card-Home/CardHomePage'
const Home = () => {
  return (
    <div className=""> 
    
        <Slider/>
        <Card_Home/>

        <div className="flex justify-center my-3 w-full gap-8 py-5">
            <CardCounter title={"student"} end={1043} icon={<i className='bx bxs-graduation text-[100px]'></i> }/>
            <CardCounter title={"teachers"} end={50} icon={<i className='bx bxs-edit-alt text-[100px]' ></i> }/>
            <CardCounter title={"tutorials"} end={30} icon={<i className='bx bx-book-open text-[100px]' ></i> }/>
        </div>
        
        <Maurqee/>
    </div>
  )
}

export default Home