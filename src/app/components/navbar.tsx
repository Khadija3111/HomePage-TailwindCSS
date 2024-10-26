export default function Navbar(){
    return(
<div >
<nav className="bg-slate-900 h-24">




<div className="flex flex-row  flex-wrap justify-items-start justify-between pt-8">
<ul className="flex flex-row  " > 
<h3 className="font-sans font-bold   leading-9  text-2xl tracking-normal  pl-44  pr-12">BrandName</h3>   

    <li className=" pt-2 pl-4  font-bold text-sm" >Home</li>
    <li className="pt-2 pl-4 font-bold text-sm">Product</li>
    <li className="pt-2 pl-4 font-bold text-sm">Pricing</li>
    <li className="pt-2 pl-4 font-bold text-sm" >Contact</li>
   </ul>
   
   <ul className="flex flex-row flex-wrap justify-items-end ">
    
    <li className=" pr-11  pt-2 font-bold text-sm" >Login</li>
    <li  className=" mr-28  font-bold text-sm bg-cyan-500 p-2 rounded-sm" ><button> JOIN US</button></li>
</ul>
</div>


</nav>








</div>

    )
}