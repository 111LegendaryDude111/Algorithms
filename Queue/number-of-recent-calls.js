var RecentCounter = function () {
  this.arr = [];
};

RecentCounter.prototype.ping = function (t) {
  this.arr.push(t);

  while (this.arr[0] < t - 3000) this.arr.shift();
  return this.arr.length;
};

const recentCounter = new RecentCounter();
recentCounter.ping(1);
recentCounter.ping(100);
recentCounter.ping(3001);
recentCounter.ping(3002);
