import { Link } from 'react-router-dom'
import Login from '../sigin&Login/Login'
const Sigin = () => {
  return (
    <div>
      
<section>

  <div  className="grid gap-0 md:h-screen md:grid-cols-2">
    
    <div  data-aos="fade-right"  
        data-aos-delay={ 1600 } className="flex items-center justify-center px-5 py-16 md:px-10 md:py-20">
      <div className="max-w-md text-center">
        <h2  data-aos="fade-right"  
        data-aos-delay={ 2000 } className="mb-8 text-3xl font-bold md:mb-12 text-red-700 md:text-5xl lg:mb-16">
          Start your Computers and Information
        </h2>
      
        <div className="mx-auto max-w-sm mb-4 pb-4">
          <form name="wf-form-password" method="get">
            <div  data-aos="fade-up"  
        data-aos-delay={ 1000 } className="relative">
              <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg" className="absolute left-5 top-3 inline-block" />
              <input type="email" className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-black placeholder:text-black" placeholder="Email Address" required="" />
            </div>
            <div   data-aos="fade-up"  
        data-aos-delay={ 600 }className="relative mb-4">
              <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg" className="absolute left-5 top-3 inline-block" />
              <input type="password" className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-black placeholder:text-black" placeholder="Password (min 8 characters)" required="" />
            </div>
            <label  data-aos="fade-up"  
        data-aos-delay={ 1200 } className="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
              <input type="checkbox" name="checkbox" className="float-left mt-1" />
              <span data-aos="zoom-in-down"
                                    data-aos-delay={ 200 } className="ml-4 inline-block cursor-pointer text-sm" for="checkbox">
                I agree with the
                <a   href="javascript:void(0);" className="font-bold">
                  Terms & Conditions
                </a>
              </span>
            </label>
            <input data-aos="zoom-in-down"
                                    data-aos-delay={ 1500 } type="submit" value="Join Flowspark" className="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white" />
          </form>
        </div>
        <p data-aos="zoom-in-down"
                                    data-aos-delay={ 100 } className="text-sm text-gray-500 sm:text-sm">
          Already have an account?
          <Link to="/Login" className="font-bold text-black hover:text-red-600">
            Login now 
          </Link>
        </p>
      </div>
    </div>

    <div    data-aos="fade-left" 
        data-aos-delay={ 600 } className="flex items-center justify-center rounded-tl-3xl rounded-t-[300px] rounded-bl-[700px] rounded-b-[100px]  bg-red-700">
      <div className="mx-auto max-w-md px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mb-5 flex h-14 w-14 flex-col items-center justify-center bg-red md:mb-6 lg:mb-8">
          <img    data-aos="fade-up"
        data-aos-delay={ 1600 } src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a949eade6cf7d_Vector-2.svg" alt="" className=" inline-block" />
        </div>
        <p    data-aos="fade-down"
        data-aos-delay={ 1000 } className="mb-8 text-sm sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
          aliquam, purus sit amet luctus venenatis, lectus magna fringilla
          urna, porttitor rhoncus dolor purus non enim.
        </p>
        <p   data-aos="fade-up"
        data-aos-delay={ 600 } className="text-sm font-bold sm:text-base">John Robert</p>
        <p    data-aos="fade-down"
        data-aos-delay={ 600 } className="text-sm sm:text-sm">Senior Webflow Developer</p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Sigin
