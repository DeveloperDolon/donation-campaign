import Swal from 'sweetalert2'

const getLocalDonateID = () => {
    const storedDonateID = localStorage.getItem("donate-item");

    if(storedDonateID) {
        return JSON.parse(storedDonateID);
    }
    return [];
}

const setLocalDonateID = (id) => {
    const storedDonateID = getLocalDonateID();

    const mySwal = Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Donation Success!!',
                showConfirmButton: false,
                timer: 1500
            });

    if(setLocalDonateID) {
        const isExist = storedDonateID.find(item => item === id);

        if(!isExist) {
            storedDonateID.push(id);
            localStorage.setItem("donate-item", JSON.stringify(storedDonateID));

            mySwal;

            return;
        }

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You already donate this!!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
        return;
    }
    storedDonateID.push(id);
    localStorage.setItem("donate-item", JSON.stringify(id));
    mySwal;
}

export {getLocalDonateID, setLocalDonateID};