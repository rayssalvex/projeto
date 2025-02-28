

export default function Contact() {
    return (
        <div id="contact">

            <form>
                <div className="contactUs">
                    <h1>Contacte-nos abaixo</h1><br />

                    <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-control" required="required" />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Service" className="form-control" />
                    </div>

                    <div className="form-group">
                        <input type="number" placeholder="Mobile No" className="form-control" required="required" />
                    </div>

                    <div className="form-group">
                        <input type="date" placeholder="Date" className="form-control" required="required" />
                    </div>

                    <div className="form-group">
                        <input type="time" placeholder="Time" className="form-control" required="required" />
                    </div>

                    <div className="form-group">
                        <button className="btn" id="mysubmit">Enviar ou Assinar</button>
                    </div>

                    <br />
                </div>
            </form>
        </div>
    )
}
