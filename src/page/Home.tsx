import { RootState } from "../redux/store";
import { decrement, increment, incrementByAmount } from "../redux/features/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

const Home = () => {
    const {value}=useAppSelector((state:RootState)=>state.counter);
    const dispatch=useAppDispatch()
    return (
        <div className="flex items-center">
            <button onClick={()=>dispatch(increment())} className="border px-5 py-3 bg-black text-white rounded-md">Increment</button>
            <p className="mx-5 font-extrabold">count:{value}</p>
            <button onClick={()=>dispatch(decrement())} className="border px-5 py-3 bg-red-500 text-white rounded-md">Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(2))} className="border px-5 py-3 bg-green-500 text-white rounded-md">Sum</button>
        </div>
    );
};

export default Home;