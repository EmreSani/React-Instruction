import PropTypes from "prop-types"

export const Todo = (props) => {

    let {title, completed} = props;

  return (
    <section className="border m-2 p-2 rounded bg-light">
        <table style={{width: "20rem", height: "6rem"}}>
            <tr>
                <th>Title: </th>
                <td>{title}</td>
            </tr>
            <tr>
                <th>Completed: </th>
                <td>{completed ? "true" : "false"}</td>
            </tr>
        </table>
    </section>
  )
}

Todo.propTypes = {
    title: PropTypes.string,
    completed: PropTypes.bool,
}
