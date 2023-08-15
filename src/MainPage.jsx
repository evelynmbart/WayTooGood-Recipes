import { ExtraInfo } from "./ExtraInfo";
import { Ingredients } from "./Ingredients";

export function MainPage() {
    return (
        <>
            <div className="App">
                <navbar className="navbar">Way too Good</navbar>
                <div className="pageOne">
                    <img className='photo' src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_30,w_2600/hellofresh_s3/image/60eeee4c1afbf376a85e7a86-6a9f8caa.jpg" alt="Plated meal"></img>
                    <div className="info">
                        <div className="title">
                            Cherry Balsamic Chicken
                                <p className="subtitle">
                                    with Almond Couscous and Roasted Carrots 
                                    <br />
                                    in a Cherry Balsamic Sauce
                                </p>
                        </div>
                        <Ingredients />
                        <div className="extraInfo">
                            <ExtraInfo />
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
}