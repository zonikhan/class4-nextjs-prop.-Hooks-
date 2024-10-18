
"use client"
import Footer from "@/components/Footer";
  import Header from "@/components/Header";
  import{useState} from "react"


  export default function Home(){
    const [count, setState] = useState(0)

    const increase= ()=>{
      if(count < 10){
        setState(count + 1)
      }

    }
    const decrease =()=>{
      if (count > 0){
        setState(count -1)
      }
    }
  
  // export default function Home() {

    return (
      <div className="text-2x1 font-bold">
        <Header pageName="Header"pageNumber={1} />
        <div className="p-5 text-center bg-blue-700 h-[83vh]">
          <button type="button" onClick={increase}>Add</button>
          <span className="mx-2 bg -red-600 px-2">{count}</span>
          <button type='button'onClick={decrease}>Remove</button>
        {/* This is Homepage */}
                        
      </div>
     <Footer />
      </div>

    );

  }
