export default function Card({icons,title,feature,feature1}){
    
    return <>
    <div className="pr-5 pl-4 pt-4 pb-7 mt-4 ml-2 hover:scale-101 rounded-xl w-10/12  shadow-md hover:shadow-md bg-white flex">
        <div className="mr-2">{icons}</div>
        <div className="">
            <p className="font-bold mb-2" >{title}</p>
            <p className="text-gray-500">{feature}</p>
            <p className="text-gray-500">{feature1}</p>
        </div>
    </div>
    </>
}