module.exports = function(app) {
  app.dataSources.db.autoupdate();
  console.log("Performed autoupdate");
};