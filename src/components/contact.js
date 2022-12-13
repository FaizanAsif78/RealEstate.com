import React from "react";
function contact() {
    return (
        <div className="container contact">
            <div className="row mycontact">
                <div className="col-lg-6 col-md-6">
                    <h6>contact us</h6>
                    <h1>easy to cantact us .</h1>
                    <p>1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <div className="displaycontact">
                        <div className="row mycon">
                            <div className="contactsecss">
                                <div className="con1">
                                    <div className="innercon d-flex">
                                        <div>
                                            <i class="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div>
                                            <h4>Call</h4>
                                            <p>+92-3007272010</p>
                                            <button className="btn btn-success">Call now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="con1">
                                    <div className="innercon d-flex">
                                        <div>
                                            <i class="fa-solid fa-comments"></i>
                                        </div>
                                        <div>
                                            <h4>Chat</h4>
                                            <p>+92-3007272010</p>
                                            <button className="btn btn-success">Chat now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="contactsecss">
                                <div className="con1">
                                    <div className="innercon d-flex">
                                        <div>
                                            <i class="fa-solid fa-mobile"></i>
                                        </div>
                                        <div>
                                            <h4>Video Call</h4>
                                            <p>+92-3007272010</p>
                                            <button className="btn btn-success">video Call</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="con1">
                                    <div className="innercon d-flex">
                                        <div>
                                            <i class="fa-solid fa-message"></i>
                                        </div>
                                        <div>
                                            <h4>Messege</h4>
                                            <p>+92-3007272010</p>
                                            <button className="btn btn-success">Messege </button>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>


                </div>
                <div className="col-lg-6 col-md-6 con-sec2 ">
                    <img src="pics (1).jpg" />
                </div>

            </div>
        </div>
    )
}
export default contact;