import React from 'react';

const Form = props => {
    return (
        <form className='container ml-auto mr-auto' onSubmit={props.loadWeather}>
            <div>{props.error ? error() : ""}</div>
            <div className='row align-items-center'>
                <div className='col col-md-5'>
                    <input type='text' className='form-control' name='city' placeholder='Choose a City' />
                </div>
                <div className='col col-md-5'>
                    <input type='text' className='form-control' name='country' placeholder='Choose a Country' />
                </div>
                <div className='col col-md-2'>
                    <button className='btn btn-primary'>Get Weather</button>
                </div>
            </div>
        </form>

    );
};

const error = props => {
    return (
        <div className="alert alert-danger" role="alert">
            Please Enter City and Country...!
        </div>
    );
};


export default Form;