
const Search =()=>{

    return <>
    <div class="banner-search">
  <div class="container"> 
    
    <h3>Buy, Sale & Rent</h3>
    <div class="searchbar">
      <form method="get" action="/searchproperty">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <input type="text" class="form-control" name='key' placeholder="Search of Properties"/>
          <div class="row">
            <div class="col-lg-3 col-sm-3 ">
              <select class="form-control" name='type'>
              <option value=''>All Types</option>
                <option value='rent'>Rent</option>
                <option value="sell">Sell</option>
              </select>
            </div>
            <div class="col-lg-3 col-sm-4">
              <select class="form-control" name='price'>
                <option>Price</option>
                <option value='15000-20000'>$15,000 - $20,000</option>
                <option value='20000-30000'>$200,000 - $250,000</option>
                <option value='30000-40000'>$250,000 - $300,000</option>
                <option value='40000-1000000'>$300,000 - above</option>
              </select>
            </div>
            <div class="col-lg-3 col-sm-4">
            <input type="text" class="form-control" name='city' placeholder="Search by city"/>

              </div>
              <div class="col-lg-3 col-sm-4">
              <button class="btn btn-success"  type='submit'>Find Now</button>
              </div>
          </div>
          
          
        </div>
        <div class="col-lg-5 col-lg-offset-1 col-sm-6 ">
          <p>Join now and get updated with all the properties deals.</p>
          <button class="btn btn-info"   data-toggle="modal" data-target="#loginpop">Login</button>        </div>
      </div>
      </form>
    </div>
   
  </div>
</div>
    </>
}

export default Search;