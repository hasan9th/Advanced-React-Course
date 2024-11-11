export default function DessertsList({desserts}){
  const orderedDesserts=desserts.sort((a,b)=>{console.log(a);return a.calories-b.calories});
  
  const DessertsList=orderedDesserts.map(dessert=>(Number(dessert.calories)<500)&&<li key={dessert.name}>{dessert.name} - {dessert.calories}</li>)
  return (
    <ul>
    {DessertsList}
    </ul>
  )
}