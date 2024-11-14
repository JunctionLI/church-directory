import Image from "next/image";

export default function Directory({memberObj}){

    const {name,address,phone,email,image} = memberObj;

    return(
        <div className="p-2 m-4 bg-blue-100 max-w-sm rounded-md">
            <div className="flex justify-center">
                <Image src={image} alt={name} width={150} height={150} layout="intrinsic" className="rounded-3xl" />
            </div>
            <h2 className="text-md font-bold">{name}</h2>
            <p className="text-xs">{address}</p>
            <p className="text-xs">{phone}</p>
            <p className="text-xs">{email}</p>
            
        </div>
    );
}