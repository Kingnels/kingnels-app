import CardItems from "./CardItems"
import "./Cards.css"
function Cards() {
  return (
    <div className="cards">
        <h1>Check out these EPIC Destinations!!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItems 
                        src ="/public/images/img-9.jpg"
                        text ="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label ="Adventure"
                        path="/services" 
                    />
                    <CardItems 
                        src ="/public/images/img-2.jpg"
                        text ="Travel through the Island of Balli in a Private Cruise"
                        label ="Luxury"
                        path="/services" 
                    />

                </ul>
                <ul className="cards__items">
                    <CardItems 
                        src ="/public/images/img-3.jpg"
                        text ="Set sail in the Atlantic Ocean Visiting Uncharted Waters"
                        label ="Mystery"
                        path="/services" 
                    />
                    <CardItems 
                        src ="/public/images/img-4.jpg"
                        text ="Experience football  on the top of Himilayan Mountains"
                        label ="Luxury"
                        path="/services" 
                    />
                    <CardItems 
                        src ="/public/images/img-2.jpg"
                        text ="Ride through the Sahara deserts on a guided Camel Tour"
                        label ="Luxury"
                        path="/services" 
                    />

                </ul>
                
            </div>
        </div> 
    </div>
  )
}

export default Cards