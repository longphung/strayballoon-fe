<script>
export default {
  name: 'ReportCard'
};
</script>

<template>
  <div class='report-card'>
    <div class="stats">
      <div class="tabled">
          <div class="table1">No.</div>
          <div class="table1">Assessed Criteria</div>
          <div class="table1">Total Marks</div>
          <div class="table1">Obtained Marks</div>
          <div class="table2">5</div>
          <div class="table2">6</div>
          <div class="table2">7</div>
          <div class="table2">8</div>
          <div class="table2">11</div>
          <div class="table2">22</div>
          <div class="table2">33</div>
          <div class="table2">44</div>
          <div class="table2">2</div>
          <div class="table2">3</div>
          <div class="table2">4</div>
          <div class="table2">5</div>
          <div class="table2">6</div>
          <div class="table2">7</div>
          <div class="table2">8</div>
          <div class="table2">11</div>
          <div class="table2">22</div>
          <div class="table2">33</div>
          <div class="table2">44</div>
          <div class="table2">2</div>
          <div class="table2">3</div>
          <div class="table2">4</div>
          <div class="table2">5</div>
          <div class="table2">6</div>
          <div class="table1">7</div>
          <div class="table1">8</div>
          <div class="table1">11</div>
      </div>
      <div class="chart">Chart Report</div>
    </div>
    <div class="comment">ADDITIONAL COMMENTS:</div>
    <div class="save">
      <button class="pdf">Save as PDF</button>
      <button class="edit">Edit Report</button>
      <button class="generate">Generate PDF</button>
    </div>
  </div>
</template>

<style scoped>
.report-card {
  background: #6E6E6E;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 80% 12% 8%;
  padding: 0.7rem;
  gap: 0.1rem;
}
.stats {
  background-color: #6E6E6E;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 0.3rem;
}

.tabled {
  background-color: #444444;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  grid-template-columns: 15% 50% 17.5% 17.5%;
  padding: 1rem;
  align-content: center;
}
.chart {
  background-color: #444444;
  border-radius: 1rem;
}
.comment {
 background-color: #444444;
 border-radius: 1rem;
 padding-left: 2rem;
 font-size: 1rem;
 font-weight: bold;
 color: white;
}
.save{
  background-color: #6E6E6E;
  display: grid;
  grid-template-columns: 60% 20% 20%;
}
.pdf {
  background-color: #444444;
  border-radius: 0.6rem;
  width: 8rem; 
  color: white;
}

.edit {
  background-color: #444444;
  border-radius: 0.6rem;
  width: 8rem; 
  justify-self: center;
  color: white; 
}

.generate {
  background-color: #444444;
  border-radius: 0.6rem; 
  width: 8rem; 
  justify-self: center;
  color: white;
}

/* Table part */
.table1{
  display: grid;
  background-color: #32B7BF;
  color: white;
  justify-content: center;
  width: 100%;
  font-size: 0.8rem;
  align-items: center;
  text-align: center;
  border: solid 0.2rem #444444;
}
.table2{
  display: grid;
  background-color: #DDDDDD;
  color: black;
  justify-content: center;
  width: 100%;
  font-size: 0.8rem;
  border: solid 0.2rem #444444;
  align-items: center;
  text-align: center;
}
</style>
