import CardCounter from "../../component/CardCounter/CardCounter"
import Maurqee from "../../component/Maurqee/Maurqee"


const Home = () => {
  return (
    <div>
        
        <div className="flex justify-center my-3 w-full gap-8 py-5">
            <CardCounter title={"student"} end={1000} icon={<i className='bx bxs-graduation text-[100px]'></i> }/>
            <CardCounter title={"teachers"} end={50} icon={<i className='bx bxs-edit-alt text-[100px]' ></i> }/>
            <CardCounter title={"tutorials"} end={30} icon={<i className='bx bx-book-open text-[100px]' ></i> }/>
        </div>
        
        <Maurqee/>
    </div>
  )
}

export default Home