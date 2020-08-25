import React from 'react';

const Form = props => {
    return (
        <div className="container ml-auto mr-auto">
            <form onSubmit={props.loadWeather}>
                <div>{props.error ? error() : ""}</div>
                <div className='row align-items-center'>
                    <div className='col col-md-4'>
                        <input type='text' className='form-control' name='city' placeholder='Choose a City' autoComplete='off' />
                    </div>
                    <div className='col col-md-4'>
                        <button className='btn btn-outline-primary btn-lg' id="button">Get weather</button>
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