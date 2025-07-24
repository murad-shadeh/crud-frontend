const TableList = ({ handleIsOpen }) => {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "John.Doe@gmail.com",
      job: "Developer",
      rate: "$50/hr",
      isActive: true,
    },
    {
      id: 2,
      name: "Murad Anderson",
      email: "Murad.Anderson@gmail.com",
      job: "Technical Specialist",
      rate: "$45/hr",
      isActive: true,
    },
    {
      id: 3,
      name: "Emily Miller",
      email: "Emily.Miller@gmail.com",
      job: "Backend Developer",
      rate: "$40/hr",
      isActive: false,
    },
  ];
  console.log(clients);
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="hover">
          {/* row 1 */}

          {clients.map((client) => (
            <tr key={client.id}>
              <th>{client.id}</th>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
              <td>
                <button
                  className={`btn rounded-full w-20 ${
                    client.isActive ? "btn-primary" : "btn-outline btn-primary"
                  }`}
                >
                  {client.isActive ? "Active" : "Inactive"}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleIsOpen("edit")}
                >
                  Update
                </button>
              </td>
              <td>
                <button className="btn btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
