import Thinking from "@/app/components/Thinking";
import Developer from "@/app/components/Developer";

const Loader = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-row justify-center items-center h-full">
        <Thinking/>
        <Developer/>
      </div>
    </div>
  )
}

export default Loader;
