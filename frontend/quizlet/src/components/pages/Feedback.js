import React from 'react';

const Feedback = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    
                </div>
                <div className="col-md-10 text-center">
                <form>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='creator' />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" ></textarea>
                    </div>
                    <div className="mb-3">
                   
                            
                        <button type="button" className="btn btn-primary btn-sm">Send</button>
                    </div>
                    
                </form>
                </div>



                    
                
            </div>           


        </div>
        
    );
};



export default Feedback;