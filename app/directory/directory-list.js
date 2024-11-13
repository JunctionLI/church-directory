import Directory from "./directory";

export default function DirectoryList(){
    const member1 = {
        name: "JOHN, Michael",
        address:"2711 Cedar Crescent NW",
        phone:"403.247-6521",
        email:"john@example.com",
        image:"/res/jm.jpg",
      };
       
    const member2 = {
        name: "ALICE, Doe",
        address:"135 Hampton Road NW",
        phone:"403.101-3589",
        email:"alice@example.com",
        image:"/res/ad.jpg",
      };
       
     
    return(
        <div className="flex">
            <Directory memberObj={member1}/>
            <Directory memberObj={member2}/>
        </div>
    );
}