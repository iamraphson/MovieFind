/**
 * Created by Raphson on 7/16/16.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {

    setMovieResults: function(movies){
        _movies = movies;
    },
    getMoviesResults: function(){
        return _movies;
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(cb){
        this.on('change', cb);
    },
    removeChangeListener: function(cb){
        this.on('remove', cb);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType){
        case AppConstants.SEARCH_MOVIES:
            console.log("Searching for movie " + action.movie.title);
            AppAPI.searchMovies(action.movie);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_MOVIE_RESULTS:
            AppStore.setMovieResults(action.movies);
            AppStore.emit(CHANGE_EVENT);
            break;
    }

    return true;
});

module.exports = AppStore;