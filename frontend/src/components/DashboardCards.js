function DashboardCards({ expenses }) {

    const total=expenses.reduce(
        (sum,e)=>sum+Number(e.amount),
        0
       );

  const food = expenses
    .filter(e => e.category === "Food")
    .reduce(
      (sum, e) => sum + Number(e.amount),
      0
    );
    
  const travel = expenses
    .filter(e => e.category === "Travel")
    .reduce(
      (sum, e) => sum + Number(e.amount),
      0
    );
    


    return(

<div className="row mt-4">

<div className="col-md-3">

<div className="dashboard-card gradient-blue p-4">

<h6>Total Expenses</h6>

<h2>₹{total}</h2>

</div>

</div>

<div className="col-md-3">

<div className="dashboard-card gradient-green p-4">

<h6>Food</h6>

<h2>₹{food}</h2>

</div>

</div>

<div className="col-md-3">

<div className="dashboard-card gradient-orange p-4">

<h6>Travel</h6>

<h2>₹{travel}</h2>

</div>

</div>

<div className="col-md-3">

<div className="dashboard-card gradient-purple p-4">

<h6>Transactions</h6>

<h2>{expenses.length}</h2>

</div>

</div>

</div>

    )

}

export default DashboardCards;