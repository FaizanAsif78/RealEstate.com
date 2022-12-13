import React, { Component } from "react";
import "../App.css";
class home extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row home">

                    <div className="col-lg-6 col-md-6 home-sec1">
                        <h1>discover most suitable propert</h1>
                        <p>Ipsum passages, and mog versions of ftware like Aldus PageMaker including versions of ftware like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <form>

                        <input type="text" placeholder="Search By location"></input>
                        <button type="submit" className="btn  btn-lg btn-info ">search</button>
                        </form>
                        <div className="d-flex justify-content-between maincount">
                            <div className="count1">
                                <h1>9K+</h1>
                                <h6>Premium product</h6>
                            </div>
                            <div className="count2">
                                <h1>2K+</h1>
                                <h6>Happy Customer</h6>
                            </div>
                            <div className="count3">
                                <h1>50K+</h1>
                                <h6>Award winning</h6>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-lg-6 col-md-6 home-sec2">
                        <div className="imgbg">
                            <img className="img-fluid" src="pics (3).jpg" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default home;