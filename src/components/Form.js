import React from 'react';

const Form = props => {
    return (
        <div className="container ml-auto mr-auto">
            <form onSubmit={props.loadWeather}>
                <div>{props.error ? error() : ""}</div>
                <div className='row align-items-center'>
                    <div className='col col-md-5'>
                        <input type='text' className='form-control' name='city' placeholder='Choose a City' autocomplete="off" />
                    </div>
                    <div className='col col-md-5'>
                        <input type='text' className='form-control' name='country' placeholder='Choose a Country' autocomplete="off" />
                    </div>
                    <div className='col col-md-2'>
                        <button className='btn btn-outline-primary btn-lg' id="button">Go</button>
                    </div>
                </div>
            </form>
        </div>
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