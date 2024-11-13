import Image from "next/image";

export default function Directory({memberObj}){

    const {name,address,phone,email,image} = memberObj;

    return(
        <div className="p-2 m-4 bg-yellow-100 max-w-sm">
            <Image src={image} alt={name} width={200} height={200} layout="responsive"/>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">{address}</p>
            <p className="text-sm">{phone}</p>
            <p className="text-sm">{email}</p>
            
        </div>
    );
}