PrelanuchClient.Visitor = DS.Model.extend({
  email: DS.attr('string'),
  code:  DS.attr('string'),
});

PrelanuchClient.SHost = Ember.Object.extend({
	name:null,
	email:null,
});

PrelanuchClient.UniqueLink = DS.Model.extend({
	link: DS.attr('string'),
});
