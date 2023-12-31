const CommonTitle = ({title,color}) => {
     return (
          <div className="flex justify-center items-center my-2">
               <div className=" inline-block text-center mx-auto">
                  <h1 className= {`text-lg md:text-2xl  uppercase  ${color}  primary  capitalize  font-semibold`} >{title}</h1> 
               
                  <div className=" bg-[#fff]   p-[2px] rounded-sm mb-2 w-full inline-block "></div>    
               </div>  
          </div>
     );
};

export default CommonTitle;