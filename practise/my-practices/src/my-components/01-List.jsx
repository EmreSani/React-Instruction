import PropTypes from "prop-types";

export function List(props){

    let flowers = props.flowersArr;

    let classLi = "m-2 border d-flex flex-column text-center bg-success text-light";

    let flowersArray = flowers.map((flower, index)=>{
        return <li key={index} className={classLi}>
                 <span>{flower.name}</span>
                 <img src={flower.url} alt="" width="100" height="100"/>
               </li>
    });
    
    return (
        <section className="m-3 border">
            <h3 className="m-3">Flowers</h3>
            <ul type="none" className="d-flex flex-wrap">{flowersArray}</ul>
        </section>
    )
}

List.propTypes = {
    flowersArr: PropTypes.array
}

List.defaultProps = {
    flowersArr: [
        {
            name: "Rose",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSUOrj8MRrS_rQ-h8LMAlnoFKj0K4NiC1Sw&s"
        },
        {
            name: "Tulip",
            url: "https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?cs=srgb&dl=pexels-pixabay-36729.jpg&fm=jpg"
        },
        {
            name: "Daisy",
            url: "https://d78hi7kj7xvs3.cloudfront.net/image/data/products/Leucanthemum-vulgare2.jpg"
        }
    ]
}

