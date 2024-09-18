import PropTypes from "prop-types"

export const User = (props) => {

    let {name, username, email, address} = props;

  return (
    <section className="border m-2 p-2 rounded bg-light">
        <table style={{width: "20rem"}}>
            <tr>
                <th>Name: </th>
                <td>{name}</td>
            </tr>
            <tr>
                <th>Username: </th>
                <td>{username}</td>
            </tr>
            <tr>
                <th>Email: </th>
                <td>{email}</td>
            </tr>
            <tr>
                <th>Address: </th>
                <td><a href={`https://maps.google.com/maps?q=${address.geo.lat},${address.geo.lng}`} target="_blank">Map</a></td>
            </tr>
        </table>
    </section>
  )
}

User.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object
}
