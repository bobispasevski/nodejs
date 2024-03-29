function updateUser(userId) {
    const form = document.getElementById('form');
    const user = {
        id: userId,
        first_name: form.first_name.value,
        last_name: form.last_name.value,
        ssn: form.ssn.value,
        email: form.email.value
    };

    fetch(`http://localhost:3001/user/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        if (data.success) {
            window.location.replace("http://localhost:3001/");
        }

        if (!data.success) {
            // porakata od greskata ispecati ja vo crveni bukvi
            const errorMessage = document.getElementById('error_message');
            errorMessage.textContent = data.message;
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}


function deleteUser (delUser) {
    fetch(`http://localhost:3001/User/${delUser}`, {
        method: 'DELETE',
        body: null,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        if (data.success) {
            window.location.replace("http://localhost:3001/");
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}