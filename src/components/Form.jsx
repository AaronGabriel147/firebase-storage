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

                <label>Author</label>
                <input
                    name="author"
                    placeholder="Author*"
                    value={formData.author}
                    onChange={changeHandler}
                />

                <label>Source</label>
                <input
                    name="source"
                    placeholder="Source*"
                    value={formData.source}
                    onChange={changeHandler}
                />

                <label>Quote</label>
                <input
                    name="quote"
                    placeholder="Quote*"
                    value={formData.quote}
                    onChange={changeHandler}
                />

                <button>SUBMIT</button>
            </div>
        </form>
    )
}
