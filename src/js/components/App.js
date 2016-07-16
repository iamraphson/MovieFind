/**
 * Created by Raphson on 7/16/16.
 */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');
var SearchForm = require('./SearchForm');
var MovieResults = require('./MovieResults');


function getAppState(){
    return {
        movies: AppStore.getMoviesResults(),
    }
}
var App = React.createClass({

    getInitialState: function(){
      return getAppState();
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },

    componentWillMount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

   render: function(){
       console.log(this.state.movies);
       if(this.state.movies == ""){
           var movieResults = '';
       } else {
           var movieResults = <MovieResults movies={this.state.movies}/>;
       }
       return (
           <div>
               <SearchForm />
               {movieResults}
           </div>
       )
   },

    _onChange: function(){
        this.setState(getAppState())
    }
});

module.exports = App;