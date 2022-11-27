//  ***** Observer Pattern *****
//  Its best use when you want to subscribe and unsubscribe a plan
class EventObserver {
   constructor() {
      this.observers = [];
   }

   subscribe(fu) {
      this.observers.push(fu);
      console.log(`You have now subscribed to ${fu.name}`);
   }

   unsubscribe(fu) {
      // Filter out from thr list Whatever matches the callback function. if there is no match, callback gets to stay on the list, the filter returns a new list and reassigns the list of observers.
      this.observers = this.observers.filter(function(item){
         if(item !== fu) {
            return item;
         }
      });
      console.log(`You have now Unsubscribe from ${fu.name}`);
   }

   fire() {
      this.observers.forEach(function(item) {
         item.call();
      });
   }
   
}


const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
   click.subscribe(getCurMilliSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
   click.unsubscribe(getCurMilliSeconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
   click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
   click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
   click.fire();
});

// Click Handler
const getCurMilliSeconds = function() {
   console.log(`current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function() {
   console.log(`current Seconds: ${new Date().getSeconds()}`);
};