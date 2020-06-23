module.exports = [
  {
    '$project': {
      '_id': 0, 
      'Date': {
        '$dateToString': {
          'format': '%Y-%m-%d', 
          'date': '$headers.Date'
        }
      }
    }
  }, {
    '$group': {
      '_id': '$Date', 
      'total': {
        '$sum': 1
      }
    }
  }, {
    '$group': {
      '_id': null, 
      'avg': {
        '$avg': '$total'
      }, 
      'min': {
        '$min': '$total'
      }, 
      'max': {
        '$max': '$total'
      }
    }
  }
];

// group on date day
// total sum? sum 1?
// finds the min, max, and average emails per day
