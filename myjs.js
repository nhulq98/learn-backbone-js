var h1Node = document.querySelector('h1');

// var assignEvent = (item)=>{
//     // item.onclick = (e)=>{console.log(e.target)};
//     item.onclick = function(this){console.log(this)};
// }

// h1Node.forEach(item=>{
//     // item.onclick = (e) => {console.log(this)};
//     item.addEventListener('click', function(){console.log(this)});
// });


// create custom events
const catFound = new CustomEvent('animalfound', {
    detail: {
      name: 'cat'
    }
  });
  const dogFound = new CustomEvent('animalfound', {
    detail: {
      name: 'dog'
    }
  });

  // add an appropriate event listener
  h1Node.addEventListener('animalfound', (e) => console.log(e.detail.name));


  h1Node.dispatchEvent(catFound);
  h1Node.dispatchEvent(dogFound);


window.onload = () =>{// it is fired when the entire page loads
    console.log('window.onload');
}
window.onunload = () =>{// occurs when user unload page
    console.log('window.onunload');
}
document.onload = () =>{// occurs when user unload page
    console.log('document.onload');
}

var ok = Backbone.Model.extend();

//======= reder data to view scope============
first_view = Backbone.View.extend({
    el: 'body',
    initialize: function () {
        // this.$el.empty();// reset view
        this.render();
    },

    render: function () {
        this.$el.append("<h1>The Whisky APP - nhu</h1>");
        this.list_view = new List_view();
        this.$el.append(this.list_view.render().el);
        return this;
    }
});

List_view = Backbone.View.extend({
    tagName: 'ul',
    id: 'listDogs',
    className: 'list-dog',
    // el: 'ul',
    render: function () {
        this.$el.empty();
        this.$el.append("<li>Nhu</li>");
        this.$el.append("<li>Dat</li>");
        this.$el.append("<li>Huu</li>");
        return this;
    }
});
index_view = new first_view();

// var Sidebar = Backbone.Model.extend({
//     promptContent: function() {
//       var content = prompt("Please enter a CSS color:");
//       this.set({text: content});
//     }
//   });
  
//   window.sidebar = new Sidebar();
  
//   sidebar.on('change:text', function(model, text) {
//     $('#listDogs').css({text: text});
//   });
  
//   sidebar.set({text: 'white'});
  
//   sidebar.promptContent();
