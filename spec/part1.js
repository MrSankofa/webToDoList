(function() {
  'use strict';
	describe('Testing To Do List', function() {

		describe('CRUD Tests', function() {
               
               it('created to do activity, (Go to Grocery Store)' , function() {
                    // create add function in js/index.js
                    addItemTodo('Go to Grocery Store')
                    expect(document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes["0"].data).to.equal("Go to Grocery Store");
               });
               
               it('find/read to do activity (Go to Grocery Store)' , function() {
                    // create read function in js/index.js
                    expect(fill_me_in).to.equal(fill_me_in);
               });

               it('Updated to do activity (Go to Gym)' , function() {
                    // create update function in js/index.js
                    expect(fill_me_in).to.equal(fill_me_in);
               });

               it('deleted to do activity (Go to Grocery Store)' , function() {
                    // create delete function in js/index.js
                    expect(fill_me_in).to.equal(fill_me_in);
               });
		});
	});
}() );
