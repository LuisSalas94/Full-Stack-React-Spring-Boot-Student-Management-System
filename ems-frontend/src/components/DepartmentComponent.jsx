import ButtonLink from "./ButtonLink";
import useDepartmentComponentHook from "../hooks/useDepartmentComponentHook";

const DepartmentComponent = () => {
  const {
    departmentName,
    setDepartmentName,
    departmentDescription,
    setDepartmentDescription,
    title,
    saveOrUpdateDepartment,
  } = useDepartmentComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/departments" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Department Name: </label>
                <input
                  type="text"
                  name="departmentName"
                  placeholder="Enter Department Name"
                  className="form-control"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Department Description: </label>
                <input
                  type="text"
                  name="departmentDescription"
                  placeholder="Enter Department Description"
                  className="form-control"
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                />
              </div>
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateDepartment}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
