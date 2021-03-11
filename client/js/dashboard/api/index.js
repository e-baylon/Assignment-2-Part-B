// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'http://assesment-02-part-b.herokuapp.com/api/departments/',
    // Snippet #5
    updateEmployee: `http://assesment-02-part-b.herokuapp.com/api/departments/employee/update`,

    getDepartment: (name) => {
        return `http://assesment-02-part-b.herokuapp.com/api/departments/name/${name}`
    },
    deleteEmployee: (id) => {
        return `http://assesment-02-part-b.herokuapp.com/api/departments/employee/id/${id}`
    }
}

export default api
