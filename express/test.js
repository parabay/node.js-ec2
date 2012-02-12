var simpledb = require('simpledb')

var sdb = new simpledb.SimpleDB(
  {keyid:'1WV27TXAW7F9DAWTNHR2',secret:'0gYaL9Ea4CKnQqbqcLj0x5MJZYURxNw0+G/82V0h'},
  simpledb.debuglogger
)

sdb.createDomain( 'yourdomain', function( error ) {

  sdb.putItem('yourdomain', 'item1', {attr1:'one', attr2:'two'}, function( error ) {

    sdb.getItem('yourdomain', 'item1', function( error, result ) {
      console.log( 'attr1 = '+result.attr1 )
      console.log( 'attr2 = '+result.attr2 )
    })
  })
})