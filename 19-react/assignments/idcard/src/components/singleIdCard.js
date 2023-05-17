
export default function singleIdCard (props) {
    const {name,age,Address,favoriteColor} = props.item
    return (
        <div className="listItem">
            <h1>{name}  {count} {age} {Address} </h1>
            <img width="100" height="100" src="https://images.cdn4.stockunlimited.net/preview1300/silhouette-of-a-man_1441194.jpg"/>'
                <p>Name: {props.name}.</p>
                <p>Age: {props.age}</p>
                <p>Address:{props.Address}.</p>
<                   p>Favorite Color  {props.favoriteColor}</p>
        </div>
    );
}


{/* <img width="100" height="100" src="https://images.cdn4.stockunlimited.net/preview1300/silhouette-of-a-man_1441194.jpg"/>'
<p>Name: {props.name}.</p>
<p>Age: {props.age}</p>
<p>Address:{props.Address}.</p>
<p>Favorite Color  {props.favoriteColor}</p> */}