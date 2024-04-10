//celebrating Liverpool victory in javaScript using Object.create()

let My_team = {
    winner: function () {
      console.log(`Hello My Team Is ${this.TeamName} Scored ${this.Goals} Against ${this.OpponentTeam} And We Are ${this.Teamranking} On PL Table`);
    },
  };
  
  const pool = Object.create(My_team);
  pool.TeamName = "Liverpool";
  pool.OpponentTeam = "Sheffield United";
  pool.Teamranking = "First";
  pool.Goals = "3 goals";
  pool.winner();

  
