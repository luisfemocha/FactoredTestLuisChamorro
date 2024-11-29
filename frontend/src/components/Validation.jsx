async function Validation (id) {
    let employee = {};
    const setEmployee = (emp) => {employee = emp}

    console.log(id);

    console.log("http://localhost:8000/employee/"+id);
    try{
        await fetch("http://localhost:8000/employee/"+id)
            .then((res) => res.json())
            .then((data) => setEmployee(data));

        return employee;
    }
    catch(e){
        console.log(e)
    }

};
export default Validation;