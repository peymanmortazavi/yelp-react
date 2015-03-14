
var RestaurantView = React.createClass({

    getInitialState: function() {
        return {restaurant: null}
    },

    render: function() {

        if (this.state.restaurant){

            return ( 
                <div className="restaurantView examplegrid" >
                    <div className="twelve columns" >
                        

                        <div className="row" >

                            <p className="restaurantName name twelve columns" >
                                {this.state.restaurant.name}
                            </p>
                        </div>



                        <div className="row" >
                            <h6 className="three columns" >
                                    Address: 
                            </h6>

                            <h6 className="nine columns" >
                                {this.state.restaurant.full_address}
                            </h6>

                        </div>

                        <div className="row" >

                            <h6 className="three columns">
                                Category: 
                            </h6>

                            <h6 className="nine columns">
                                {this.state.restaurant.categories}
                            </h6>

                        </div>

                        <div className="row" >

                            <h6 className="three columns">
                                Stars: 
                            </h6>

                            <h6 className="nine columns">
                                {this.state.restaurant.stars}
                            </h6>

                        </div>



                    </div>

                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})