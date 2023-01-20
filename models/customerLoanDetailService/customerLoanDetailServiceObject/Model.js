/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "customerLoanDetailServiceObject", "objectService" : "customerLoanDetailService"};

    var setterFunctions = {
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customerType_id: function(val, state) {
            context["field"] = "customerType_id";
            context["metadata"] = (objectMetadata ? objectMetadata["customerType_id"] : null);
            state['customerType_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FirstName: function(val, state) {
            context["field"] = "FirstName";
            context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
            state['FirstName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastName: function(val, state) {
            context["field"] = "LastName";
            context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
            state['LastName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        UserName: function(val, state) {
            context["field"] = "UserName";
            context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
            state['UserName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DateOfBirth: function(val, state) {
            context["field"] = "DateOfBirth";
            context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
            state['DateOfBirth'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SSn: function(val, state) {
            context["field"] = "SSn";
            context["metadata"] = (objectMetadata ? objectMetadata["SSn"] : null);
            state['SSn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isEnrolled: function(val, state) {
            context["field"] = "isEnrolled";
            context["metadata"] = (objectMetadata ? objectMetadata["isEnrolled"] : null);
            state['isEnrolled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function customerLoanDetailServiceObject(defaultValues) {
        var privateState = {};
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "customerType_id";
        context["metadata"] = (objectMetadata ? objectMetadata["customerType_id"] : null);
        privateState.customerType_id = defaultValues ?
            (defaultValues["customerType_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customerType_id"], context) :
                null) :
            null;

        context["field"] = "FirstName";
        context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
        privateState.FirstName = defaultValues ?
            (defaultValues["FirstName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FirstName"], context) :
                null) :
            null;

        context["field"] = "LastName";
        context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
        privateState.LastName = defaultValues ?
            (defaultValues["LastName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastName"], context) :
                null) :
            null;

        context["field"] = "UserName";
        context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
        privateState.UserName = defaultValues ?
            (defaultValues["UserName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserName"], context) :
                null) :
            null;

        context["field"] = "DateOfBirth";
        context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
        privateState.DateOfBirth = defaultValues ?
            (defaultValues["DateOfBirth"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DateOfBirth"], context) :
                null) :
            null;

        context["field"] = "SSn";
        context["metadata"] = (objectMetadata ? objectMetadata["SSn"] : null);
        privateState.SSn = defaultValues ?
            (defaultValues["SSn"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SSn"], context) :
                null) :
            null;

        context["field"] = "isEnrolled";
        context["metadata"] = (objectMetadata ? objectMetadata["isEnrolled"] : null);
        privateState.isEnrolled = defaultValues ?
            (defaultValues["isEnrolled"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isEnrolled"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "customerType_id": {
                get: function() {
                    context["field"] = "customerType_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["customerType_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customerType_id, context);
                },
                set: function(val) {
                    setterFunctions['customerType_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FirstName": {
                get: function() {
                    context["field"] = "FirstName";
                    context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FirstName, context);
                },
                set: function(val) {
                    setterFunctions['FirstName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastName": {
                get: function() {
                    context["field"] = "LastName";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastName, context);
                },
                set: function(val) {
                    setterFunctions['LastName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "UserName": {
                get: function() {
                    context["field"] = "UserName";
                    context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserName, context);
                },
                set: function(val) {
                    setterFunctions['UserName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DateOfBirth": {
                get: function() {
                    context["field"] = "DateOfBirth";
                    context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DateOfBirth, context);
                },
                set: function(val) {
                    setterFunctions['DateOfBirth'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SSn": {
                get: function() {
                    context["field"] = "SSn";
                    context["metadata"] = (objectMetadata ? objectMetadata["SSn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SSn, context);
                },
                set: function(val) {
                    setterFunctions['SSn'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isEnrolled": {
                get: function() {
                    context["field"] = "isEnrolled";
                    context["metadata"] = (objectMetadata ? objectMetadata["isEnrolled"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isEnrolled, context);
                },
                set: function(val) {
                    setterFunctions['isEnrolled'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.customerType_id = value ? (value["customerType_id"] ? value["customerType_id"] : null) : null;
            privateState.FirstName = value ? (value["FirstName"] ? value["FirstName"] : null) : null;
            privateState.LastName = value ? (value["LastName"] ? value["LastName"] : null) : null;
            privateState.UserName = value ? (value["UserName"] ? value["UserName"] : null) : null;
            privateState.DateOfBirth = value ? (value["DateOfBirth"] ? value["DateOfBirth"] : null) : null;
            privateState.SSn = value ? (value["SSn"] ? value["SSn"] : null) : null;
            privateState.isEnrolled = value ? (value["isEnrolled"] ? value["isEnrolled"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(customerLoanDetailServiceObject);

    //Create new class level validator object
    BaseModel.Validator.call(customerLoanDetailServiceObject);

    var registerValidatorBackup = customerLoanDetailServiceObject.registerValidator;

    customerLoanDetailServiceObject.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(customerLoanDetailServiceObject.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'getView' with service id 'customerLoanQuery8103'
     customerLoanDetailServiceObject.getView = function(params, onCompletion){
        return customerLoanDetailServiceObject.customVerb('getView', params, onCompletion);
     };

    var relations = [];

    customerLoanDetailServiceObject.relations = relations;

    customerLoanDetailServiceObject.prototype.isValid = function() {
        return customerLoanDetailServiceObject.isValid(this);
    };

    customerLoanDetailServiceObject.prototype.objModelName = "customerLoanDetailServiceObject";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    customerLoanDetailServiceObject.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("customerLoanDetailService", "customerLoanDetailServiceObject", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    customerLoanDetailServiceObject.clone = function(objectToClone) {
        var clonedObj = new customerLoanDetailServiceObject();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return customerLoanDetailServiceObject;
});