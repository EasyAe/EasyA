// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.UserDetails
 * @header lbServices.UserDetails
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserDetails` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "UserDetails",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/UserDetails/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use UserDetails.institution() instead.
            "prototype$__get__institution": {
              url: urlBase + "/UserDetails/:id/institution",
              method: "GET",
            },

            // INTERNAL. Use UserDetails.institution.create() instead.
            "prototype$__create__institution": {
              url: urlBase + "/UserDetails/:id/institution",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.institution.update() instead.
            "prototype$__update__institution": {
              url: urlBase + "/UserDetails/:id/institution",
              method: "PUT",
            },

            // INTERNAL. Use UserDetails.institution.destroy() instead.
            "prototype$__destroy__institution": {
              url: urlBase + "/UserDetails/:id/institution",
              method: "DELETE",
            },

            // INTERNAL. Use UserDetails.cities() instead.
            "prototype$__get__cities": {
              url: urlBase + "/UserDetails/:id/cities",
              method: "GET",
            },

            // INTERNAL. Use UserDetails.cities.create() instead.
            "prototype$__create__cities": {
              url: urlBase + "/UserDetails/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.cities.update() instead.
            "prototype$__update__cities": {
              url: urlBase + "/UserDetails/:id/cities",
              method: "PUT",
            },

            // INTERNAL. Use UserDetails.cities.destroy() instead.
            "prototype$__destroy__cities": {
              url: urlBase + "/UserDetails/:id/cities",
              method: "DELETE",
            },

            // INTERNAL. Use UserDetails.occupation() instead.
            "prototype$__get__occupation": {
              url: urlBase + "/UserDetails/:id/occupation",
              method: "GET",
            },

            // INTERNAL. Use UserDetails.occupation.create() instead.
            "prototype$__create__occupation": {
              url: urlBase + "/UserDetails/:id/occupation",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.occupation.update() instead.
            "prototype$__update__occupation": {
              url: urlBase + "/UserDetails/:id/occupation",
              method: "PUT",
            },

            // INTERNAL. Use UserDetails.occupation.destroy() instead.
            "prototype$__destroy__occupation": {
              url: urlBase + "/UserDetails/:id/occupation",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#create
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/UserDetails",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#createMany
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/UserDetails",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#upsert
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/UserDetails",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#replaceOrCreate
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/UserDetails/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#upsertWithWhere
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/UserDetails/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#exists
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/UserDetails/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#findById
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/UserDetails/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#replaceById
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/UserDetails/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#find
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/UserDetails",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#findOne
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/UserDetails/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#updateAll
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/UserDetails/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#deleteById
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/UserDetails/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#count
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/UserDetails/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#prototype$updateAttributes
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/UserDetails/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#createChangeStream
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/UserDetails/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Institution.userDetails() instead.
            "::get::Institution::userDetails": {
              url: urlBase + "/Institutions/:id/userDetails",
              method: "GET",
            },

            // INTERNAL. Use City.userDetails() instead.
            "::get::City::userDetails": {
              url: urlBase + "/Cities/:id/userDetails",
              method: "GET",
            },

            // INTERNAL. Use Occupation.userDetails() instead.
            "::get::Occupation::userDetails": {
              url: urlBase + "/Occupations/:id/userDetails",
              method: "GET",
            },

            // INTERNAL. Use Users.userDetails() instead.
            "::get::Users::userDetails": {
              url: urlBase + "/users/:id/userDetails",
              method: "GET",
            },

            // INTERNAL. Use Users.userDetails.create() instead.
            "::create::Users::userDetails": {
              url: urlBase + "/users/:id/userDetails",
              method: "POST",
            },

            // INTERNAL. Use Users.userDetails.createMany() instead.
            "::createMany::Users::userDetails": {
              isArray: true,
              url: urlBase + "/users/:id/userDetails",
              method: "POST",
            },

            // INTERNAL. Use Users.userDetails.update() instead.
            "::update::Users::userDetails": {
              url: urlBase + "/users/:id/userDetails",
              method: "PUT",
            },

            // INTERNAL. Use Users.userDetails.destroy() instead.
            "::destroy::Users::userDetails": {
              url: urlBase + "/users/:id/userDetails",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.UserDetails#patchOrCreate
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#updateOrCreate
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#patchOrCreateWithWhere
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#update
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#destroyById
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#removeById
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.UserDetails#patchAttributes
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.UserDetails#modelName
        * @propertyOf lbServices.UserDetails
        * @description
        * The name of the model represented by this $resource,
        * i.e. `UserDetails`.
        */
        R.modelName = "UserDetails";

    /**
     * @ngdoc object
     * @name lbServices.UserDetails.institution
     * @header lbServices.UserDetails.institution
     * @object
     * @description
     *
     * The object `UserDetails.institution` groups methods
     * manipulating `Institution` instances related to `UserDetails`.
     *
     * Call {@link lbServices.UserDetails#institution UserDetails.institution()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.UserDetails#institution
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Fetches hasOne relation institution.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institution = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::get::UserDetails::institution"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.institution#create
             * @methodOf lbServices.UserDetails.institution
             *
             * @description
             *
             * Creates a new instance in institution of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institution.create = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::create::UserDetails::institution"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.institution#createMany
             * @methodOf lbServices.UserDetails.institution
             *
             * @description
             *
             * Creates a new instance in institution of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institution.createMany = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::createMany::UserDetails::institution"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.institution#destroy
             * @methodOf lbServices.UserDetails.institution
             *
             * @description
             *
             * Deletes institution of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.institution.destroy = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::destroy::UserDetails::institution"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.institution#update
             * @methodOf lbServices.UserDetails.institution
             *
             * @description
             *
             * Update institution of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institution.update = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::update::UserDetails::institution"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.UserDetails.cities
     * @header lbServices.UserDetails.cities
     * @object
     * @description
     *
     * The object `UserDetails.cities` groups methods
     * manipulating `City` instances related to `UserDetails`.
     *
     * Call {@link lbServices.UserDetails#cities UserDetails.cities()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.UserDetails#cities
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Fetches hasOne relation cities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::UserDetails::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.cities#create
             * @methodOf lbServices.UserDetails.cities
             *
             * @description
             *
             * Creates a new instance in cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::UserDetails::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.cities#createMany
             * @methodOf lbServices.UserDetails.cities
             *
             * @description
             *
             * Creates a new instance in cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.createMany = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::createMany::UserDetails::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.cities#destroy
             * @methodOf lbServices.UserDetails.cities
             *
             * @description
             *
             * Deletes cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cities.destroy = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroy::UserDetails::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.cities#update
             * @methodOf lbServices.UserDetails.cities
             *
             * @description
             *
             * Update cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.update = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::update::UserDetails::cities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.UserDetails.occupation
     * @header lbServices.UserDetails.occupation
     * @object
     * @description
     *
     * The object `UserDetails.occupation` groups methods
     * manipulating `Occupation` instances related to `UserDetails`.
     *
     * Call {@link lbServices.UserDetails#occupation UserDetails.occupation()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.UserDetails#occupation
             * @methodOf lbServices.UserDetails
             *
             * @description
             *
             * Fetches hasOne relation occupation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R.occupation = function() {
          var TargetResource = $injector.get("Occupation");
          var action = TargetResource["::get::UserDetails::occupation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.occupation#create
             * @methodOf lbServices.UserDetails.occupation
             *
             * @description
             *
             * Creates a new instance in occupation of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R.occupation.create = function() {
          var TargetResource = $injector.get("Occupation");
          var action = TargetResource["::create::UserDetails::occupation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.occupation#createMany
             * @methodOf lbServices.UserDetails.occupation
             *
             * @description
             *
             * Creates a new instance in occupation of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R.occupation.createMany = function() {
          var TargetResource = $injector.get("Occupation");
          var action = TargetResource["::createMany::UserDetails::occupation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.occupation#destroy
             * @methodOf lbServices.UserDetails.occupation
             *
             * @description
             *
             * Deletes occupation of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.occupation.destroy = function() {
          var TargetResource = $injector.get("Occupation");
          var action = TargetResource["::destroy::UserDetails::occupation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.UserDetails.occupation#update
             * @methodOf lbServices.UserDetails.occupation
             *
             * @description
             *
             * Update occupation of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - UserDetails id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R.occupation.update = function() {
          var TargetResource = $injector.get("Occupation");
          var action = TargetResource["::update::UserDetails::occupation"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Institution
 * @header lbServices.Institution
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Institution` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Institution",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Institutions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Institution.userDetails() instead.
            "prototype$__get__userDetails": {
              url: urlBase + "/Institutions/:id/userDetails",
              method: "GET",
            },

            // INTERNAL. Use Institution.city() instead.
            "prototype$__get__city": {
              url: urlBase + "/Institutions/:id/city",
              method: "GET",
            },

            // INTERNAL. Use Institution.regions() instead.
            "prototype$__get__regions": {
              url: urlBase + "/Institutions/:id/regions",
              method: "GET",
            },

            // INTERNAL. Use Institution.educationTypes() instead.
            "prototype$__get__educationTypes": {
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "GET",
            },

            // INTERNAL. Use Institution.educationTypes.create() instead.
            "prototype$__create__educationTypes": {
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "POST",
            },

            // INTERNAL. Use Institution.educationTypes.update() instead.
            "prototype$__update__educationTypes": {
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "PUT",
            },

            // INTERNAL. Use Institution.educationTypes.destroy() instead.
            "prototype$__destroy__educationTypes": {
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#create
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Institutions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#createMany
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Institutions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#upsert
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Institutions",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#replaceOrCreate
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Institutions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#upsertWithWhere
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Institutions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#exists
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Institutions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#findById
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Institutions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#replaceById
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Institutions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#find
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Institutions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#findOne
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Institutions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#updateAll
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Institutions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#deleteById
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Institutions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#count
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Institutions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#prototype$updateAttributes
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Institutions/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Institution#createChangeStream
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Institutions/change-stream",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.institution() instead.
            "::get::UserDetails::institution": {
              url: urlBase + "/UserDetails/:id/institution",
              method: "GET",
            },

            // INTERNAL. Use UserDetails.institution.create() instead.
            "::create::UserDetails::institution": {
              url: urlBase + "/UserDetails/:id/institution",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.institution.createMany() instead.
            "::createMany::UserDetails::institution": {
              isArray: true,
              url: urlBase + "/UserDetails/:id/institution",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.institution.update() instead.
            "::update::UserDetails::institution": {
              url: urlBase + "/UserDetails/:id/institution",
              method: "PUT",
            },

            // INTERNAL. Use UserDetails.institution.destroy() instead.
            "::destroy::UserDetails::institution": {
              url: urlBase + "/UserDetails/:id/institution",
              method: "DELETE",
            },

            // INTERNAL. Use City.institutions.findById() instead.
            "::findById::City::institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Cities/:id/institutions/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.institutions.destroyById() instead.
            "::destroyById::City::institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Cities/:id/institutions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use City.institutions.updateById() instead.
            "::updateById::City::institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Cities/:id/institutions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use City.institutions() instead.
            "::get::City::institutions": {
              isArray: true,
              url: urlBase + "/Cities/:id/institutions",
              method: "GET",
            },

            // INTERNAL. Use City.institutions.create() instead.
            "::create::City::institutions": {
              url: urlBase + "/Cities/:id/institutions",
              method: "POST",
            },

            // INTERNAL. Use City.institutions.createMany() instead.
            "::createMany::City::institutions": {
              isArray: true,
              url: urlBase + "/Cities/:id/institutions",
              method: "POST",
            },

            // INTERNAL. Use City.institutions.destroyAll() instead.
            "::delete::City::institutions": {
              url: urlBase + "/Cities/:id/institutions",
              method: "DELETE",
            },

            // INTERNAL. Use City.institutions.count() instead.
            "::count::City::institutions": {
              url: urlBase + "/Cities/:id/institutions/count",
              method: "GET",
            },

            // INTERNAL. Use Region.institutions.findById() instead.
            "::findById::Region::institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/institutions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Region.institutions.destroyById() instead.
            "::destroyById::Region::institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/institutions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Region.institutions.updateById() instead.
            "::updateById::Region::institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/institutions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Region.institutions() instead.
            "::get::Region::institutions": {
              isArray: true,
              url: urlBase + "/Regions/:id/institutions",
              method: "GET",
            },

            // INTERNAL. Use Region.institutions.create() instead.
            "::create::Region::institutions": {
              url: urlBase + "/Regions/:id/institutions",
              method: "POST",
            },

            // INTERNAL. Use Region.institutions.createMany() instead.
            "::createMany::Region::institutions": {
              isArray: true,
              url: urlBase + "/Regions/:id/institutions",
              method: "POST",
            },

            // INTERNAL. Use Region.institutions.destroyAll() instead.
            "::delete::Region::institutions": {
              url: urlBase + "/Regions/:id/institutions",
              method: "DELETE",
            },

            // INTERNAL. Use Region.institutions.count() instead.
            "::count::Region::institutions": {
              url: urlBase + "/Regions/:id/institutions/count",
              method: "GET",
            },

            // INTERNAL. Use EducationType.institution() instead.
            "::get::EducationType::institution": {
              url: urlBase + "/EducationTypes/:id/institution",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Institution#patchOrCreate
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Institution#updateOrCreate
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Institution#patchOrCreateWithWhere
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Institution#update
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Institution#destroyById
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Institution#removeById
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Institution#patchAttributes
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Institution#modelName
        * @propertyOf lbServices.Institution
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Institution`.
        */
        R.modelName = "Institution";


            /**
             * @ngdoc method
             * @name lbServices.Institution#userDetails
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Fetches belongsTo relation userDetails.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R.userDetails = function() {
          var TargetResource = $injector.get("UserDetails");
          var action = TargetResource["::get::Institution::userDetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Institution#city
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Fetches belongsTo relation city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.city = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Institution::city"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Institution#regions
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Fetches belongsTo relation regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Institution::regions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Institution.educationTypes
     * @header lbServices.Institution.educationTypes
     * @object
     * @description
     *
     * The object `Institution.educationTypes` groups methods
     * manipulating `EducationType` instances related to `Institution`.
     *
     * Call {@link lbServices.Institution#educationTypes Institution.educationTypes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Institution#educationTypes
             * @methodOf lbServices.Institution
             *
             * @description
             *
             * Fetches hasOne relation educationTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R.educationTypes = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::get::Institution::educationTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Institution.educationTypes#create
             * @methodOf lbServices.Institution.educationTypes
             *
             * @description
             *
             * Creates a new instance in educationTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R.educationTypes.create = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::create::Institution::educationTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Institution.educationTypes#createMany
             * @methodOf lbServices.Institution.educationTypes
             *
             * @description
             *
             * Creates a new instance in educationTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R.educationTypes.createMany = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::createMany::Institution::educationTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Institution.educationTypes#destroy
             * @methodOf lbServices.Institution.educationTypes
             *
             * @description
             *
             * Deletes educationTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.educationTypes.destroy = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::destroy::Institution::educationTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Institution.educationTypes#update
             * @methodOf lbServices.Institution.educationTypes
             *
             * @description
             *
             * Update educationTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Institution id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R.educationTypes.update = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::update::Institution::educationTypes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.City
 * @header lbServices.City
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `City` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "City",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Cities/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use City.userDetails() instead.
            "prototype$__get__userDetails": {
              url: urlBase + "/Cities/:id/userDetails",
              method: "GET",
            },

            // INTERNAL. Use City.institutions.findById() instead.
            "prototype$__findById__institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Cities/:id/institutions/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.institutions.destroyById() instead.
            "prototype$__destroyById__institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Cities/:id/institutions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use City.institutions.updateById() instead.
            "prototype$__updateById__institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Cities/:id/institutions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use City.institutions() instead.
            "prototype$__get__institutions": {
              isArray: true,
              url: urlBase + "/Cities/:id/institutions",
              method: "GET",
            },

            // INTERNAL. Use City.institutions.create() instead.
            "prototype$__create__institutions": {
              url: urlBase + "/Cities/:id/institutions",
              method: "POST",
            },

            // INTERNAL. Use City.institutions.destroyAll() instead.
            "prototype$__delete__institutions": {
              url: urlBase + "/Cities/:id/institutions",
              method: "DELETE",
            },

            // INTERNAL. Use City.institutions.count() instead.
            "prototype$__count__institutions": {
              url: urlBase + "/Cities/:id/institutions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#create
             * @methodOf lbServices.City
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Cities",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#createMany
             * @methodOf lbServices.City
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Cities",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#upsert
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Cities",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#replaceOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Cities/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#upsertWithWhere
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Cities/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#exists
             * @methodOf lbServices.City
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Cities/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#findById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Cities/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#replaceById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Cities/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#find
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Cities",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#findOne
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Cities/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#updateAll
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Cities/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#deleteById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Cities/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#count
             * @methodOf lbServices.City
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Cities/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#prototype$updateAttributes
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Cities/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#createChangeStream
             * @methodOf lbServices.City
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Cities/change-stream",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.cities() instead.
            "::get::UserDetails::cities": {
              url: urlBase + "/UserDetails/:id/cities",
              method: "GET",
            },

            // INTERNAL. Use UserDetails.cities.create() instead.
            "::create::UserDetails::cities": {
              url: urlBase + "/UserDetails/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.cities.createMany() instead.
            "::createMany::UserDetails::cities": {
              isArray: true,
              url: urlBase + "/UserDetails/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.cities.update() instead.
            "::update::UserDetails::cities": {
              url: urlBase + "/UserDetails/:id/cities",
              method: "PUT",
            },

            // INTERNAL. Use UserDetails.cities.destroy() instead.
            "::destroy::UserDetails::cities": {
              url: urlBase + "/UserDetails/:id/cities",
              method: "DELETE",
            },

            // INTERNAL. Use Institution.city() instead.
            "::get::Institution::city": {
              url: urlBase + "/Institutions/:id/city",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.City#patchOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.City#updateOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.City#patchOrCreateWithWhere
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.City#update
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.City#destroyById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.City#removeById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.City#patchAttributes
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.City#modelName
        * @propertyOf lbServices.City
        * @description
        * The name of the model represented by this $resource,
        * i.e. `City`.
        */
        R.modelName = "City";


            /**
             * @ngdoc method
             * @name lbServices.City#userDetails
             * @methodOf lbServices.City
             *
             * @description
             *
             * Fetches belongsTo relation userDetails.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R.userDetails = function() {
          var TargetResource = $injector.get("UserDetails");
          var action = TargetResource["::get::City::userDetails"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.City.institutions
     * @header lbServices.City.institutions
     * @object
     * @description
     *
     * The object `City.institutions` groups methods
     * manipulating `Institution` instances related to `City`.
     *
     * Call {@link lbServices.City#institutions City.institutions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.City#institutions
             * @methodOf lbServices.City
             *
             * @description
             *
             * Queries institutions of City.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::get::City::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.institutions#count
             * @methodOf lbServices.City.institutions
             *
             * @description
             *
             * Counts institutions of City.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.institutions.count = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::count::City::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.institutions#create
             * @methodOf lbServices.City.institutions
             *
             * @description
             *
             * Creates a new instance in institutions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions.create = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::create::City::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.institutions#createMany
             * @methodOf lbServices.City.institutions
             *
             * @description
             *
             * Creates a new instance in institutions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions.createMany = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::createMany::City::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.institutions#destroyAll
             * @methodOf lbServices.City.institutions
             *
             * @description
             *
             * Deletes all institutions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.institutions.destroyAll = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::delete::City::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.institutions#destroyById
             * @methodOf lbServices.City.institutions
             *
             * @description
             *
             * Delete a related item by id for institutions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             *  - `fk` – `{*}` - Foreign key for institutions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.institutions.destroyById = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::destroyById::City::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.institutions#findById
             * @methodOf lbServices.City.institutions
             *
             * @description
             *
             * Find a related item by id for institutions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             *  - `fk` – `{*}` - Foreign key for institutions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions.findById = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::findById::City::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.institutions#updateById
             * @methodOf lbServices.City.institutions
             *
             * @description
             *
             * Update a related item by id for institutions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - City id
             *
             *  - `fk` – `{*}` - Foreign key for institutions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions.updateById = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::updateById::City::institutions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Region
 * @header lbServices.Region
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Region` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Region",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Regions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Region.institutions.findById() instead.
            "prototype$__findById__institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/institutions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Region.institutions.destroyById() instead.
            "prototype$__destroyById__institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/institutions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Region.institutions.updateById() instead.
            "prototype$__updateById__institutions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/institutions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Region.country() instead.
            "prototype$__get__country": {
              url: urlBase + "/Regions/:id/country",
              method: "GET",
            },

            // INTERNAL. Use Region.institutions() instead.
            "prototype$__get__institutions": {
              isArray: true,
              url: urlBase + "/Regions/:id/institutions",
              method: "GET",
            },

            // INTERNAL. Use Region.institutions.create() instead.
            "prototype$__create__institutions": {
              url: urlBase + "/Regions/:id/institutions",
              method: "POST",
            },

            // INTERNAL. Use Region.institutions.destroyAll() instead.
            "prototype$__delete__institutions": {
              url: urlBase + "/Regions/:id/institutions",
              method: "DELETE",
            },

            // INTERNAL. Use Region.institutions.count() instead.
            "prototype$__count__institutions": {
              url: urlBase + "/Regions/:id/institutions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#create
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Regions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#createMany
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Regions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#upsert
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Regions",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#replaceOrCreate
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Regions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#upsertWithWhere
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Regions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#exists
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Regions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#findById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Regions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#replaceById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Regions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#find
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Regions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#findOne
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Regions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#updateAll
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Regions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#deleteById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Regions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#count
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Regions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#prototype$updateAttributes
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Regions/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#createChangeStream
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Regions/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Institution.regions() instead.
            "::get::Institution::regions": {
              url: urlBase + "/Institutions/:id/regions",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.findById() instead.
            "::findById::Country::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Countries/:id/regions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.destroyById() instead.
            "::destroyById::Country::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Countries/:id/regions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Country.regions.updateById() instead.
            "::updateById::Country::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Countries/:id/regions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Country.regions() instead.
            "::get::Country::regions": {
              isArray: true,
              url: urlBase + "/Countries/:id/regions",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.create() instead.
            "::create::Country::regions": {
              url: urlBase + "/Countries/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Country.regions.createMany() instead.
            "::createMany::Country::regions": {
              isArray: true,
              url: urlBase + "/Countries/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Country.regions.destroyAll() instead.
            "::delete::Country::regions": {
              url: urlBase + "/Countries/:id/regions",
              method: "DELETE",
            },

            // INTERNAL. Use Country.regions.count() instead.
            "::count::Country::regions": {
              url: urlBase + "/Countries/:id/regions/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Region#patchOrCreate
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Region#updateOrCreate
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Region#patchOrCreateWithWhere
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Region#update
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Region#destroyById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Region#removeById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Region#patchAttributes
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Region#modelName
        * @propertyOf lbServices.Region
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Region`.
        */
        R.modelName = "Region";

    /**
     * @ngdoc object
     * @name lbServices.Region.institutions
     * @header lbServices.Region.institutions
     * @object
     * @description
     *
     * The object `Region.institutions` groups methods
     * manipulating `Institution` instances related to `Region`.
     *
     * Call {@link lbServices.Region#institutions Region.institutions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Region#institutions
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Queries institutions of Region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::get::Region::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.institutions#count
             * @methodOf lbServices.Region.institutions
             *
             * @description
             *
             * Counts institutions of Region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.institutions.count = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::count::Region::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.institutions#create
             * @methodOf lbServices.Region.institutions
             *
             * @description
             *
             * Creates a new instance in institutions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions.create = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::create::Region::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.institutions#createMany
             * @methodOf lbServices.Region.institutions
             *
             * @description
             *
             * Creates a new instance in institutions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions.createMany = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::createMany::Region::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.institutions#destroyAll
             * @methodOf lbServices.Region.institutions
             *
             * @description
             *
             * Deletes all institutions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.institutions.destroyAll = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::delete::Region::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.institutions#destroyById
             * @methodOf lbServices.Region.institutions
             *
             * @description
             *
             * Delete a related item by id for institutions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             *  - `fk` – `{*}` - Foreign key for institutions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.institutions.destroyById = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::destroyById::Region::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.institutions#findById
             * @methodOf lbServices.Region.institutions
             *
             * @description
             *
             * Find a related item by id for institutions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             *  - `fk` – `{*}` - Foreign key for institutions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions.findById = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::findById::Region::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.institutions#updateById
             * @methodOf lbServices.Region.institutions
             *
             * @description
             *
             * Update a related item by id for institutions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             *  - `fk` – `{*}` - Foreign key for institutions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institutions.updateById = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::updateById::Region::institutions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region#country
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Fetches belongsTo relation country.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Region id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R.country = function() {
          var TargetResource = $injector.get("Country");
          var action = TargetResource["::get::Region::country"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Country
 * @header lbServices.Country
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Country` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Country",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Countries/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Country.regions.findById() instead.
            "prototype$__findById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Countries/:id/regions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.destroyById() instead.
            "prototype$__destroyById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Countries/:id/regions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Country.regions.updateById() instead.
            "prototype$__updateById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Countries/:id/regions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Country.regions() instead.
            "prototype$__get__regions": {
              isArray: true,
              url: urlBase + "/Countries/:id/regions",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.create() instead.
            "prototype$__create__regions": {
              url: urlBase + "/Countries/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Country.regions.destroyAll() instead.
            "prototype$__delete__regions": {
              url: urlBase + "/Countries/:id/regions",
              method: "DELETE",
            },

            // INTERNAL. Use Country.regions.count() instead.
            "prototype$__count__regions": {
              url: urlBase + "/Countries/:id/regions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#create
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Countries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#createMany
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Countries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#upsert
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Countries",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#replaceOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Countries/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#upsertWithWhere
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Countries/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#exists
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Countries/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#findById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Countries/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#replaceById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Countries/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#find
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Countries",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#findOne
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Countries/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#updateAll
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Countries/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#deleteById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Countries/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#count
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Countries/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#prototype$updateAttributes
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Countries/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#createChangeStream
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Countries/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Region.country() instead.
            "::get::Region::country": {
              url: urlBase + "/Regions/:id/country",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Country#patchOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Country#updateOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Country#patchOrCreateWithWhere
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Country#update
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Country#destroyById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Country#removeById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Country#patchAttributes
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Country#modelName
        * @propertyOf lbServices.Country
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Country`.
        */
        R.modelName = "Country";

    /**
     * @ngdoc object
     * @name lbServices.Country.regions
     * @header lbServices.Country.regions
     * @object
     * @description
     *
     * The object `Country.regions` groups methods
     * manipulating `Region` instances related to `Country`.
     *
     * Call {@link lbServices.Country#regions Country.regions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Country#regions
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Queries regions of Country.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#count
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Counts regions of Country.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.regions.count = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::count::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#create
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Creates a new instance in regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.create = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::create::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#createMany
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Creates a new instance in regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.createMany = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::createMany::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#destroyAll
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Deletes all regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.regions.destroyAll = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::delete::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#destroyById
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Delete a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.regions.destroyById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::destroyById::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#findById
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Find a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.findById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::findById::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#updateById
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Update a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Country id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.updateById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::updateById::Country::regions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.EducationType
 * @header lbServices.EducationType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EducationType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "EducationType",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/EducationTypes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use EducationType.institution() instead.
            "prototype$__get__institution": {
              url: urlBase + "/EducationTypes/:id/institution",
              method: "GET",
            },

            // INTERNAL. Use EducationType.quizzes.findById() instead.
            "prototype$__findById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/EducationTypes/:id/quizzes/:fk",
              method: "GET",
            },

            // INTERNAL. Use EducationType.quizzes.destroyById() instead.
            "prototype$__destroyById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/EducationTypes/:id/quizzes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use EducationType.quizzes.updateById() instead.
            "prototype$__updateById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/EducationTypes/:id/quizzes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use EducationType.quizzes() instead.
            "prototype$__get__quizzes": {
              isArray: true,
              url: urlBase + "/EducationTypes/:id/quizzes",
              method: "GET",
            },

            // INTERNAL. Use EducationType.quizzes.create() instead.
            "prototype$__create__quizzes": {
              url: urlBase + "/EducationTypes/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use EducationType.quizzes.destroyAll() instead.
            "prototype$__delete__quizzes": {
              url: urlBase + "/EducationTypes/:id/quizzes",
              method: "DELETE",
            },

            // INTERNAL. Use EducationType.quizzes.count() instead.
            "prototype$__count__quizzes": {
              url: urlBase + "/EducationTypes/:id/quizzes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#create
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/EducationTypes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#createMany
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/EducationTypes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#upsert
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/EducationTypes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#replaceOrCreate
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/EducationTypes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#upsertWithWhere
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/EducationTypes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#exists
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/EducationTypes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#findById
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/EducationTypes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#replaceById
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/EducationTypes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#find
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/EducationTypes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#findOne
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/EducationTypes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#updateAll
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/EducationTypes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#deleteById
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/EducationTypes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#count
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/EducationTypes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#prototype$updateAttributes
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/EducationTypes/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.EducationType#createChangeStream
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/EducationTypes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Institution.educationTypes() instead.
            "::get::Institution::educationTypes": {
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "GET",
            },

            // INTERNAL. Use Institution.educationTypes.create() instead.
            "::create::Institution::educationTypes": {
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "POST",
            },

            // INTERNAL. Use Institution.educationTypes.createMany() instead.
            "::createMany::Institution::educationTypes": {
              isArray: true,
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "POST",
            },

            // INTERNAL. Use Institution.educationTypes.update() instead.
            "::update::Institution::educationTypes": {
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "PUT",
            },

            // INTERNAL. Use Institution.educationTypes.destroy() instead.
            "::destroy::Institution::educationTypes": {
              url: urlBase + "/Institutions/:id/educationTypes",
              method: "DELETE",
            },

            // INTERNAL. Use Quiz.educationType() instead.
            "::get::Quiz::educationType": {
              url: urlBase + "/Quizzes/:id/educationType",
              method: "GET",
            },

            // INTERNAL. Use Quiz.educationType.create() instead.
            "::create::Quiz::educationType": {
              url: urlBase + "/Quizzes/:id/educationType",
              method: "POST",
            },

            // INTERNAL. Use Quiz.educationType.createMany() instead.
            "::createMany::Quiz::educationType": {
              isArray: true,
              url: urlBase + "/Quizzes/:id/educationType",
              method: "POST",
            },

            // INTERNAL. Use Quiz.educationType.update() instead.
            "::update::Quiz::educationType": {
              url: urlBase + "/Quizzes/:id/educationType",
              method: "PUT",
            },

            // INTERNAL. Use Quiz.educationType.destroy() instead.
            "::destroy::Quiz::educationType": {
              url: urlBase + "/Quizzes/:id/educationType",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.EducationType#patchOrCreate
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.EducationType#updateOrCreate
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.EducationType#patchOrCreateWithWhere
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.EducationType#update
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.EducationType#destroyById
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.EducationType#removeById
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.EducationType#patchAttributes
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.EducationType#modelName
        * @propertyOf lbServices.EducationType
        * @description
        * The name of the model represented by this $resource,
        * i.e. `EducationType`.
        */
        R.modelName = "EducationType";


            /**
             * @ngdoc method
             * @name lbServices.EducationType#institution
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Fetches belongsTo relation institution.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Institution` object.)
             * </em>
             */
        R.institution = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::get::EducationType::institution"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.EducationType.quizzes
     * @header lbServices.EducationType.quizzes
     * @object
     * @description
     *
     * The object `EducationType.quizzes` groups methods
     * manipulating `Quiz` instances related to `EducationType`.
     *
     * Call {@link lbServices.EducationType#quizzes EducationType.quizzes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.EducationType#quizzes
             * @methodOf lbServices.EducationType
             *
             * @description
             *
             * Queries quizzes of EducationType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::get::EducationType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EducationType.quizzes#count
             * @methodOf lbServices.EducationType.quizzes
             *
             * @description
             *
             * Counts quizzes of EducationType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.quizzes.count = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::count::EducationType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EducationType.quizzes#create
             * @methodOf lbServices.EducationType.quizzes
             *
             * @description
             *
             * Creates a new instance in quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.create = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::create::EducationType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EducationType.quizzes#createMany
             * @methodOf lbServices.EducationType.quizzes
             *
             * @description
             *
             * Creates a new instance in quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.createMany = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::createMany::EducationType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EducationType.quizzes#destroyAll
             * @methodOf lbServices.EducationType.quizzes
             *
             * @description
             *
             * Deletes all quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.quizzes.destroyAll = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::delete::EducationType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EducationType.quizzes#destroyById
             * @methodOf lbServices.EducationType.quizzes
             *
             * @description
             *
             * Delete a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.quizzes.destroyById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::destroyById::EducationType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EducationType.quizzes#findById
             * @methodOf lbServices.EducationType.quizzes
             *
             * @description
             *
             * Find a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.findById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::findById::EducationType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EducationType.quizzes#updateById
             * @methodOf lbServices.EducationType.quizzes
             *
             * @description
             *
             * Update a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EducationType id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.updateById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::updateById::EducationType::quizzes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Level
 * @header lbServices.Level
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Level` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Level",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Levels/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Level.quizzes.findById() instead.
            "prototype$__findById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Levels/:id/quizzes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Level.quizzes.destroyById() instead.
            "prototype$__destroyById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Levels/:id/quizzes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Level.quizzes.updateById() instead.
            "prototype$__updateById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Levels/:id/quizzes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Level.quizzes() instead.
            "prototype$__get__quizzes": {
              isArray: true,
              url: urlBase + "/Levels/:id/quizzes",
              method: "GET",
            },

            // INTERNAL. Use Level.quizzes.create() instead.
            "prototype$__create__quizzes": {
              url: urlBase + "/Levels/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use Level.quizzes.destroyAll() instead.
            "prototype$__delete__quizzes": {
              url: urlBase + "/Levels/:id/quizzes",
              method: "DELETE",
            },

            // INTERNAL. Use Level.quizzes.count() instead.
            "prototype$__count__quizzes": {
              url: urlBase + "/Levels/:id/quizzes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#create
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Levels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#createMany
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Levels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#upsert
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Levels",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#replaceOrCreate
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Levels/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#upsertWithWhere
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Levels/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#exists
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Levels/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#findById
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Levels/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#replaceById
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Levels/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#find
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Levels",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#findOne
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Levels/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#updateAll
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Levels/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#deleteById
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Levels/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#count
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Levels/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#prototype$updateAttributes
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Levels/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Level#createChangeStream
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Levels/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Quiz.level() instead.
            "::get::Quiz::level": {
              url: urlBase + "/Quizzes/:id/level",
              method: "GET",
            },

            // INTERNAL. Use Quiz.level.create() instead.
            "::create::Quiz::level": {
              url: urlBase + "/Quizzes/:id/level",
              method: "POST",
            },

            // INTERNAL. Use Quiz.level.createMany() instead.
            "::createMany::Quiz::level": {
              isArray: true,
              url: urlBase + "/Quizzes/:id/level",
              method: "POST",
            },

            // INTERNAL. Use Quiz.level.update() instead.
            "::update::Quiz::level": {
              url: urlBase + "/Quizzes/:id/level",
              method: "PUT",
            },

            // INTERNAL. Use Quiz.level.destroy() instead.
            "::destroy::Quiz::level": {
              url: urlBase + "/Quizzes/:id/level",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Level#patchOrCreate
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Level#updateOrCreate
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Level#patchOrCreateWithWhere
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Level#update
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Level#destroyById
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Level#removeById
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Level#patchAttributes
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Level#modelName
        * @propertyOf lbServices.Level
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Level`.
        */
        R.modelName = "Level";

    /**
     * @ngdoc object
     * @name lbServices.Level.quizzes
     * @header lbServices.Level.quizzes
     * @object
     * @description
     *
     * The object `Level.quizzes` groups methods
     * manipulating `Quiz` instances related to `Level`.
     *
     * Call {@link lbServices.Level#quizzes Level.quizzes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Level#quizzes
             * @methodOf lbServices.Level
             *
             * @description
             *
             * Queries quizzes of Level.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::get::Level::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Level.quizzes#count
             * @methodOf lbServices.Level.quizzes
             *
             * @description
             *
             * Counts quizzes of Level.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.quizzes.count = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::count::Level::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Level.quizzes#create
             * @methodOf lbServices.Level.quizzes
             *
             * @description
             *
             * Creates a new instance in quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.create = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::create::Level::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Level.quizzes#createMany
             * @methodOf lbServices.Level.quizzes
             *
             * @description
             *
             * Creates a new instance in quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.createMany = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::createMany::Level::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Level.quizzes#destroyAll
             * @methodOf lbServices.Level.quizzes
             *
             * @description
             *
             * Deletes all quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.quizzes.destroyAll = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::delete::Level::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Level.quizzes#destroyById
             * @methodOf lbServices.Level.quizzes
             *
             * @description
             *
             * Delete a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.quizzes.destroyById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::destroyById::Level::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Level.quizzes#findById
             * @methodOf lbServices.Level.quizzes
             *
             * @description
             *
             * Find a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.findById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::findById::Level::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Level.quizzes#updateById
             * @methodOf lbServices.Level.quizzes
             *
             * @description
             *
             * Update a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Level id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.updateById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::updateById::Level::quizzes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Quiz
 * @header lbServices.Quiz
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Quiz` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Quiz",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Quizzes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Quiz.educationType() instead.
            "prototype$__get__educationType": {
              url: urlBase + "/Quizzes/:id/educationType",
              method: "GET",
            },

            // INTERNAL. Use Quiz.educationType.create() instead.
            "prototype$__create__educationType": {
              url: urlBase + "/Quizzes/:id/educationType",
              method: "POST",
            },

            // INTERNAL. Use Quiz.educationType.update() instead.
            "prototype$__update__educationType": {
              url: urlBase + "/Quizzes/:id/educationType",
              method: "PUT",
            },

            // INTERNAL. Use Quiz.educationType.destroy() instead.
            "prototype$__destroy__educationType": {
              url: urlBase + "/Quizzes/:id/educationType",
              method: "DELETE",
            },

            // INTERNAL. Use Quiz.level() instead.
            "prototype$__get__level": {
              url: urlBase + "/Quizzes/:id/level",
              method: "GET",
            },

            // INTERNAL. Use Quiz.level.create() instead.
            "prototype$__create__level": {
              url: urlBase + "/Quizzes/:id/level",
              method: "POST",
            },

            // INTERNAL. Use Quiz.level.update() instead.
            "prototype$__update__level": {
              url: urlBase + "/Quizzes/:id/level",
              method: "PUT",
            },

            // INTERNAL. Use Quiz.level.destroy() instead.
            "prototype$__destroy__level": {
              url: urlBase + "/Quizzes/:id/level",
              method: "DELETE",
            },

            // INTERNAL. Use Quiz.examTypes() instead.
            "prototype$__get__examTypes": {
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "GET",
            },

            // INTERNAL. Use Quiz.examTypes.create() instead.
            "prototype$__create__examTypes": {
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "POST",
            },

            // INTERNAL. Use Quiz.examTypes.update() instead.
            "prototype$__update__examTypes": {
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "PUT",
            },

            // INTERNAL. Use Quiz.examTypes.destroy() instead.
            "prototype$__destroy__examTypes": {
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#create
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Quizzes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#createMany
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Quizzes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#upsert
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Quizzes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#replaceOrCreate
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Quizzes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#upsertWithWhere
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Quizzes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#exists
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Quizzes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#findById
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Quizzes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#replaceById
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Quizzes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#find
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Quizzes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#findOne
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Quizzes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#updateAll
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Quizzes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#deleteById
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Quizzes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#count
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Quizzes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#prototype$updateAttributes
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Quizzes/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Quiz#createChangeStream
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Quizzes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use EducationType.quizzes.findById() instead.
            "::findById::EducationType::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/EducationTypes/:id/quizzes/:fk",
              method: "GET",
            },

            // INTERNAL. Use EducationType.quizzes.destroyById() instead.
            "::destroyById::EducationType::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/EducationTypes/:id/quizzes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use EducationType.quizzes.updateById() instead.
            "::updateById::EducationType::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/EducationTypes/:id/quizzes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use EducationType.quizzes() instead.
            "::get::EducationType::quizzes": {
              isArray: true,
              url: urlBase + "/EducationTypes/:id/quizzes",
              method: "GET",
            },

            // INTERNAL. Use EducationType.quizzes.create() instead.
            "::create::EducationType::quizzes": {
              url: urlBase + "/EducationTypes/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use EducationType.quizzes.createMany() instead.
            "::createMany::EducationType::quizzes": {
              isArray: true,
              url: urlBase + "/EducationTypes/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use EducationType.quizzes.destroyAll() instead.
            "::delete::EducationType::quizzes": {
              url: urlBase + "/EducationTypes/:id/quizzes",
              method: "DELETE",
            },

            // INTERNAL. Use EducationType.quizzes.count() instead.
            "::count::EducationType::quizzes": {
              url: urlBase + "/EducationTypes/:id/quizzes/count",
              method: "GET",
            },

            // INTERNAL. Use Level.quizzes.findById() instead.
            "::findById::Level::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Levels/:id/quizzes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Level.quizzes.destroyById() instead.
            "::destroyById::Level::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Levels/:id/quizzes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Level.quizzes.updateById() instead.
            "::updateById::Level::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Levels/:id/quizzes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Level.quizzes() instead.
            "::get::Level::quizzes": {
              isArray: true,
              url: urlBase + "/Levels/:id/quizzes",
              method: "GET",
            },

            // INTERNAL. Use Level.quizzes.create() instead.
            "::create::Level::quizzes": {
              url: urlBase + "/Levels/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use Level.quizzes.createMany() instead.
            "::createMany::Level::quizzes": {
              isArray: true,
              url: urlBase + "/Levels/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use Level.quizzes.destroyAll() instead.
            "::delete::Level::quizzes": {
              url: urlBase + "/Levels/:id/quizzes",
              method: "DELETE",
            },

            // INTERNAL. Use Level.quizzes.count() instead.
            "::count::Level::quizzes": {
              url: urlBase + "/Levels/:id/quizzes/count",
              method: "GET",
            },

            // INTERNAL. Use ExamType.quizzes.findById() instead.
            "::findById::ExamType::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/quizzes/:fk",
              method: "GET",
            },

            // INTERNAL. Use ExamType.quizzes.destroyById() instead.
            "::destroyById::ExamType::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/quizzes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ExamType.quizzes.updateById() instead.
            "::updateById::ExamType::quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/quizzes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ExamType.quizzes() instead.
            "::get::ExamType::quizzes": {
              isArray: true,
              url: urlBase + "/ExamTypes/:id/quizzes",
              method: "GET",
            },

            // INTERNAL. Use ExamType.quizzes.create() instead.
            "::create::ExamType::quizzes": {
              url: urlBase + "/ExamTypes/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use ExamType.quizzes.createMany() instead.
            "::createMany::ExamType::quizzes": {
              isArray: true,
              url: urlBase + "/ExamTypes/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use ExamType.quizzes.destroyAll() instead.
            "::delete::ExamType::quizzes": {
              url: urlBase + "/ExamTypes/:id/quizzes",
              method: "DELETE",
            },

            // INTERNAL. Use ExamType.quizzes.count() instead.
            "::count::ExamType::quizzes": {
              url: urlBase + "/ExamTypes/:id/quizzes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Quiz#patchOrCreate
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Quiz#updateOrCreate
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Quiz#patchOrCreateWithWhere
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Quiz#update
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Quiz#destroyById
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Quiz#removeById
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Quiz#patchAttributes
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Quiz#modelName
        * @propertyOf lbServices.Quiz
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Quiz`.
        */
        R.modelName = "Quiz";

    /**
     * @ngdoc object
     * @name lbServices.Quiz.educationType
     * @header lbServices.Quiz.educationType
     * @object
     * @description
     *
     * The object `Quiz.educationType` groups methods
     * manipulating `EducationType` instances related to `Quiz`.
     *
     * Call {@link lbServices.Quiz#educationType Quiz.educationType()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Quiz#educationType
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Fetches hasOne relation educationType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R.educationType = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::get::Quiz::educationType"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.educationType#create
             * @methodOf lbServices.Quiz.educationType
             *
             * @description
             *
             * Creates a new instance in educationType of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R.educationType.create = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::create::Quiz::educationType"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.educationType#createMany
             * @methodOf lbServices.Quiz.educationType
             *
             * @description
             *
             * Creates a new instance in educationType of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R.educationType.createMany = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::createMany::Quiz::educationType"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.educationType#destroy
             * @methodOf lbServices.Quiz.educationType
             *
             * @description
             *
             * Deletes educationType of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.educationType.destroy = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::destroy::Quiz::educationType"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.educationType#update
             * @methodOf lbServices.Quiz.educationType
             *
             * @description
             *
             * Update educationType of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EducationType` object.)
             * </em>
             */
        R.educationType.update = function() {
          var TargetResource = $injector.get("EducationType");
          var action = TargetResource["::update::Quiz::educationType"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Quiz.level
     * @header lbServices.Quiz.level
     * @object
     * @description
     *
     * The object `Quiz.level` groups methods
     * manipulating `Level` instances related to `Quiz`.
     *
     * Call {@link lbServices.Quiz#level Quiz.level()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Quiz#level
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Fetches hasOne relation level.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R.level = function() {
          var TargetResource = $injector.get("Level");
          var action = TargetResource["::get::Quiz::level"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.level#create
             * @methodOf lbServices.Quiz.level
             *
             * @description
             *
             * Creates a new instance in level of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R.level.create = function() {
          var TargetResource = $injector.get("Level");
          var action = TargetResource["::create::Quiz::level"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.level#createMany
             * @methodOf lbServices.Quiz.level
             *
             * @description
             *
             * Creates a new instance in level of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R.level.createMany = function() {
          var TargetResource = $injector.get("Level");
          var action = TargetResource["::createMany::Quiz::level"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.level#destroy
             * @methodOf lbServices.Quiz.level
             *
             * @description
             *
             * Deletes level of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.level.destroy = function() {
          var TargetResource = $injector.get("Level");
          var action = TargetResource["::destroy::Quiz::level"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.level#update
             * @methodOf lbServices.Quiz.level
             *
             * @description
             *
             * Update level of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
        R.level.update = function() {
          var TargetResource = $injector.get("Level");
          var action = TargetResource["::update::Quiz::level"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Quiz.examTypes
     * @header lbServices.Quiz.examTypes
     * @object
     * @description
     *
     * The object `Quiz.examTypes` groups methods
     * manipulating `ExamType` instances related to `Quiz`.
     *
     * Call {@link lbServices.Quiz#examTypes Quiz.examTypes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Quiz#examTypes
             * @methodOf lbServices.Quiz
             *
             * @description
             *
             * Fetches hasOne relation examTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R.examTypes = function() {
          var TargetResource = $injector.get("ExamType");
          var action = TargetResource["::get::Quiz::examTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.examTypes#create
             * @methodOf lbServices.Quiz.examTypes
             *
             * @description
             *
             * Creates a new instance in examTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R.examTypes.create = function() {
          var TargetResource = $injector.get("ExamType");
          var action = TargetResource["::create::Quiz::examTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.examTypes#createMany
             * @methodOf lbServices.Quiz.examTypes
             *
             * @description
             *
             * Creates a new instance in examTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R.examTypes.createMany = function() {
          var TargetResource = $injector.get("ExamType");
          var action = TargetResource["::createMany::Quiz::examTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.examTypes#destroy
             * @methodOf lbServices.Quiz.examTypes
             *
             * @description
             *
             * Deletes examTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.examTypes.destroy = function() {
          var TargetResource = $injector.get("ExamType");
          var action = TargetResource["::destroy::Quiz::examTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Quiz.examTypes#update
             * @methodOf lbServices.Quiz.examTypes
             *
             * @description
             *
             * Update examTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Quiz id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R.examTypes.update = function() {
          var TargetResource = $injector.get("ExamType");
          var action = TargetResource["::update::Quiz::examTypes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ExamType
 * @header lbServices.ExamType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ExamType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ExamType",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/ExamTypes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ExamType.quizzes.findById() instead.
            "prototype$__findById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/quizzes/:fk",
              method: "GET",
            },

            // INTERNAL. Use ExamType.quizzes.destroyById() instead.
            "prototype$__destroyById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/quizzes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ExamType.quizzes.updateById() instead.
            "prototype$__updateById__quizzes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/quizzes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ExamType.subCategories.findById() instead.
            "prototype$__findById__subCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/subCategories/:fk",
              method: "GET",
            },

            // INTERNAL. Use ExamType.subCategories.destroyById() instead.
            "prototype$__destroyById__subCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/subCategories/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ExamType.subCategories.updateById() instead.
            "prototype$__updateById__subCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/subCategories/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ExamType.quizzes() instead.
            "prototype$__get__quizzes": {
              isArray: true,
              url: urlBase + "/ExamTypes/:id/quizzes",
              method: "GET",
            },

            // INTERNAL. Use ExamType.quizzes.create() instead.
            "prototype$__create__quizzes": {
              url: urlBase + "/ExamTypes/:id/quizzes",
              method: "POST",
            },

            // INTERNAL. Use ExamType.quizzes.destroyAll() instead.
            "prototype$__delete__quizzes": {
              url: urlBase + "/ExamTypes/:id/quizzes",
              method: "DELETE",
            },

            // INTERNAL. Use ExamType.quizzes.count() instead.
            "prototype$__count__quizzes": {
              url: urlBase + "/ExamTypes/:id/quizzes/count",
              method: "GET",
            },

            // INTERNAL. Use ExamType.subCategories() instead.
            "prototype$__get__subCategories": {
              isArray: true,
              url: urlBase + "/ExamTypes/:id/subCategories",
              method: "GET",
            },

            // INTERNAL. Use ExamType.subCategories.create() instead.
            "prototype$__create__subCategories": {
              url: urlBase + "/ExamTypes/:id/subCategories",
              method: "POST",
            },

            // INTERNAL. Use ExamType.subCategories.destroyAll() instead.
            "prototype$__delete__subCategories": {
              url: urlBase + "/ExamTypes/:id/subCategories",
              method: "DELETE",
            },

            // INTERNAL. Use ExamType.subCategories.count() instead.
            "prototype$__count__subCategories": {
              url: urlBase + "/ExamTypes/:id/subCategories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#create
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/ExamTypes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#createMany
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/ExamTypes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#upsert
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/ExamTypes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#replaceOrCreate
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/ExamTypes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#upsertWithWhere
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/ExamTypes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#exists
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/ExamTypes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#findById
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/ExamTypes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#replaceById
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/ExamTypes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#find
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/ExamTypes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#findOne
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/ExamTypes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#updateAll
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/ExamTypes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#deleteById
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/ExamTypes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#count
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/ExamTypes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#prototype$updateAttributes
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/ExamTypes/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.ExamType#createChangeStream
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/ExamTypes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Quiz.examTypes() instead.
            "::get::Quiz::examTypes": {
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "GET",
            },

            // INTERNAL. Use Quiz.examTypes.create() instead.
            "::create::Quiz::examTypes": {
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "POST",
            },

            // INTERNAL. Use Quiz.examTypes.createMany() instead.
            "::createMany::Quiz::examTypes": {
              isArray: true,
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "POST",
            },

            // INTERNAL. Use Quiz.examTypes.update() instead.
            "::update::Quiz::examTypes": {
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "PUT",
            },

            // INTERNAL. Use Quiz.examTypes.destroy() instead.
            "::destroy::Quiz::examTypes": {
              url: urlBase + "/Quizzes/:id/examTypes",
              method: "DELETE",
            },

            // INTERNAL. Use SubCategory.examType() instead.
            "::get::SubCategory::examType": {
              url: urlBase + "/subCategories/:id/examType",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ExamType#patchOrCreate
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.ExamType#updateOrCreate
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.ExamType#patchOrCreateWithWhere
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ExamType#update
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ExamType#destroyById
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ExamType#removeById
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ExamType#patchAttributes
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ExamType#modelName
        * @propertyOf lbServices.ExamType
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ExamType`.
        */
        R.modelName = "ExamType";

    /**
     * @ngdoc object
     * @name lbServices.ExamType.quizzes
     * @header lbServices.ExamType.quizzes
     * @object
     * @description
     *
     * The object `ExamType.quizzes` groups methods
     * manipulating `Quiz` instances related to `ExamType`.
     *
     * Call {@link lbServices.ExamType#quizzes ExamType.quizzes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ExamType#quizzes
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Queries quizzes of ExamType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::get::ExamType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.quizzes#count
             * @methodOf lbServices.ExamType.quizzes
             *
             * @description
             *
             * Counts quizzes of ExamType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.quizzes.count = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::count::ExamType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.quizzes#create
             * @methodOf lbServices.ExamType.quizzes
             *
             * @description
             *
             * Creates a new instance in quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.create = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::create::ExamType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.quizzes#createMany
             * @methodOf lbServices.ExamType.quizzes
             *
             * @description
             *
             * Creates a new instance in quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.createMany = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::createMany::ExamType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.quizzes#destroyAll
             * @methodOf lbServices.ExamType.quizzes
             *
             * @description
             *
             * Deletes all quizzes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.quizzes.destroyAll = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::delete::ExamType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.quizzes#destroyById
             * @methodOf lbServices.ExamType.quizzes
             *
             * @description
             *
             * Delete a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.quizzes.destroyById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::destroyById::ExamType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.quizzes#findById
             * @methodOf lbServices.ExamType.quizzes
             *
             * @description
             *
             * Find a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.findById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::findById::ExamType::quizzes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.quizzes#updateById
             * @methodOf lbServices.ExamType.quizzes
             *
             * @description
             *
             * Update a related item by id for quizzes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `fk` – `{*}` - Foreign key for quizzes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Quiz` object.)
             * </em>
             */
        R.quizzes.updateById = function() {
          var TargetResource = $injector.get("Quiz");
          var action = TargetResource["::updateById::ExamType::quizzes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ExamType.subCategories
     * @header lbServices.ExamType.subCategories
     * @object
     * @description
     *
     * The object `ExamType.subCategories` groups methods
     * manipulating `SubCategory` instances related to `ExamType`.
     *
     * Call {@link lbServices.ExamType#subCategories ExamType.subCategories()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ExamType#subCategories
             * @methodOf lbServices.ExamType
             *
             * @description
             *
             * Queries subCategories of ExamType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R.subCategories = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::get::ExamType::subCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.subCategories#count
             * @methodOf lbServices.ExamType.subCategories
             *
             * @description
             *
             * Counts subCategories of ExamType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.subCategories.count = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::count::ExamType::subCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.subCategories#create
             * @methodOf lbServices.ExamType.subCategories
             *
             * @description
             *
             * Creates a new instance in subCategories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R.subCategories.create = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::create::ExamType::subCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.subCategories#createMany
             * @methodOf lbServices.ExamType.subCategories
             *
             * @description
             *
             * Creates a new instance in subCategories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R.subCategories.createMany = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::createMany::ExamType::subCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.subCategories#destroyAll
             * @methodOf lbServices.ExamType.subCategories
             *
             * @description
             *
             * Deletes all subCategories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subCategories.destroyAll = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::delete::ExamType::subCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.subCategories#destroyById
             * @methodOf lbServices.ExamType.subCategories
             *
             * @description
             *
             * Delete a related item by id for subCategories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `fk` – `{*}` - Foreign key for subCategories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subCategories.destroyById = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::destroyById::ExamType::subCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.subCategories#findById
             * @methodOf lbServices.ExamType.subCategories
             *
             * @description
             *
             * Find a related item by id for subCategories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `fk` – `{*}` - Foreign key for subCategories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R.subCategories.findById = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::findById::ExamType::subCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ExamType.subCategories#updateById
             * @methodOf lbServices.ExamType.subCategories
             *
             * @description
             *
             * Update a related item by id for subCategories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ExamType id
             *
             *  - `fk` – `{*}` - Foreign key for subCategories
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R.subCategories.updateById = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::updateById::ExamType::subCategories"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.SubCategory
 * @header lbServices.SubCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SubCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "SubCategory",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/subCategories/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use SubCategory.examType() instead.
            "prototype$__get__examType": {
              url: urlBase + "/subCategories/:id/examType",
              method: "GET",
            },

            // INTERNAL. Use SubCategory.questions.findById() instead.
            "prototype$__findById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/subCategories/:id/questions/:fk",
              method: "GET",
            },

            // INTERNAL. Use SubCategory.questions.destroyById() instead.
            "prototype$__destroyById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/subCategories/:id/questions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SubCategory.questions.updateById() instead.
            "prototype$__updateById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/subCategories/:id/questions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SubCategory.questions() instead.
            "prototype$__get__questions": {
              isArray: true,
              url: urlBase + "/subCategories/:id/questions",
              method: "GET",
            },

            // INTERNAL. Use SubCategory.questions.create() instead.
            "prototype$__create__questions": {
              url: urlBase + "/subCategories/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use SubCategory.questions.destroyAll() instead.
            "prototype$__delete__questions": {
              url: urlBase + "/subCategories/:id/questions",
              method: "DELETE",
            },

            // INTERNAL. Use SubCategory.questions.count() instead.
            "prototype$__count__questions": {
              url: urlBase + "/subCategories/:id/questions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#create
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/subCategories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#createMany
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/subCategories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#upsert
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/subCategories",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#replaceOrCreate
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/subCategories/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#upsertWithWhere
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/subCategories/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#exists
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/subCategories/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#findById
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/subCategories/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#replaceById
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/subCategories/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#find
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/subCategories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#findOne
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/subCategories/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#updateAll
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/subCategories/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#deleteById
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/subCategories/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#count
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/subCategories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#prototype$updateAttributes
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/subCategories/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#createChangeStream
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/subCategories/change-stream",
              method: "POST",
            },

            // INTERNAL. Use ExamType.subCategories.findById() instead.
            "::findById::ExamType::subCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/subCategories/:fk",
              method: "GET",
            },

            // INTERNAL. Use ExamType.subCategories.destroyById() instead.
            "::destroyById::ExamType::subCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/subCategories/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ExamType.subCategories.updateById() instead.
            "::updateById::ExamType::subCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ExamTypes/:id/subCategories/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ExamType.subCategories() instead.
            "::get::ExamType::subCategories": {
              isArray: true,
              url: urlBase + "/ExamTypes/:id/subCategories",
              method: "GET",
            },

            // INTERNAL. Use ExamType.subCategories.create() instead.
            "::create::ExamType::subCategories": {
              url: urlBase + "/ExamTypes/:id/subCategories",
              method: "POST",
            },

            // INTERNAL. Use ExamType.subCategories.createMany() instead.
            "::createMany::ExamType::subCategories": {
              isArray: true,
              url: urlBase + "/ExamTypes/:id/subCategories",
              method: "POST",
            },

            // INTERNAL. Use ExamType.subCategories.destroyAll() instead.
            "::delete::ExamType::subCategories": {
              url: urlBase + "/ExamTypes/:id/subCategories",
              method: "DELETE",
            },

            // INTERNAL. Use ExamType.subCategories.count() instead.
            "::count::ExamType::subCategories": {
              url: urlBase + "/ExamTypes/:id/subCategories/count",
              method: "GET",
            },

            // INTERNAL. Use Question.subCategory() instead.
            "::get::Question::subCategory": {
              url: urlBase + "/Questions/:id/subCategory",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.SubCategory#patchOrCreate
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#updateOrCreate
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#patchOrCreateWithWhere
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#update
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#destroyById
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#removeById
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SubCategory#patchAttributes
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.SubCategory#modelName
        * @propertyOf lbServices.SubCategory
        * @description
        * The name of the model represented by this $resource,
        * i.e. `SubCategory`.
        */
        R.modelName = "SubCategory";


            /**
             * @ngdoc method
             * @name lbServices.SubCategory#examType
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Fetches belongsTo relation examType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ExamType` object.)
             * </em>
             */
        R.examType = function() {
          var TargetResource = $injector.get("ExamType");
          var action = TargetResource["::get::SubCategory::examType"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SubCategory.questions
     * @header lbServices.SubCategory.questions
     * @object
     * @description
     *
     * The object `SubCategory.questions` groups methods
     * manipulating `Question` instances related to `SubCategory`.
     *
     * Call {@link lbServices.SubCategory#questions SubCategory.questions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.SubCategory#questions
             * @methodOf lbServices.SubCategory
             *
             * @description
             *
             * Queries questions of subCategory.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::SubCategory::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SubCategory.questions#count
             * @methodOf lbServices.SubCategory.questions
             *
             * @description
             *
             * Counts questions of subCategory.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.questions.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::SubCategory::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SubCategory.questions#create
             * @methodOf lbServices.SubCategory.questions
             *
             * @description
             *
             * Creates a new instance in questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::SubCategory::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SubCategory.questions#createMany
             * @methodOf lbServices.SubCategory.questions
             *
             * @description
             *
             * Creates a new instance in questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::SubCategory::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SubCategory.questions#destroyAll
             * @methodOf lbServices.SubCategory.questions
             *
             * @description
             *
             * Deletes all questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::SubCategory::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SubCategory.questions#destroyById
             * @methodOf lbServices.SubCategory.questions
             *
             * @description
             *
             * Delete a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::SubCategory::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SubCategory.questions#findById
             * @methodOf lbServices.SubCategory.questions
             *
             * @description
             *
             * Find a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::SubCategory::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SubCategory.questions#updateById
             * @methodOf lbServices.SubCategory.questions
             *
             * @description
             *
             * Update a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - subCategory id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::SubCategory::questions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Question
 * @header lbServices.Question
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Question` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Question",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Questions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Question.subCategory() instead.
            "prototype$__get__subCategory": {
              url: urlBase + "/Questions/:id/subCategory",
              method: "GET",
            },

            // INTERNAL. Use Question.subject() instead.
            "prototype$__get__subject": {
              url: urlBase + "/Questions/:id/subject",
              method: "GET",
            },

            // INTERNAL. Use Question.questionType() instead.
            "prototype$__get__questionType": {
              url: urlBase + "/Questions/:id/questionType",
              method: "GET",
            },

            // INTERNAL. Use Question.answers.findById() instead.
            "prototype$__findById__answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Questions/:id/answers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Question.answers.destroyById() instead.
            "prototype$__destroyById__answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Questions/:id/answers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Question.answers.updateById() instead.
            "prototype$__updateById__answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Questions/:id/answers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Question.bootcamps() instead.
            "prototype$__get__bootcamps": {
              url: urlBase + "/Questions/:id/bootcamps",
              method: "GET",
            },

            // INTERNAL. Use Question.bootcamps.create() instead.
            "prototype$__create__bootcamps": {
              url: urlBase + "/Questions/:id/bootcamps",
              method: "POST",
            },

            // INTERNAL. Use Question.bootcamps.update() instead.
            "prototype$__update__bootcamps": {
              url: urlBase + "/Questions/:id/bootcamps",
              method: "PUT",
            },

            // INTERNAL. Use Question.bootcamps.destroy() instead.
            "prototype$__destroy__bootcamps": {
              url: urlBase + "/Questions/:id/bootcamps",
              method: "DELETE",
            },

            // INTERNAL. Use Question.answers() instead.
            "prototype$__get__answers": {
              isArray: true,
              url: urlBase + "/Questions/:id/answers",
              method: "GET",
            },

            // INTERNAL. Use Question.answers.create() instead.
            "prototype$__create__answers": {
              url: urlBase + "/Questions/:id/answers",
              method: "POST",
            },

            // INTERNAL. Use Question.answers.destroyAll() instead.
            "prototype$__delete__answers": {
              url: urlBase + "/Questions/:id/answers",
              method: "DELETE",
            },

            // INTERNAL. Use Question.answers.count() instead.
            "prototype$__count__answers": {
              url: urlBase + "/Questions/:id/answers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#create
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Questions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#createMany
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Questions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#upsert
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Questions",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#replaceOrCreate
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Questions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#upsertWithWhere
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Questions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#exists
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Questions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#findById
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Questions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#replaceById
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Questions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#find
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Questions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#findOne
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Questions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#updateAll
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Questions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#deleteById
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Questions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#count
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Questions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#prototype$updateAttributes
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Questions/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Question#createChangeStream
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Questions/change-stream",
              method: "POST",
            },

            // INTERNAL. Use SubCategory.questions.findById() instead.
            "::findById::SubCategory::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/subCategories/:id/questions/:fk",
              method: "GET",
            },

            // INTERNAL. Use SubCategory.questions.destroyById() instead.
            "::destroyById::SubCategory::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/subCategories/:id/questions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SubCategory.questions.updateById() instead.
            "::updateById::SubCategory::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/subCategories/:id/questions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SubCategory.questions() instead.
            "::get::SubCategory::questions": {
              isArray: true,
              url: urlBase + "/subCategories/:id/questions",
              method: "GET",
            },

            // INTERNAL. Use SubCategory.questions.create() instead.
            "::create::SubCategory::questions": {
              url: urlBase + "/subCategories/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use SubCategory.questions.createMany() instead.
            "::createMany::SubCategory::questions": {
              isArray: true,
              url: urlBase + "/subCategories/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use SubCategory.questions.destroyAll() instead.
            "::delete::SubCategory::questions": {
              url: urlBase + "/subCategories/:id/questions",
              method: "DELETE",
            },

            // INTERNAL. Use SubCategory.questions.count() instead.
            "::count::SubCategory::questions": {
              url: urlBase + "/subCategories/:id/questions/count",
              method: "GET",
            },

            // INTERNAL. Use Subject.questions.findById() instead.
            "::findById::Subject::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Subjects/:id/questions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Subject.questions.destroyById() instead.
            "::destroyById::Subject::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Subjects/:id/questions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Subject.questions.updateById() instead.
            "::updateById::Subject::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Subjects/:id/questions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Subject.questions() instead.
            "::get::Subject::questions": {
              isArray: true,
              url: urlBase + "/Subjects/:id/questions",
              method: "GET",
            },

            // INTERNAL. Use Subject.questions.create() instead.
            "::create::Subject::questions": {
              url: urlBase + "/Subjects/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use Subject.questions.createMany() instead.
            "::createMany::Subject::questions": {
              isArray: true,
              url: urlBase + "/Subjects/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use Subject.questions.destroyAll() instead.
            "::delete::Subject::questions": {
              url: urlBase + "/Subjects/:id/questions",
              method: "DELETE",
            },

            // INTERNAL. Use Subject.questions.count() instead.
            "::count::Subject::questions": {
              url: urlBase + "/Subjects/:id/questions/count",
              method: "GET",
            },

            // INTERNAL. Use QuestionType.questions.findById() instead.
            "::findById::QuestionType::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/QuestionTypes/:id/questions/:fk",
              method: "GET",
            },

            // INTERNAL. Use QuestionType.questions.destroyById() instead.
            "::destroyById::QuestionType::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/QuestionTypes/:id/questions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use QuestionType.questions.updateById() instead.
            "::updateById::QuestionType::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/QuestionTypes/:id/questions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use QuestionType.questions() instead.
            "::get::QuestionType::questions": {
              isArray: true,
              url: urlBase + "/QuestionTypes/:id/questions",
              method: "GET",
            },

            // INTERNAL. Use QuestionType.questions.create() instead.
            "::create::QuestionType::questions": {
              url: urlBase + "/QuestionTypes/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use QuestionType.questions.createMany() instead.
            "::createMany::QuestionType::questions": {
              isArray: true,
              url: urlBase + "/QuestionTypes/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use QuestionType.questions.destroyAll() instead.
            "::delete::QuestionType::questions": {
              url: urlBase + "/QuestionTypes/:id/questions",
              method: "DELETE",
            },

            // INTERNAL. Use QuestionType.questions.count() instead.
            "::count::QuestionType::questions": {
              url: urlBase + "/QuestionTypes/:id/questions/count",
              method: "GET",
            },

            // INTERNAL. Use Answer.question() instead.
            "::get::Answer::question": {
              url: urlBase + "/Answers/:id/question",
              method: "GET",
            },

            // INTERNAL. Use Bootcamp.question() instead.
            "::get::Bootcamp::question": {
              url: urlBase + "/Bootcamps/:id/question",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Question#patchOrCreate
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Question#updateOrCreate
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Question#patchOrCreateWithWhere
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Question#update
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Question#destroyById
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Question#removeById
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Question#patchAttributes
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Question#modelName
        * @propertyOf lbServices.Question
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Question`.
        */
        R.modelName = "Question";


            /**
             * @ngdoc method
             * @name lbServices.Question#subCategory
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Fetches belongsTo relation subCategory.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SubCategory` object.)
             * </em>
             */
        R.subCategory = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::get::Question::subCategory"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question#subject
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Fetches belongsTo relation subject.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
        R.subject = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::get::Question::subject"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question#questionType
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Fetches belongsTo relation questionType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
        R.questionType = function() {
          var TargetResource = $injector.get("QuestionType");
          var action = TargetResource["::get::Question::questionType"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.answers
     * @header lbServices.Question.answers
     * @object
     * @description
     *
     * The object `Question.answers` groups methods
     * manipulating `Answer` instances related to `Question`.
     *
     * Call {@link lbServices.Question#answers Question.answers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Question#answers
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Queries answers of Question.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::Question::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.answers#count
             * @methodOf lbServices.Question.answers
             *
             * @description
             *
             * Counts answers of Question.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.answers.count = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::count::Question::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.answers#create
             * @methodOf lbServices.Question.answers
             *
             * @description
             *
             * Creates a new instance in answers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers.create = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::create::Question::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.answers#createMany
             * @methodOf lbServices.Question.answers
             *
             * @description
             *
             * Creates a new instance in answers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers.createMany = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::createMany::Question::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.answers#destroyAll
             * @methodOf lbServices.Question.answers
             *
             * @description
             *
             * Deletes all answers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.answers.destroyAll = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::delete::Question::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.answers#destroyById
             * @methodOf lbServices.Question.answers
             *
             * @description
             *
             * Delete a related item by id for answers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `fk` – `{*}` - Foreign key for answers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.answers.destroyById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::destroyById::Question::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.answers#findById
             * @methodOf lbServices.Question.answers
             *
             * @description
             *
             * Find a related item by id for answers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `fk` – `{*}` - Foreign key for answers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers.findById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::findById::Question::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.answers#updateById
             * @methodOf lbServices.Question.answers
             *
             * @description
             *
             * Update a related item by id for answers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `fk` – `{*}` - Foreign key for answers
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers.updateById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::updateById::Question::answers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.bootcamps
     * @header lbServices.Question.bootcamps
     * @object
     * @description
     *
     * The object `Question.bootcamps` groups methods
     * manipulating `Bootcamp` instances related to `Question`.
     *
     * Call {@link lbServices.Question#bootcamps Question.bootcamps()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Question#bootcamps
             * @methodOf lbServices.Question
             *
             * @description
             *
             * Fetches hasOne relation bootcamps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R.bootcamps = function() {
          var TargetResource = $injector.get("Bootcamp");
          var action = TargetResource["::get::Question::bootcamps"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.bootcamps#create
             * @methodOf lbServices.Question.bootcamps
             *
             * @description
             *
             * Creates a new instance in bootcamps of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R.bootcamps.create = function() {
          var TargetResource = $injector.get("Bootcamp");
          var action = TargetResource["::create::Question::bootcamps"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.bootcamps#createMany
             * @methodOf lbServices.Question.bootcamps
             *
             * @description
             *
             * Creates a new instance in bootcamps of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R.bootcamps.createMany = function() {
          var TargetResource = $injector.get("Bootcamp");
          var action = TargetResource["::createMany::Question::bootcamps"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.bootcamps#destroy
             * @methodOf lbServices.Question.bootcamps
             *
             * @description
             *
             * Deletes bootcamps of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bootcamps.destroy = function() {
          var TargetResource = $injector.get("Bootcamp");
          var action = TargetResource["::destroy::Question::bootcamps"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Question.bootcamps#update
             * @methodOf lbServices.Question.bootcamps
             *
             * @description
             *
             * Update bootcamps of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Question id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R.bootcamps.update = function() {
          var TargetResource = $injector.get("Bootcamp");
          var action = TargetResource["::update::Question::bootcamps"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Subject
 * @header lbServices.Subject
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Subject` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Subject",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Subjects/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Subject.questions.findById() instead.
            "prototype$__findById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Subjects/:id/questions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Subject.questions.destroyById() instead.
            "prototype$__destroyById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Subjects/:id/questions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Subject.questions.updateById() instead.
            "prototype$__updateById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Subjects/:id/questions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Subject.questions() instead.
            "prototype$__get__questions": {
              isArray: true,
              url: urlBase + "/Subjects/:id/questions",
              method: "GET",
            },

            // INTERNAL. Use Subject.questions.create() instead.
            "prototype$__create__questions": {
              url: urlBase + "/Subjects/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use Subject.questions.destroyAll() instead.
            "prototype$__delete__questions": {
              url: urlBase + "/Subjects/:id/questions",
              method: "DELETE",
            },

            // INTERNAL. Use Subject.questions.count() instead.
            "prototype$__count__questions": {
              url: urlBase + "/Subjects/:id/questions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#create
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Subjects",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#createMany
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Subjects",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#upsert
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Subjects",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#replaceOrCreate
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Subjects/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#upsertWithWhere
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Subjects/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#exists
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Subjects/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#findById
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Subjects/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#replaceById
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Subjects/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#find
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Subjects",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#findOne
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Subjects/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#updateAll
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Subjects/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#deleteById
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Subjects/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#count
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Subjects/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#prototype$updateAttributes
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Subjects/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subject#createChangeStream
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Subjects/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Question.subject() instead.
            "::get::Question::subject": {
              url: urlBase + "/Questions/:id/subject",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Subject#patchOrCreate
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Subject#updateOrCreate
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Subject#patchOrCreateWithWhere
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Subject#update
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Subject#destroyById
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Subject#removeById
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Subject#patchAttributes
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subject` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Subject#modelName
        * @propertyOf lbServices.Subject
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Subject`.
        */
        R.modelName = "Subject";

    /**
     * @ngdoc object
     * @name lbServices.Subject.questions
     * @header lbServices.Subject.questions
     * @object
     * @description
     *
     * The object `Subject.questions` groups methods
     * manipulating `Question` instances related to `Subject`.
     *
     * Call {@link lbServices.Subject#questions Subject.questions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Subject#questions
             * @methodOf lbServices.Subject
             *
             * @description
             *
             * Queries questions of Subject.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Subject::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Subject.questions#count
             * @methodOf lbServices.Subject.questions
             *
             * @description
             *
             * Counts questions of Subject.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.questions.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::Subject::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Subject.questions#create
             * @methodOf lbServices.Subject.questions
             *
             * @description
             *
             * Creates a new instance in questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::Subject::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Subject.questions#createMany
             * @methodOf lbServices.Subject.questions
             *
             * @description
             *
             * Creates a new instance in questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::Subject::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Subject.questions#destroyAll
             * @methodOf lbServices.Subject.questions
             *
             * @description
             *
             * Deletes all questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::Subject::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Subject.questions#destroyById
             * @methodOf lbServices.Subject.questions
             *
             * @description
             *
             * Delete a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::Subject::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Subject.questions#findById
             * @methodOf lbServices.Subject.questions
             *
             * @description
             *
             * Find a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::Subject::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Subject.questions#updateById
             * @methodOf lbServices.Subject.questions
             *
             * @description
             *
             * Update a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subject id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::Subject::questions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.QuestionType
 * @header lbServices.QuestionType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `QuestionType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "QuestionType",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/QuestionTypes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use QuestionType.questions.findById() instead.
            "prototype$__findById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/QuestionTypes/:id/questions/:fk",
              method: "GET",
            },

            // INTERNAL. Use QuestionType.questions.destroyById() instead.
            "prototype$__destroyById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/QuestionTypes/:id/questions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use QuestionType.questions.updateById() instead.
            "prototype$__updateById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/QuestionTypes/:id/questions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use QuestionType.questions() instead.
            "prototype$__get__questions": {
              isArray: true,
              url: urlBase + "/QuestionTypes/:id/questions",
              method: "GET",
            },

            // INTERNAL. Use QuestionType.questions.create() instead.
            "prototype$__create__questions": {
              url: urlBase + "/QuestionTypes/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use QuestionType.questions.destroyAll() instead.
            "prototype$__delete__questions": {
              url: urlBase + "/QuestionTypes/:id/questions",
              method: "DELETE",
            },

            // INTERNAL. Use QuestionType.questions.count() instead.
            "prototype$__count__questions": {
              url: urlBase + "/QuestionTypes/:id/questions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#create
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/QuestionTypes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#createMany
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/QuestionTypes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#upsert
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/QuestionTypes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#replaceOrCreate
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/QuestionTypes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#upsertWithWhere
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/QuestionTypes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#exists
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/QuestionTypes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#findById
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/QuestionTypes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#replaceById
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/QuestionTypes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#find
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/QuestionTypes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#findOne
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/QuestionTypes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#updateAll
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/QuestionTypes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#deleteById
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/QuestionTypes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#count
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/QuestionTypes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#prototype$updateAttributes
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/QuestionTypes/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#createChangeStream
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/QuestionTypes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Question.questionType() instead.
            "::get::Question::questionType": {
              url: urlBase + "/Questions/:id/questionType",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.QuestionType#patchOrCreate
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#updateOrCreate
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#patchOrCreateWithWhere
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#update
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#destroyById
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#removeById
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.QuestionType#patchAttributes
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `QuestionType` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.QuestionType#modelName
        * @propertyOf lbServices.QuestionType
        * @description
        * The name of the model represented by this $resource,
        * i.e. `QuestionType`.
        */
        R.modelName = "QuestionType";

    /**
     * @ngdoc object
     * @name lbServices.QuestionType.questions
     * @header lbServices.QuestionType.questions
     * @object
     * @description
     *
     * The object `QuestionType.questions` groups methods
     * manipulating `Question` instances related to `QuestionType`.
     *
     * Call {@link lbServices.QuestionType#questions QuestionType.questions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.QuestionType#questions
             * @methodOf lbServices.QuestionType
             *
             * @description
             *
             * Queries questions of QuestionType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::QuestionType::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.QuestionType.questions#count
             * @methodOf lbServices.QuestionType.questions
             *
             * @description
             *
             * Counts questions of QuestionType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.questions.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::QuestionType::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.QuestionType.questions#create
             * @methodOf lbServices.QuestionType.questions
             *
             * @description
             *
             * Creates a new instance in questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::QuestionType::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.QuestionType.questions#createMany
             * @methodOf lbServices.QuestionType.questions
             *
             * @description
             *
             * Creates a new instance in questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::QuestionType::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.QuestionType.questions#destroyAll
             * @methodOf lbServices.QuestionType.questions
             *
             * @description
             *
             * Deletes all questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::QuestionType::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.QuestionType.questions#destroyById
             * @methodOf lbServices.QuestionType.questions
             *
             * @description
             *
             * Delete a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::QuestionType::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.QuestionType.questions#findById
             * @methodOf lbServices.QuestionType.questions
             *
             * @description
             *
             * Find a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::QuestionType::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.QuestionType.questions#updateById
             * @methodOf lbServices.QuestionType.questions
             *
             * @description
             *
             * Update a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - QuestionType id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::QuestionType::questions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Answer
 * @header lbServices.Answer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Answer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Answer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Answers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Answer.question() instead.
            "prototype$__get__question": {
              url: urlBase + "/Answers/:id/question",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#create
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Answers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#createMany
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Answers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#upsert
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Answers",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#replaceOrCreate
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Answers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#upsertWithWhere
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Answers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#exists
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Answers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#findById
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Answers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#replaceById
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Answers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#find
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Answers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#findOne
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Answers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#updateAll
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Answers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#deleteById
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Answers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#count
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Answers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#prototype$updateAttributes
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Answer id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Answers/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Answer#createChangeStream
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Answers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Question.answers.findById() instead.
            "::findById::Question::answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Questions/:id/answers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Question.answers.destroyById() instead.
            "::destroyById::Question::answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Questions/:id/answers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Question.answers.updateById() instead.
            "::updateById::Question::answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Questions/:id/answers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Question.answers() instead.
            "::get::Question::answers": {
              isArray: true,
              url: urlBase + "/Questions/:id/answers",
              method: "GET",
            },

            // INTERNAL. Use Question.answers.create() instead.
            "::create::Question::answers": {
              url: urlBase + "/Questions/:id/answers",
              method: "POST",
            },

            // INTERNAL. Use Question.answers.createMany() instead.
            "::createMany::Question::answers": {
              isArray: true,
              url: urlBase + "/Questions/:id/answers",
              method: "POST",
            },

            // INTERNAL. Use Question.answers.destroyAll() instead.
            "::delete::Question::answers": {
              url: urlBase + "/Questions/:id/answers",
              method: "DELETE",
            },

            // INTERNAL. Use Question.answers.count() instead.
            "::count::Question::answers": {
              url: urlBase + "/Questions/:id/answers/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Answer#patchOrCreate
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Answer#updateOrCreate
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Answer#patchOrCreateWithWhere
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Answer#update
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Answer#destroyById
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Answer#removeById
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Answer#patchAttributes
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Answer id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Answer#modelName
        * @propertyOf lbServices.Answer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Answer`.
        */
        R.modelName = "Answer";


            /**
             * @ngdoc method
             * @name lbServices.Answer#question
             * @methodOf lbServices.Answer
             *
             * @description
             *
             * Fetches belongsTo relation question.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Answer id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Answer::question"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Occupation
 * @header lbServices.Occupation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Occupation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Occupation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Occupations/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Occupation.userDetails() instead.
            "prototype$__get__userDetails": {
              url: urlBase + "/Occupations/:id/userDetails",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#create
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Occupations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#createMany
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Occupations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#upsert
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Occupations",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#replaceOrCreate
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Occupations/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#upsertWithWhere
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Occupations/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#exists
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Occupations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#findById
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Occupations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#replaceById
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Occupations/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#find
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Occupations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#findOne
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Occupations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#updateAll
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Occupations/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#deleteById
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Occupations/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#count
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Occupations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#prototype$updateAttributes
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Occupation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Occupations/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Occupation#createChangeStream
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Occupations/change-stream",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.occupation() instead.
            "::get::UserDetails::occupation": {
              url: urlBase + "/UserDetails/:id/occupation",
              method: "GET",
            },

            // INTERNAL. Use UserDetails.occupation.create() instead.
            "::create::UserDetails::occupation": {
              url: urlBase + "/UserDetails/:id/occupation",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.occupation.createMany() instead.
            "::createMany::UserDetails::occupation": {
              isArray: true,
              url: urlBase + "/UserDetails/:id/occupation",
              method: "POST",
            },

            // INTERNAL. Use UserDetails.occupation.update() instead.
            "::update::UserDetails::occupation": {
              url: urlBase + "/UserDetails/:id/occupation",
              method: "PUT",
            },

            // INTERNAL. Use UserDetails.occupation.destroy() instead.
            "::destroy::UserDetails::occupation": {
              url: urlBase + "/UserDetails/:id/occupation",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Occupation#patchOrCreate
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Occupation#updateOrCreate
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Occupation#patchOrCreateWithWhere
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Occupation#update
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Occupation#destroyById
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Occupation#removeById
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Occupation#patchAttributes
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Occupation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Occupation` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Occupation#modelName
        * @propertyOf lbServices.Occupation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Occupation`.
        */
        R.modelName = "Occupation";


            /**
             * @ngdoc method
             * @name lbServices.Occupation#userDetails
             * @methodOf lbServices.Occupation
             *
             * @description
             *
             * Fetches belongsTo relation userDetails.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Occupation id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R.userDetails = function() {
          var TargetResource = $injector.get("UserDetails");
          var action = TargetResource["::get::Occupation::userDetails"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Bootcamp
 * @header lbServices.Bootcamp
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Bootcamp` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Bootcamp",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Bootcamps/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Bootcamp.question() instead.
            "prototype$__get__question": {
              url: urlBase + "/Bootcamps/:id/question",
              method: "GET",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.findById() instead.
            "prototype$__findById__bootcampResolveds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Bootcamps/:id/bootcampResolveds/:fk",
              method: "GET",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.destroyById() instead.
            "prototype$__destroyById__bootcampResolveds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Bootcamps/:id/bootcampResolveds/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.updateById() instead.
            "prototype$__updateById__bootcampResolveds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Bootcamps/:id/bootcampResolveds/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds() instead.
            "prototype$__get__bootcampResolveds": {
              isArray: true,
              url: urlBase + "/Bootcamps/:id/bootcampResolveds",
              method: "GET",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.create() instead.
            "prototype$__create__bootcampResolveds": {
              url: urlBase + "/Bootcamps/:id/bootcampResolveds",
              method: "POST",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.destroyAll() instead.
            "prototype$__delete__bootcampResolveds": {
              url: urlBase + "/Bootcamps/:id/bootcampResolveds",
              method: "DELETE",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.count() instead.
            "prototype$__count__bootcampResolveds": {
              url: urlBase + "/Bootcamps/:id/bootcampResolveds/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#create
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Bootcamps",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#createMany
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Bootcamps",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#upsert
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Bootcamps",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#replaceOrCreate
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Bootcamps/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#upsertWithWhere
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Bootcamps/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#exists
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Bootcamps/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#findById
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Bootcamps/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#replaceById
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Bootcamps/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#find
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Bootcamps",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#findOne
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Bootcamps/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#updateAll
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Bootcamps/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#deleteById
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Bootcamps/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#count
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Bootcamps/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#prototype$updateAttributes
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Bootcamps/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#createChangeStream
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Bootcamps/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Question.bootcamps() instead.
            "::get::Question::bootcamps": {
              url: urlBase + "/Questions/:id/bootcamps",
              method: "GET",
            },

            // INTERNAL. Use Question.bootcamps.create() instead.
            "::create::Question::bootcamps": {
              url: urlBase + "/Questions/:id/bootcamps",
              method: "POST",
            },

            // INTERNAL. Use Question.bootcamps.createMany() instead.
            "::createMany::Question::bootcamps": {
              isArray: true,
              url: urlBase + "/Questions/:id/bootcamps",
              method: "POST",
            },

            // INTERNAL. Use Question.bootcamps.update() instead.
            "::update::Question::bootcamps": {
              url: urlBase + "/Questions/:id/bootcamps",
              method: "PUT",
            },

            // INTERNAL. Use Question.bootcamps.destroy() instead.
            "::destroy::Question::bootcamps": {
              url: urlBase + "/Questions/:id/bootcamps",
              method: "DELETE",
            },

            // INTERNAL. Use BootcampResolved.bootcamp() instead.
            "::get::BootcampResolved::bootcamp": {
              url: urlBase + "/BootcampResolveds/:id/bootcamp",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#patchOrCreate
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#updateOrCreate
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#patchOrCreateWithWhere
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#update
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#destroyById
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#removeById
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#patchAttributes
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Bootcamp#modelName
        * @propertyOf lbServices.Bootcamp
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Bootcamp`.
        */
        R.modelName = "Bootcamp";


            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#question
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Fetches belongsTo relation question.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Bootcamp::question"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Bootcamp.bootcampResolveds
     * @header lbServices.Bootcamp.bootcampResolveds
     * @object
     * @description
     *
     * The object `Bootcamp.bootcampResolveds` groups methods
     * manipulating `BootcampResolved` instances related to `Bootcamp`.
     *
     * Call {@link lbServices.Bootcamp#bootcampResolveds Bootcamp.bootcampResolveds()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Bootcamp#bootcampResolveds
             * @methodOf lbServices.Bootcamp
             *
             * @description
             *
             * Queries bootcampResolveds of Bootcamp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampResolveds = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::get::Bootcamp::bootcampResolveds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp.bootcampResolveds#count
             * @methodOf lbServices.Bootcamp.bootcampResolveds
             *
             * @description
             *
             * Counts bootcampResolveds of Bootcamp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.bootcampResolveds.count = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::count::Bootcamp::bootcampResolveds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp.bootcampResolveds#create
             * @methodOf lbServices.Bootcamp.bootcampResolveds
             *
             * @description
             *
             * Creates a new instance in bootcampResolveds of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampResolveds.create = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::create::Bootcamp::bootcampResolveds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp.bootcampResolveds#createMany
             * @methodOf lbServices.Bootcamp.bootcampResolveds
             *
             * @description
             *
             * Creates a new instance in bootcampResolveds of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampResolveds.createMany = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::createMany::Bootcamp::bootcampResolveds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp.bootcampResolveds#destroyAll
             * @methodOf lbServices.Bootcamp.bootcampResolveds
             *
             * @description
             *
             * Deletes all bootcampResolveds of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bootcampResolveds.destroyAll = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::delete::Bootcamp::bootcampResolveds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp.bootcampResolveds#destroyById
             * @methodOf lbServices.Bootcamp.bootcampResolveds
             *
             * @description
             *
             * Delete a related item by id for bootcampResolveds.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             *  - `fk` – `{*}` - Foreign key for bootcampResolveds
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bootcampResolveds.destroyById = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::destroyById::Bootcamp::bootcampResolveds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp.bootcampResolveds#findById
             * @methodOf lbServices.Bootcamp.bootcampResolveds
             *
             * @description
             *
             * Find a related item by id for bootcampResolveds.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             *  - `fk` – `{*}` - Foreign key for bootcampResolveds
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampResolveds.findById = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::findById::Bootcamp::bootcampResolveds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Bootcamp.bootcampResolveds#updateById
             * @methodOf lbServices.Bootcamp.bootcampResolveds
             *
             * @description
             *
             * Update a related item by id for bootcampResolveds.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Bootcamp id
             *
             *  - `fk` – `{*}` - Foreign key for bootcampResolveds
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampResolveds.updateById = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::updateById::Bootcamp::bootcampResolveds"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Users
 * @header lbServices.Users
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Users` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Users",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Users#prototype$__findById__accessTokens
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#prototype$__updateById__accessTokens
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Users.userDetails() instead.
            "prototype$__get__userDetails": {
              url: urlBase + "/users/:id/userDetails",
              method: "GET",
            },

            // INTERNAL. Use Users.userDetails.create() instead.
            "prototype$__create__userDetails": {
              url: urlBase + "/users/:id/userDetails",
              method: "POST",
            },

            // INTERNAL. Use Users.userDetails.update() instead.
            "prototype$__update__userDetails": {
              url: urlBase + "/users/:id/userDetails",
              method: "PUT",
            },

            // INTERNAL. Use Users.userDetails.destroy() instead.
            "prototype$__destroy__userDetails": {
              url: urlBase + "/users/:id/userDetails",
              method: "DELETE",
            },

            // INTERNAL. Use Users.bootcampsResolved.findById() instead.
            "prototype$__findById__bootcampsResolved": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bootcampsResolved/:fk",
              method: "GET",
            },

            // INTERNAL. Use Users.bootcampsResolved.destroyById() instead.
            "prototype$__destroyById__bootcampsResolved": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bootcampsResolved/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Users.bootcampsResolved.updateById() instead.
            "prototype$__updateById__bootcampsResolved": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bootcampsResolved/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#prototype$__get__accessTokens
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Queries accessTokens of users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#prototype$__create__accessTokens
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#prototype$__delete__accessTokens
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#prototype$__count__accessTokens
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Counts accessTokens of users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/users/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Users.bootcampsResolved() instead.
            "prototype$__get__bootcampsResolved": {
              isArray: true,
              url: urlBase + "/users/:id/bootcampsResolved",
              method: "GET",
            },

            // INTERNAL. Use Users.bootcampsResolved.create() instead.
            "prototype$__create__bootcampsResolved": {
              url: urlBase + "/users/:id/bootcampsResolved",
              method: "POST",
            },

            // INTERNAL. Use Users.bootcampsResolved.destroyAll() instead.
            "prototype$__delete__bootcampsResolved": {
              url: urlBase + "/users/:id/bootcampsResolved",
              method: "DELETE",
            },

            // INTERNAL. Use Users.bootcampsResolved.count() instead.
            "prototype$__count__bootcampsResolved": {
              url: urlBase + "/users/:id/bootcampsResolved/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#create
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#createMany
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#upsert
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#replaceOrCreate
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#upsertWithWhere
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#exists
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#findById
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#replaceById
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#find
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#findOne
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#updateAll
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#deleteById
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#count
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#prototype$updateAttributes
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#createChangeStream
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#login
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#logout
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#confirm
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#resetPassword
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/users/reset",
              method: "POST",
            },

            // INTERNAL. Use BootcampResolved.users() instead.
            "::get::BootcampResolved::users": {
              url: urlBase + "/BootcampResolveds/:id/users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Users#getCurrent
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Users#patchOrCreate
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Users#updateOrCreate
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Users#patchOrCreateWithWhere
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Users#update
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Users#destroyById
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Users#removeById
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Users#patchAttributes
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Users#getCachedCurrent
         * @methodOf lbServices.Users
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Users#login} or
         * {@link lbServices.Users#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Users instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Users#isAuthenticated
         * @methodOf lbServices.Users
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Users#getCurrentId
         * @methodOf lbServices.Users
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Users#modelName
        * @propertyOf lbServices.Users
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Users`.
        */
        R.modelName = "Users";

    /**
     * @ngdoc object
     * @name lbServices.Users.userDetails
     * @header lbServices.Users.userDetails
     * @object
     * @description
     *
     * The object `Users.userDetails` groups methods
     * manipulating `UserDetails` instances related to `Users`.
     *
     * Call {@link lbServices.Users#userDetails Users.userDetails()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Users#userDetails
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Fetches hasOne relation userDetails.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R.userDetails = function() {
          var TargetResource = $injector.get("UserDetails");
          var action = TargetResource["::get::Users::userDetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.userDetails#create
             * @methodOf lbServices.Users.userDetails
             *
             * @description
             *
             * Creates a new instance in userDetails of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R.userDetails.create = function() {
          var TargetResource = $injector.get("UserDetails");
          var action = TargetResource["::create::Users::userDetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.userDetails#createMany
             * @methodOf lbServices.Users.userDetails
             *
             * @description
             *
             * Creates a new instance in userDetails of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R.userDetails.createMany = function() {
          var TargetResource = $injector.get("UserDetails");
          var action = TargetResource["::createMany::Users::userDetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.userDetails#destroy
             * @methodOf lbServices.Users.userDetails
             *
             * @description
             *
             * Deletes userDetails of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.userDetails.destroy = function() {
          var TargetResource = $injector.get("UserDetails");
          var action = TargetResource["::destroy::Users::userDetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.userDetails#update
             * @methodOf lbServices.Users.userDetails
             *
             * @description
             *
             * Update userDetails of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserDetails` object.)
             * </em>
             */
        R.userDetails.update = function() {
          var TargetResource = $injector.get("UserDetails");
          var action = TargetResource["::update::Users::userDetails"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Users.bootcampsResolved
     * @header lbServices.Users.bootcampsResolved
     * @object
     * @description
     *
     * The object `Users.bootcampsResolved` groups methods
     * manipulating `BootcampResolved` instances related to `Users`.
     *
     * Call {@link lbServices.Users#bootcampsResolved Users.bootcampsResolved()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Users#bootcampsResolved
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Queries bootcampsResolved of users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampsResolved = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::get::Users::bootcampsResolved"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.bootcampsResolved#count
             * @methodOf lbServices.Users.bootcampsResolved
             *
             * @description
             *
             * Counts bootcampsResolved of users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.bootcampsResolved.count = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::count::Users::bootcampsResolved"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.bootcampsResolved#create
             * @methodOf lbServices.Users.bootcampsResolved
             *
             * @description
             *
             * Creates a new instance in bootcampsResolved of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampsResolved.create = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::create::Users::bootcampsResolved"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.bootcampsResolved#createMany
             * @methodOf lbServices.Users.bootcampsResolved
             *
             * @description
             *
             * Creates a new instance in bootcampsResolved of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampsResolved.createMany = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::createMany::Users::bootcampsResolved"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.bootcampsResolved#destroyAll
             * @methodOf lbServices.Users.bootcampsResolved
             *
             * @description
             *
             * Deletes all bootcampsResolved of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bootcampsResolved.destroyAll = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::delete::Users::bootcampsResolved"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.bootcampsResolved#destroyById
             * @methodOf lbServices.Users.bootcampsResolved
             *
             * @description
             *
             * Delete a related item by id for bootcampsResolved.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `fk` – `{*}` - Foreign key for bootcampsResolved
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bootcampsResolved.destroyById = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::destroyById::Users::bootcampsResolved"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.bootcampsResolved#findById
             * @methodOf lbServices.Users.bootcampsResolved
             *
             * @description
             *
             * Find a related item by id for bootcampsResolved.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `fk` – `{*}` - Foreign key for bootcampsResolved
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampsResolved.findById = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::findById::Users::bootcampsResolved"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Users.bootcampsResolved#updateById
             * @methodOf lbServices.Users.bootcampsResolved
             *
             * @description
             *
             * Update a related item by id for bootcampsResolved.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - users id
             *
             *  - `fk` – `{*}` - Foreign key for bootcampsResolved
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R.bootcampsResolved.updateById = function() {
          var TargetResource = $injector.get("BootcampResolved");
          var action = TargetResource["::updateById::Users::bootcampsResolved"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.BootcampResolved
 * @header lbServices.BootcampResolved
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BootcampResolved` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "BootcampResolved",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/BootcampResolveds/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use BootcampResolved.users() instead.
            "prototype$__get__users": {
              url: urlBase + "/BootcampResolveds/:id/users",
              method: "GET",
            },

            // INTERNAL. Use BootcampResolved.bootcamp() instead.
            "prototype$__get__bootcamp": {
              url: urlBase + "/BootcampResolveds/:id/bootcamp",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#create
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/BootcampResolveds",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#createMany
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/BootcampResolveds",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#upsert
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/BootcampResolveds",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#replaceOrCreate
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/BootcampResolveds/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#upsertWithWhere
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/BootcampResolveds/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#exists
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/BootcampResolveds/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#findById
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/BootcampResolveds/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#replaceById
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/BootcampResolveds/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#find
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/BootcampResolveds",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#findOne
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/BootcampResolveds/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#updateAll
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/BootcampResolveds/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#deleteById
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/BootcampResolveds/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#count
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/BootcampResolveds/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#prototype$updateAttributes
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BootcampResolved id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/BootcampResolveds/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#createChangeStream
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/BootcampResolveds/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.findById() instead.
            "::findById::Bootcamp::bootcampResolveds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Bootcamps/:id/bootcampResolveds/:fk",
              method: "GET",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.destroyById() instead.
            "::destroyById::Bootcamp::bootcampResolveds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Bootcamps/:id/bootcampResolveds/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.updateById() instead.
            "::updateById::Bootcamp::bootcampResolveds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Bootcamps/:id/bootcampResolveds/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds() instead.
            "::get::Bootcamp::bootcampResolveds": {
              isArray: true,
              url: urlBase + "/Bootcamps/:id/bootcampResolveds",
              method: "GET",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.create() instead.
            "::create::Bootcamp::bootcampResolveds": {
              url: urlBase + "/Bootcamps/:id/bootcampResolveds",
              method: "POST",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.createMany() instead.
            "::createMany::Bootcamp::bootcampResolveds": {
              isArray: true,
              url: urlBase + "/Bootcamps/:id/bootcampResolveds",
              method: "POST",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.destroyAll() instead.
            "::delete::Bootcamp::bootcampResolveds": {
              url: urlBase + "/Bootcamps/:id/bootcampResolveds",
              method: "DELETE",
            },

            // INTERNAL. Use Bootcamp.bootcampResolveds.count() instead.
            "::count::Bootcamp::bootcampResolveds": {
              url: urlBase + "/Bootcamps/:id/bootcampResolveds/count",
              method: "GET",
            },

            // INTERNAL. Use Users.bootcampsResolved.findById() instead.
            "::findById::Users::bootcampsResolved": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bootcampsResolved/:fk",
              method: "GET",
            },

            // INTERNAL. Use Users.bootcampsResolved.destroyById() instead.
            "::destroyById::Users::bootcampsResolved": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bootcampsResolved/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Users.bootcampsResolved.updateById() instead.
            "::updateById::Users::bootcampsResolved": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bootcampsResolved/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Users.bootcampsResolved() instead.
            "::get::Users::bootcampsResolved": {
              isArray: true,
              url: urlBase + "/users/:id/bootcampsResolved",
              method: "GET",
            },

            // INTERNAL. Use Users.bootcampsResolved.create() instead.
            "::create::Users::bootcampsResolved": {
              url: urlBase + "/users/:id/bootcampsResolved",
              method: "POST",
            },

            // INTERNAL. Use Users.bootcampsResolved.createMany() instead.
            "::createMany::Users::bootcampsResolved": {
              isArray: true,
              url: urlBase + "/users/:id/bootcampsResolved",
              method: "POST",
            },

            // INTERNAL. Use Users.bootcampsResolved.destroyAll() instead.
            "::delete::Users::bootcampsResolved": {
              url: urlBase + "/users/:id/bootcampsResolved",
              method: "DELETE",
            },

            // INTERNAL. Use Users.bootcampsResolved.count() instead.
            "::count::Users::bootcampsResolved": {
              url: urlBase + "/users/:id/bootcampsResolved/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#patchOrCreate
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#updateOrCreate
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#patchOrCreateWithWhere
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#update
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#destroyById
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#removeById
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#patchAttributes
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BootcampResolved id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BootcampResolved` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.BootcampResolved#modelName
        * @propertyOf lbServices.BootcampResolved
        * @description
        * The name of the model represented by this $resource,
        * i.e. `BootcampResolved`.
        */
        R.modelName = "BootcampResolved";


            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#users
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Fetches belongsTo relation users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BootcampResolved id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
        R.users = function() {
          var TargetResource = $injector.get("Users");
          var action = TargetResource["::get::BootcampResolved::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BootcampResolved#bootcamp
             * @methodOf lbServices.BootcampResolved
             *
             * @description
             *
             * Fetches belongsTo relation bootcamp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BootcampResolved id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Bootcamp` object.)
             * </em>
             */
        R.bootcamp = function() {
          var TargetResource = $injector.get("Bootcamp");
          var action = TargetResource["::get::BootcampResolved::bootcamp"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Container",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/containers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainers
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/containers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#createContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/containers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#destroyContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/containers/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/containers/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFiles
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/containers/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/containers/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#removeFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/containers/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#upload
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/containers/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#download
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "download": {
              url: urlBase + "/containers/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Container#modelName
        * @propertyOf lbServices.Container
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Container`.
        */
        R.modelName = "Container";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Email#modelName
        * @propertyOf lbServices.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
