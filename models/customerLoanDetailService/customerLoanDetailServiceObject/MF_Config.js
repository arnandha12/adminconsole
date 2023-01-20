/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"id": "id",
		"customerType_id": "customerType_id",
		"FirstName": "FirstName",
		"LastName": "LastName",
		"UserName": "UserName",
		"DateOfBirth": "DateOfBirth",
		"SSn": "SSn",
		"isEnrolled": "isEnrolled",
	};

	Object.freeze(mappings);

	var typings = {
		"id": "number",
		"customerType_id": "string",
		"FirstName": "string",
		"LastName": "string",
		"UserName": "string",
		"DateOfBirth": "date",
		"SSn": "number",
		"isEnrolled": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "customerLoanDetailService",
		tableName: "customerLoanDetailServiceObject"
	};

	Object.freeze(config);

	return config;
})