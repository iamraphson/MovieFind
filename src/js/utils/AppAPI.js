/**
 * Created by Raphson on 7/16/16.
 */
var AppActions = require('../actions/AppActions');

module.exports = {
    searchMovies: function(movie){
        $.ajax({
            url: 'https://www.omdbapi.com/?s=' + movie.title,
            dataType: 'json',
            cache: false,
            success: function(data){
                AppActions.receiveMovieResults(data.Search);
            }.bind(this),
            error: function(xhr, status, err){
                alert(err)
            }.bind(this)
        });
    }
}