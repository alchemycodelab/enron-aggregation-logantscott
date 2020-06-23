module.exports = [
  {
    '$unwind': {
      'path': '$headers.To'
    }
  }, {
    '$project': {
      '_id': 0, 
      'To': '$headers.To'
    }
  }, {
    '$group': {
      '_id': '$To', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
];
