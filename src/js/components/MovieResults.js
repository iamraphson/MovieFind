/**
 * Created by Raphson on 7/16/16.
 */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');
var Movie = require('./Movie');

var MovieResults = React.createClass({
    render: function(){
        return (
            <div>
                <h3 className="text-center">Results</h3>
                {
                    this.props.movies.map((movie, i) => {
                        return (
                             <Movie movie={movie} key={i} />
                        )
                    })
                }
            </div>
        )
    }
});
module.exports = MovieResults;