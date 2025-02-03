```javascript
//Corrected aggregation pipeline
db.collection('data').aggregate([
  {
    $match: { /*some condition*/ }
  },
  {
    $sort: { 'field': 1 } //Explicit sort, ascending order
  },
  {
    $group: {
      _id: '$field',
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10
  }
])
```