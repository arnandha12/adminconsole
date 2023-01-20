define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function customerLoanDetailServiceObjectRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	customerLoanDetailServiceObjectRepository.prototype = Object.create(BaseRepository.prototype);
	customerLoanDetailServiceObjectRepository.prototype.constructor = customerLoanDetailServiceObjectRepository;

	//For Operation 'getView' with service id 'customerLoanQuery8103'
	customerLoanDetailServiceObjectRepository.prototype.getView = function(params, onCompletion){
		return customerLoanDetailServiceObjectRepository.prototype.customVerb('getView', params, onCompletion);
	};

	return customerLoanDetailServiceObjectRepository;
})