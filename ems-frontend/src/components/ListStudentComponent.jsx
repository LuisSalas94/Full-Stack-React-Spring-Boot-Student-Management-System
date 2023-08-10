const ListStudentComponent = () => {
  const dummyList = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Smith",
      email: "joe@example.com",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center my-3">List of Student</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee First Name</th>
            <th scope="col">Employee Last Name</th>
            <th scope="col">Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {dummyList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
