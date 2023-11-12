import React from 'react';
import axios from 'axios';


export default function Form({ data, setData, formData, setFormData }) {

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('https://thestoics.herokuapp.com/quotes', formData)
            .then(res => {
                // console.log('*', res.data) //  res.data is the form input submition sent to POST.
                setData([...data, res.data])
                e.target.reset()
                setFormData({
                    author: '',
                    source: '',
                    quote: ''
                })
            })
            .catch(err => console.log(err));
    };

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="input-cont">

                <label>Name</label>
                <input
                    name="Name"
                    placeholder="Name*"
                    value={formData.author}
                    onChange={changeHandler}
                />

                <label>Phone</label>
                <input
                    name="Phone"
                    placeholder="Phone*"
                    value={formData.source}
                    onChange={changeHandler}
                />

                <label>Website</label>
                <input
                    name="Website"
                    placeholder="Website*"
                    value={formData.quote}
                    onChange={changeHandler}
                />

                <button>SUBMIT</button>
            </div>
        </form>
    )
}
