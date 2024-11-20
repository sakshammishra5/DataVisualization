
export const registerUser = (data) => {
    return fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


export const loginUser = (data) => {
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const sendAuthToken = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    return fetch('http://localhost:3000/checkauth', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
}

export const fetchChartData = async (age,gender,dateRange) => {
    let sendData={age,gender,dateRange}
    let data = await fetch('http://localhost:3000/getchartdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    })
    
    console.log(data)
}